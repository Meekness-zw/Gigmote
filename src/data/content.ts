
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
    /** Core value proposition — applies across the entire project */
    coreValue:
        "Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability.",
    services: [
        {
            slug: "bpo-matchmaking-advisory",
            icon: ShieldCheck,
            title: "BPO Matchmaking & Advisory",
            slogan: "Outsource Without Guesswork",
            description: "We help companies design, select, and manage outsourcing partners that deliver consistent performance.",
            features: [
                "Vendor selection",
                "Operating model design",
                "Performance metrics & oversight",
                "Risk and compliance planning",
                "Optimization of existing outsourcing"
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
            description: "We place vetted, full-time professionals into your team. No freelancers. No temporary placements. Just long-term, accountable team members.",
            features: [
                "Vetted talent only",
                "Full-time accountability",
                "Optional oversight & management",
                "Seamless onboarding support"
            ],
            bestFor: [
                "Customer Support, Admin & Operations",
                "Data Scientists and Engineers",
                "Full Stack Developers & AI/ML Engineers",
                "Sales Enablement & Digital Marketing Specialists",
                "Financial services & Fintech & Accounting",
                "Healthcare Revenue Cycle Management"
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
            description: "We implement practical AI tools that reduce repetitive workload and improve efficiency across customer support, sales, and internal operations.",
            features: [
                "AI Chatbots",
                "Workflow Automation",
                "CRM AI Assistants",
                "Data Processing Automation",
                "AI Lead Qualification"
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
            description: "We support patient communication, admin workflows, and full revenue cycle operations like insurance verification, charge entries, claims submissions etc while maintaining strict compliance and accuracy standards.",
            heroTitle: "Healthcare operations that protect revenue and patient trust."
        },
        {
            slug: "saas",
            icon: MonitorSmartphone,
            title: "SaaS",
            description: "We help SaaS companies scale customer support, revenue operations, onboarding, and retention while maintaining high CSAT.",
            heroTitle: "Customer and revenue operations that keep your SaaS growing."
        },
        {
            slug: "it-web3",
            icon: Cpu,
            title: "IT & Web3",
            description: "We support development, service management, incident response, and infrastructure scaling.",
            heroTitle: "Technical teams that can ship, support, and scale."
        },
        {
            slug: "digital-marketing",
            icon: Activity,
            title: "Digital Marketing",
            description: "We help brands scale campaign execution, reporting, content coordination, and paid media operations while maintaining ROI visibility.",
            heroTitle: "Marketing operations that turn spend into predictable growth."
        },
        {
            slug: "sales-enablement",
            icon: LineChart,
            title: "Sales Enablement",
            description: "We support CRM management, pipeline tracking, outbound coordination, and proposal development to improve close rates and revenue predictability.",
            heroTitle: "Revenue operations that keep your pipeline moving."
        },
        {
            slug: "fintech",
            icon: Banknote,
            title: "FinTech",
            description: "We understand compliance, security, and regulatory complexity. Our teams focus on precision, data protection, and customer trust.",
            heroTitle: "Operational partners who understand compliance, security, and regulation."
        }
    ],
    company: {
        heroTitle: "Built by operators, not recruiters.",
        heroDescription: "Traditional outsourcing focuses on cost. We focus on performance, reliability, and scalability — and we built Gigmote to fix what traditional outsourcing gets wrong.",
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
            title: "Operational Audit",
            description: "We identify repetitive work, workflow gaps, and automation opportunities."
        },
        {
            step: 2,
            title: "Precision Match",
            description: "We provide 2–3 highly vetted talent options or AI solutions tailored to your exact workflow."
        },
        {
            step: 3,
            title: "Managed Integration",
            description: "We support onboarding, KPI setup, and workflow integration."
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
            industry: "Healthcare Technology Company | $10M ARR",
            title: "Digital Marketing Performance & Cost Efficiency",
            challenge:
                "A healthcare technology firm was overspending on U.S.-based marketing contractors while struggling with inconsistent campaign execution and slow content turnaround. Their blended marketing spend exceeded $32,000 per month, yet lead quality remained inconsistent and cost-per-lead (CPL) was rising.",
            solution:
                "Gigmote deployed a dedicated digital marketing team including a performance marketer, content specialist, and marketing operations coordinator. We centralized ad management, rebuilt funnel tracking, implemented structured content calendars, and optimized Google and LinkedIn campaigns. Reporting moved from manual spreadsheets to automated weekly dashboards.",
            results: [
                "42% decrease in cost-per-lead and 55% improvement in paid campaign ROI",
                "3x increase in content production output",
                "$180,000 annual reduction in marketing operational spend and 68% lift in qualified inbound leads"
            ]
        },
        {
            id: "revenue-cycle-management-optimization",
            industry: "Multi-Location Medical Practice | 14 Providers",
            title: "Revenue Cycle Management (RCM) Optimization",
            challenge:
                "A multi-location medical practice was facing rising insurance claim denials, delayed reimbursements, and inconsistent follow-ups. Denial rates had climbed to 18%, and days in accounts receivable averaged 52 days, straining cash flow. Hiring additional in-house billing staff would have added $120,000 annually in payroll costs.",
            solution:
                "Gigmote assembled a specialized Revenue Cycle Management team focused on prior authorizations, claim scrubbing, denial management, and systematic follow-up protocols. We introduced structured SOPs, denial analytics reporting, and daily claim status tracking to improve visibility and accountability.",
            results: [
                "Denial rates reduced from 18% to 7% and days in A/R cut to 31",
                "Net collections increased by 14% and monthly cash flow improved by ~$220,000",
                "Billing operational costs reduced by 46% while funding the opening of an additional specialty clinic"
            ]
        },
        {
            id: "integrated-back-office-sales-support-real-estate",
            industry: "U.S. Real Estate Investment Group | 75+ Properties",
            title: "Integrated Back-Office & Sales Support for Scaling Real Estate Firm",
            challenge:
                "A growing real estate investment firm was struggling to manage property accounting, tenant communications, and investor reporting. Administrative bottlenecks slowed acquisitions, and local hiring costs were limiting expansion plans.",
            solution:
                "Gigmote deployed a hybrid support structure: two accounting specialists, one leasing support coordinator, and a CRM administrator. We standardized reporting for investors, automated rent tracking and follow-ups, and improved acquisition pipeline coordination between brokers and internal teams.",
            results: [
                "52% decrease in operational overhead (~$210,000 in annual savings)",
                "60% faster administrative turnaround times",
                "Property portfolio growth from 75 to 110 properties in 18 months without increasing U.S.-based headcount"
            ]
        }
    ]
};
