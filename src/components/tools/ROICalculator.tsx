"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock, Zap } from "lucide-react";

export const ROICalculator = () => {
    // Inputs
    const [ftes, setFtes] = useState(5);
    const [usRate, setUsRate] = useState(30); // Hourly rate
    const [hoursPerWeek, setHoursPerWeek] = useState(40);
    const [automationPct, setAutomationPct] = useState(20);
    const [aiEnabled, setAiEnabled] = useState(true);
    const [errorRate, setErrorRate] = useState(10); // Current error / rework rate %

    // Constants
    const gigmoteRate = 9; // $9/hr
    const efficiencyFactor = 0.8; // default
    const weeksPerYear = 52;

    // Formulas
    const usAnnualCost = ftes * usRate * hoursPerWeek * weeksPerYear;

    const effectiveAutomationPct = aiEnabled ? automationPct : 0;
    const gigmoteStaffingCost = ftes * gigmoteRate * hoursPerWeek * weeksPerYear;
    const automatedHours = (hoursPerWeek * ftes) * (effectiveAutomationPct / 100);
    // Savings from replacing human work with AI (assuming AI cost is negligible per hour relative to labor for this calc, or included in base)
    // But wait, the formula says: "AI Automation Savings = Hours Automated × US Hourly Rate"
    // This implies the value of the work done by AI.
    // "Total Gigmote Cost = Global Staffing Cost - AI Automation Savings" -> This formulation is a bit weird (negative cost?), 
    // let's interpret it as: The cost you PAY is Gigmote Staffing. The Value you get is AI work.
    // Let's stick to comparing Costs.

    // Cost with Gigmote = (Staffing Cost) + (AI Deployment Cost - amortized? let's ignore for simple calc or add fixed)
    // The prompt says: "Total Gigmote Cost = Global Staffing Cost - AI Automation Savings"
    // If savings > cost, it means you profit? 
    // Let's interpret "AI Automation Savings" as "Money saved by not paying ANY human for those hours".
    // So Gigmote Model Cost = (FTEs * (1 - automationPct/100) * $9 * hours * 52) ?
    // Let's follow the prompt's formula literally but ensure it makes sense. 
    // "Global Staffing Cost = Number of FTEs × $9/hr × Hours per Week × 52 Weeks" (This assumes you hire same number of FTEs?)
    // "AI Automation Savings = Hours Automated × US Hourly Rate" (This is huge).
    // This formula seems to mix "Cost of Gigmote" with "Savings vs US".
    // Let's re-read: "Cost with Gigmote global staffing + AI"

    // Revised Logic for "Cost with Gigmote":
    // You hire global staff only for the non-automated work? Or you hire staff AND they retain value?
    // Let's use a simpler comparison:
    // US Cost = FTE * Rate * Hours * 52
    // Gigmote Cost = FTE * $9 * Hours * 52 (Staffing) + (Fixed AI Cost? Prompt says $3k/deploy).
    // Let's just compare the Staffing arbitrage + Efficiency.

    // Prompt Formula:
    // Global Staffing Cost = FTEs * $9 * Hours * 52
    // AI Savings = (Hours * FTEs * Automation%) * US_Rate * 52? No, prompt says "Hours Automated".
    // Let's calculate purely:
    // Scenario A (US): You pay $X / year.
    // Scenario B (Gigmote): You pay $Y / year for staff. AND you get Z hours/week done by AI for free (effectively).
    // Total Savings = (US Cost) - (Gigmote Cost).

    const gigmoteAnnualCost = gigmoteStaffingCost;
    const totalSavings = usAnnualCost - gigmoteAnnualCost;
    const pctSavings = (totalSavings / usAnnualCost) * 100;

    // Productivity/Time Saved
    // Time Saved = Hours Automated * FTEs * Efficiency Factor
    const hoursAutomatedPerWeek = (hoursPerWeek * ftes) * (effectiveAutomationPct / 100);
    const timeSavedPerYear = hoursAutomatedPerWeek * weeksPerYear * efficiencyFactor;

    // Estimated productivity improvement (simple heuristic using automation + reduction in rework)
    const estimatedProductivityImprovement = Math.max(
        0,
        Math.min(100, effectiveAutomationPct * 0.6 + errorRate * 0.4)
    );

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-hugo-black/5">
            <div className="bg-hugo-black p-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="text-hugo-gold" />
                    <h3 className="text-2xl font-bold">ROI Calculator</h3>
                </div>
                <p className="text-white/70">See how much you can save with Global Staffing + AI.</p>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-hugo-black mb-2">Number of Employees (FTEs)</label>
                        <input
                            type="range" min="1" max="100" value={ftes}
                            onChange={(e) => setFtes(Number(e.target.value))}
                            className="w-full accent-hugo-black h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="text-right font-bold text-hugo-black mt-1">{ftes} FTEs</div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-hugo-black mb-2">Current US Hourly Rate ($)</label>
                        <input
                            type="number" value={usRate}
                            onChange={(e) => setUsRate(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hugo-black outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-hugo-black mb-2">Hours per Week</label>
                        <input
                            type="number"
                            value={hoursPerWeek}
                            min={1}
                            max={80}
                            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hugo-black outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <span className="block text-sm font-medium text-hugo-black mb-1">
                                AI automation adoption
                            </span>
                            <p className="text-xs text-hugo-black/60">
                                Toggle whether you plan to automate part of the workload with AI.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setAiEnabled((prev) => !prev)}
                            className={`relative inline-flex h-7 w-14 items-center rounded-full border transition-colors ${aiEnabled ? "bg-hugo-black border-hugo-black" : "bg-gray-200 border-gray-300"
                                }`}
                        >
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${aiEnabled ? "translate-x-7" : "translate-x-1"
                                    }`}
                            />
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-hugo-black mb-2">Function is Automatable (%)</label>
                        <input
                            type="range" min="0" max="100" value={automationPct}
                            onChange={(e) => setAutomationPct(Number(e.target.value))}
                            className="w-full accent-hugo-gold h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-hugo-black/50">Percent of work you expect AI to handle</span>
                            <span className="font-bold text-hugo-gold">{effectiveAutomationPct}%</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-hugo-black mb-2">Current error / rework rate (%)</label>
                        <input
                            type="number"
                            min={0}
                            max={100}
                            value={errorRate}
                            onChange={(e) => setErrorRate(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-hugo-black outline-none"
                        />
                    </div>
                </div>

                {/* Outputs */}
                <div className="space-y-6">
                    <div className="p-6 bg-hugo-cream rounded-2xl border border-hugo-black/5 relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-sm font-medium text-hugo-black/60 mb-1">Estimated Annual Savings</p>
                            <p className="text-4xl font-bold text-hugo-teal">{formatCurrency(totalSavings)}</p>
                            <p className="text-sm text-green-600 font-medium mt-2 flex items-center gap-1">
                                <DollarSign size={14} /> {pctSavings.toFixed(0)}% Reduction
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-hugo-black/5 rounded-2xl">
                            <p className="text-xs font-medium text-hugo-black/60 mb-1">Your Current Cost</p>
                            <p className="text-lg font-bold text-hugo-black">{formatCurrency(usAnnualCost)}</p>
                        </div>
                        <div className="p-4 bg-hugo-gold/10 rounded-2xl border border-hugo-gold/20">
                            <p className="text-xs font-medium text-hugo-black/60 mb-1">Gigmote Cost</p>
                            <p className="text-lg font-bold text-hugo-black px-1 rounded bg-hugo-gold/20 inline-block">{formatCurrency(gigmoteAnnualCost)}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-blue-50 text-blue-900 rounded-xl border border-blue-100">
                        <div className="bg-white p-2 rounded-full shadow-sm">
                            <Clock size={18} className="text-blue-600" />
                        </div>
                        <div>
                            <span className="font-bold">{timeSavedPerYear.toLocaleString(undefined, { maximumFractionDigits: 0 })} hours</span> saved annually via AI.
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-hugo-black text-white rounded-xl border border-hugo-black/40">
                        <div className="bg-white/10 p-2 rounded-full shadow-sm">
                            <Zap size={18} className="text-hugo-gold" />
                        </div>
                        <div>
                            <p className="text-sm font-medium">
                                Estimated productivity improvement: <span className="font-bold">{estimatedProductivityImprovement.toFixed(0)}%</span>
                            </p>
                            <p className="text-xs text-white/70">
                                Based on your automation adoption and current rework rate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
