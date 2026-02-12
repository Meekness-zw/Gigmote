
import {
    ShieldCheck,
    Cpu,
    Globe,
    Users,
    Briefcase,
    Activity,
    Stethoscope,
    MonitorSmartphone,
    LineChart,
    Banknote
} from "lucide-react";

export const siteContent = {
    services: [
        {
            slug: "bpo-matchmaking-advisory",
            icon: ShieldCheck,
            title: "BPO Matchmaking & Advisory",
            slogan: "Outsource Without Guesswork",
            description: "Design, select, and manage outsourcing partners that actually deliver. Strategy, vendors, and performance — handled.",
            features: [
                "Vendor selection and shortlisting",
                "Operating model and playbook design",
                "Performance metrics & executive reporting",
                "Risk, compliance, and continuity planning",
                "Optimization of existing outsourcing programs"
            ],
            bestFor: ["CX Teams", "Operations", "Finance & Back Office", "Scaling Companies"],
            pricing: "Custom Pricing",
            stats: [
                { label: "Cost Reduction", value: "40–60%" },
                { label: "Faster Launch", value: "2–4x" }
            ]
        },
        {
            slug: "global-staffing",
            icon: Users,
            title: "Global Staffing",
            slogan: "Reliable Global Talent. Fully Integrated.",
            description: "We place vetted, full-time professionals directly into your team. No freelancers. No temp placements. Just long-term, accountable team members.",
            features: [
                "Full-time vetted global talent",
                "Roles across CX, operations, finance, tech, and marketing",
                "Optional management & oversight layer",
                "Structured onboarding and playbooks",
                "Metrics-driven performance management"
            ],
            bestFor: [
                "Customer Support, Admin & Operations",
                "Data & Engineering Teams",
                "Sales & Marketing",
                "Financial Services & FinTech",
                "Healthcare Revenue Cycle"
            ],
            pricing: "From $9/hour",
            stats: [
                { label: "Cost Reduction", value: "40–60%" },
                { label: "Retention Focus", value: "Long-term" }
            ]
        },
        {
            slug: "ai-business-solutions",
            icon: Cpu,
            title: "AI Business Solutions",
            slogan: "Automate Busywork. Keep Humans in Control.",
            description: "Practical AI deployments that reduce repetitive work, improve efficiency, and keep humans in the loop for quality control.",
            features: [
                "AI chatbots and virtual assistants",
                "Workflow and process automation",
                "CRM and RevOps AI assistants",
                "Data processing & enrichment automation",
                "AI lead qualification and routing"
            ],
            bestFor: ["Customer Support", "Sales & RevOps", "Operations", "Founders & Leadership Teams"],
            pricing: "From $3,000 per deployment",
            stats: [
                { label: "Time Saved", value: "1000s hrs" },
                { label: "Efficiency Boost", value: "30–50%" }
            ]
        }
    ],
    industries: [
        {
            slug: "healthcare",
            icon: Stethoscope,
            title: "Healthcare",
            description: "Patient communication, admin workflows, and revenue cycle support with strict accuracy and compliance.",
            heroTitle: "Healthcare operations that protect revenue and patient trust."
        },
        {
            slug: "saas",
            icon: MonitorSmartphone,
            title: "SaaS",
            description: "Scale support, onboarding, and revenue operations while protecting CSAT and retention.",
            heroTitle: "Customer and revenue operations that keep your SaaS growing."
        },
        {
            slug: "it-web3",
            icon: Cpu,
            title: "IT & Web3",
            description: "Development, service management, incident response, and infrastructure support for modern tech companies.",
            heroTitle: "Technical teams that can ship, support, and scale."
        },
        {
            slug: "digital-marketing",
            icon: Activity,
            title: "Digital Marketing",
            description: "Campaign execution, reporting, content coordination, and paid media operations with ROI visibility.",
            heroTitle: "Marketing operations that turn spend into predictable growth."
        },
        {
            slug: "sales-enablement",
            icon: LineChart,
            title: "Sales Enablement",
            description: "CRM management, pipeline tracking, outbound coordination, and proposal support.",
            heroTitle: "Revenue operations that keep your pipeline moving."
        },
        {
            slug: "fintech",
            icon: Banknote,
            title: "FinTech",
            description: "Secure, compliant support for the financial sector.",
            heroTitle: "Operational partners who understand compliance, security, and regulation."
        }
    ],
    company: {
        heroTitle: "Built by operators, not recruiters.",
        heroDescription: "We’ve scaled outsourcing teams, CX organizations, and AI programs inside real companies — and we built Gigmote to fix what traditional outsourcing gets wrong.",
        stats: [
            { label: "Average Cost Savings", value: "40–60%" },
            { label: "Global Talent Hubs", value: "Multiple" },
            { label: "Focus", value: "Quality & Retention" }
        ]
    },
    faqs: [
        {
            question: "How quickly can you scale a team?",
            answer: "We can launch a dedicated team in as little as 2 weeks, thanks to our pre-vetted talent pool."
        },
        {
            question: "Where are your agents located?",
            answer: "We have delivery centers in the Philippines, Colombia, South Africa, and Eastern Europe, providing varied price points and skill sets."
        },
        {
            question: "Do you offer 24/7 support?",
            answer: "Yes, our global footprint allows us to provide disparate time-zone coverage for true 'follow-the-sun' support."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer flexible pricing models including hourly rates, dedicated monthly teams, and outcome-based pricing."
        }
    ],
    pricing: {
        heroTitle: "Transparent & Simple Pricing"
    },
    hero: {
        trustBar: "Supporting teams in FinTech • Healthcare • SaaS • IT • Marketing • Sales"
    },
    valueProps: [
        {
            icon: Users,
            title: "Built by operators",
            description: "We’ve personally built, scaled, and managed global teams — so we design systems that actually work in the real world."
        },
        {
            icon: Cpu,
            title: "Human + AI delivery",
            description: "We blend vetted talent with practical AI automation, keeping humans in control for quality and compliance."
        },
        {
            icon: ShieldCheck,
            title: "Quality & compliance first",
            description: "We prioritize retention, security, and long-term performance — not race-to-the-bottom outsourcing."
        },
        {
            icon: Globe,
            title: "Global talent, western aligned",
            description: "Teams that understand western business expectations, communication standards, and customer experience."
        }
    ],
    howItWorks: [
        {
            step: 1,
            title: "Discovery & Blueprint",
            description: "We analyze your current workflows, identify bottlenecks, and build a custom operating model."
        },
        {
            step: 2,
            title: "Talent Matchmaking",
            description: "We source candidates from our pre-vetted pool who match your specific industry and tech stack."
        },
        {
            step: 3,
            title: "Managed Integration",
            description: "We support onboarding, KPI setup, and workflow integration so your new talent and AI solutions plug directly into your operations."
        },
        {
            step: 4,
            title: "Scale & Optimize",
            description: "We continuously improve efficiency through data, automation, and operational refinement."
        }
    ],
    caseStudies: [
        {
            id: "accounting-financial-operations-optimization",
            industry: "Accounting & Financial Operations",
            title: "Accounting & Financial Operations Optimization",
            challenge:
                "A fast-growing US-based e-commerce brand with $4.2M in annual revenue was battling backlogged bookkeeping, delayed month-end closes, and poor cash flow visibility. Their in-house finance manager was overwhelmed, and hiring two additional U.S. accountants would have cost roughly $165,000 annually including benefits.",
            solution:
                "Gigmote deployed a dedicated offshore accounting pod (senior accountant + junior bookkeeper), streamlined AP/AR, codified monthly close procedures, and integrated reporting dashboards into their Shopify and Stripe stack — all while working within the client’s existing tools for full transparency.",
            results: [
                "58% reduction in finance operations cost (~$92,000 annually saved)",
                "Month-end close time cut from 21 days to 6 days",
                "35% improvement in cash flow forecasting accuracy and +8% gross margin lift in two quarters"
            ]
        },
        {
            id: "b2b-sales-development-acceleration",
            industry: "B2B SaaS Sales Development",
            title: "B2B Sales Development Acceleration",
            challenge:
                "A seed-stage U.S. SaaS company selling into logistics providers had strong product-market fit but an inconsistent pipeline. Founders were running outbound themselves, resulting in fewer than 8 qualified demos per month. Hiring U.S.-based SDRs at $70,000–$85,000 each wasn’t feasible.",
            solution:
                "Gigmote built and trained a two-person Sales Development team to own outbound prospecting, LinkedIn engagement, CRM hygiene, and pipeline qualification. We implemented scripts, daily activity targets, and a KPI dashboard tied to demos and opportunity conversion.",
            results: [
                "Outbound activity increased by 400% within 45 days",
                "Qualified demos grew to an average of 26 per month",
                "Pipeline value grew from $480k to $2.1M in < 6 months while saving ~$110k annually vs. local hires"
            ]
        },
        {
            id: "digital-marketing-performance-efficiency",
            industry: "Healthcare",
            title: "Digital Marketing Performance & Cost Efficiency",
            challenge:
                "A healthcare technology company with $10M ARR was overspending on U.S.-based marketing contractors while suffering from slow content turnaround and inconsistent campaigns. Blended marketing spend exceeded $32,000/month and CPL was rising.",
            solution:
                "Gigmote assembled a dedicated digital marketing pod (performance marketer, content specialist, marketing ops coordinator), centralized ad management, rebuilt funnel tracking, implemented structured content calendars, and moved reporting from spreadsheets to automated dashboards.",
            results: [
                "42% decrease in cost-per-lead and 55% improvement in paid campaign ROI",
                "3x increase in content production output",
                "$180,000 annual reduction in marketing operational spend and 68% lift in qualified inbound leads"
            ]
        },
        {
            id: "revenue-cycle-management-optimization",
            industry: "Healthcare RCM",
            title: "Revenue Cycle Management (RCM) Optimization",
            challenge:
                "A multi-location medical practice with 14 providers faced rising insurance denials (18%), delayed reimbursements, and inconsistent follow-up. Days in A/R averaged 52, straining cash flow. Adding in-house billing staff would have cost ~$120,000 annually.",
            solution:
                "Gigmote assembled a specialized RCM team focused on prior authorizations, claim scrubbing, denial management, and follow-up. We implemented SOPs, denial analytics, and daily claim status tracking for visibility and accountability.",
            results: [
                "Denial rates reduced from 18% to 7% and days in A/R cut to 31",
                "Net collections increased by 14% and monthly cash flow improved by ~$220,000",
                "Billing operational costs reduced by 46% while funding the opening of an additional specialty clinic"
            ]
        },
        {
            id: "integrated-back-office-sales-support-real-estate",
            industry: "Real Estate & Back Office",
            title: "Integrated Back-Office & Sales Support for Scaling Real Estate Firm",
            challenge:
                "A U.S. real estate investment group managing 75+ properties struggled with property accounting, tenant communication, and investor reporting. Admin bottlenecks were slowing acquisitions and local hiring was too expensive.",
            solution:
                "Gigmote deployed a hybrid structure — two accounting specialists, one leasing support coordinator, and a CRM administrator — to standardize reporting, automate rent tracking and follow-ups, and tighten coordination between brokers and internal teams.",
            results: [
                "52% decrease in operational overhead (~$210,000 in annual savings)",
                "60% faster administrative turnaround times",
                "Property portfolio growth from 75 to 110 properties in 18 months without increasing U.S.-based headcount"
            ]
        }
    ]
};
