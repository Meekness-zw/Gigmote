import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const courses = [
  {
    slug: "ai-at-work",
    title: "AI at Work",
    tagline:
      "Get hands-on, job-ready training to leverage AI tools for automating workflows, analysing data, and creating polished content — boosting productivity with secure, ethical best practices.",
    description:
      "AI at Work transforms how organisations integrate artificial intelligence by moving beyond isolated task automation toward strategic enterprise transformation. You'll explore machine learning fundamentals and generative architectures through labs covering prompt engineering, workflow automation, data synthesis, and copilot orchestration.\n\nThe programme emphasises enterprise-grade tools integrated with existing business intelligence systems while rigorously evaluating outputs for accuracy, bias, and governance compliance. The curriculum is organised into tactical sprints with analytical milestones, comprehensive assessments, and turn-key templates designed for rapid, measurable results.",
    price: "$10",
    outcomes: [
      "Accelerating research velocity and executive drafting",
      "Conducting data-driven analysis with structural efficiency",
      "Architecting automation frameworks across business units including customer operations, marketing, sales, human capital, and finance",
      "Building scalable prompt assets and modular automation recipes",
      "Creating risk-managed implementation roadmaps with clear ROI metrics",
    ].join("\n"),
    curriculum: [
      "## Module 1: Introduction to AI at Work",
      "- Understanding AI and its impact on the modern workplace",
      "- AI's transformative role across industries",
      "- Performance enhancement through AI adoption",
      "",
      "## Module 2: Essential AI Tools and Technologies",
      "- Overview of professional AI tools",
      "- Productivity automation techniques",
      "- Data analysis and decision-making applications",
      "",
      "## Module 3: Practical AI Skills for the Modern Workforce",
      "- AI-powered communication enhancement",
      "- Project management and collaboration tools",
      "- Personalised workflow assistants",
      "",
      "## Module 4: Developing an AI-Driven Mindset",
      "- Continuous learning and adaptation strategies",
      "- Ethical AI deployment considerations",
      "- Career future-proofing approaches",
      "",
      "## Module 5: Real-World Work Scenarios",
      "- Successful AI integration case studies",
      "- Hands-on implementation project",
      "- Performance measurement and improvement",
      "",
      "## Module 6: Conclusion and Next Steps",
      "- Key takeaway recap",
      "- Continued learning resources",
      "- Personalised action planning",
    ].join("\n"),
    instructor: "Dakarai Mshoperi",
    instructorBio:
      "AI-first software engineer and educator with a decade of experience leading data-informed projects and piloting automation for global enterprises. Dakarai led AI-powered solutions at Tese.io, winning the G20 TechSprint and LIFT Data Challenge (Central Bank of Brazil), and developed AI marketing and operational tools at Swiffy Payments — contributing to the 'Best Payments Service Provider – Africa' award at the 2023 UF Awards MEA.\n\nHis teaching philosophy focuses on practical, jargon-light, results-oriented instruction that enables immediate workplace application.",
    features: [
      "Strategic: Aligns AI initiatives with core business goals",
      "Hands-on: Build, test, and deploy practical automations",
      "Ethical: Responsible, transparent, and fair AI practices",
    ].join("\n"),
    enrollUrl: "https://gigmote.teachable.com/p/ai-at-work",
    status: "published",
    featured: true,
  },
];

const jobs = [
  {
    slug: "senior-frontend-engineer",
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote — Africa / Europe",
    employmentType: "Full-time",
    salaryRange: "$70k – $110k",
    shortDescription:
      "Build polished, performant interfaces for global SaaS clients alongside a tight, design-led team.",
    description:
      "We're hiring a senior frontend engineer to lead UI implementation for one of our flagship SaaS partners. You'll work directly with their design and product team, ship features end-to-end, and set the bar for accessibility, performance, and craft across the stack.",
    responsibilities: [
      "Own frontend features end-to-end — from spec to production",
      "Build accessible, responsive interfaces with React, Next.js, and TypeScript",
      "Partner with designers to elevate animations, micro-interactions, and overall polish",
      "Mentor mid-level engineers and review PRs across the team",
      "Drive performance budgets and accessibility audits as part of every release",
    ].join("\n"),
    requirements: [
      "5+ years building production frontends with React",
      "Strong TypeScript proficiency",
      "Deep familiarity with Next.js (App Router preferred)",
      "Experience with Tailwind, CSS-in-JS, or systematic styling approaches",
      "An eye for detail — animations, spacing, micro-interactions matter to you",
    ].join("\n"),
    niceToHave: [
      "Experience with Framer Motion or GSAP",
      "Background working with distributed/global teams",
      "Open source contributions",
    ].join("\n"),
    benefits: [
      "Fully remote with flexible hours",
      "Annual learning budget",
      "Performance-based bonuses, paid in USD",
      "Top-spec workstation and home-office setup",
    ].join("\n"),
    status: "published",
  },
  {
    slug: "customer-support-specialist",
    title: "Customer Support Specialist",
    department: "Customer Experience",
    location: "Remote — Africa",
    employmentType: "Full-time",
    salaryRange: "$24k – $38k",
    shortDescription:
      "Be the front line for fast-growing US tech companies — solve real problems and shape support playbooks.",
    description:
      "Join our customer experience team supporting US-based SaaS clients across Slack, email, and chat. You'll own customer conversations end-to-end, document recurring issues, and help shape the support playbooks that scale our partner teams from 5 to 50.",
    responsibilities: [
      "Respond to customer questions across email, chat, and Slack in under 2 hours during shift",
      "Triage bugs and escalate to engineering with reproducible reports",
      "Maintain and improve macros, response templates, and knowledge base articles",
      "Identify recurring issues and surface patterns to product",
    ].join("\n"),
    requirements: [
      "2+ years in B2B SaaS customer support",
      "Excellent written English — clear, friendly, professional",
      "Comfortable working across timezones (some US business hours required)",
      "Strong instinct for prioritization under load",
    ].join("\n"),
    niceToHave: [
      "Familiarity with Intercom, Zendesk, or HubSpot Service Hub",
      "Technical fluency — comfortable reading API docs",
    ].join("\n"),
    benefits: [
      "Fully remote",
      "USD compensation",
      "Quarterly performance bonuses",
      "Health stipend",
    ].join("\n"),
    status: "published",
  },
  {
    slug: "ai-operations-analyst",
    title: "AI Operations Analyst",
    department: "AI & Automation",
    location: "Remote — Global",
    employmentType: "Full-time",
    salaryRange: "$45k – $70k",
    shortDescription:
      "Design AI-augmented workflows that let small teams operate like big ones. Build, measure, iterate.",
    description:
      "We're hiring an AI Operations Analyst to design and deploy AI-augmented workflows for our partner companies. You'll work hands-on with tools like Claude, GPT-4, Make/n8n, and Retool to automate repetitive operations work — measuring impact, iterating fast, and shipping playbooks our delivery teams can reuse.",
    responsibilities: [
      "Map partner workflows and identify high-leverage automation candidates",
      "Build, test, and ship AI-augmented workflows using Claude, GPT-4, and automation tools",
      "Measure outcomes — time saved, error rates, throughput",
      "Document workflows as reusable playbooks for the broader delivery org",
    ].join("\n"),
    requirements: [
      "3+ years in operations, RevOps, BizOps, or similar",
      "Hands-on experience with at least one LLM (Claude, GPT, etc.)",
      "Comfortable with no-code/low-code automation (Make, n8n, Zapier, Retool)",
      "Strong analytical thinking — comfortable with spreadsheets and dashboards",
    ].join("\n"),
    niceToHave: [
      "Light coding (SQL, Python, or JS)",
      "Prior experience at a high-growth startup",
      "Familiarity with prompt engineering best practices",
    ].join("\n"),
    benefits: [
      "Fully remote",
      "Generous learning budget",
      "Stock-equivalent bonus pool",
    ].join("\n"),
    status: "published",
  },
  {
    slug: "junior-fullstack-developer",
    title: "Junior Full-Stack Developer",
    department: "Engineering",
    location: "Remote — Africa",
    employmentType: "Contract",
    salaryRange: "$1.2k – $2k / month",
    shortDescription:
      "Early-career role on a partner client team. Real responsibility, real mentorship, real growth.",
    description:
      "Looking for an early-career developer who's hungry to grow and ready to ship. You'll be paired with senior engineers on a US client team, work in real production code, and have a clear progression path to a full-time senior role within 18 months.",
    responsibilities: [
      "Ship features under the guidance of senior engineers",
      "Write tests, fix bugs, and improve documentation",
      "Participate in code reviews and team standups",
    ].join("\n"),
    requirements: [
      "1+ year of building real projects in JavaScript/TypeScript",
      "Familiar with React or another modern frontend framework",
      "Some exposure to Node, databases, and Git workflows",
      "Strong written communication",
    ].join("\n"),
    niceToHave: [
      "A public portfolio or open-source contributions",
      "Familiarity with Next.js or Prisma",
    ].join("\n"),
    benefits: [
      "Direct mentorship from senior engineers",
      "Clear path to full-time senior role",
      "Learning budget for courses and books",
    ].join("\n"),
    status: "published",
  },
];

async function main() {
  for (const job of jobs) {
    await prisma.job.upsert({
      where: { slug: job.slug },
      update: job,
      create: job,
    });
    console.log(`✓ ${job.title}`);
  }

  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: course,
      create: course,
    });
    console.log(`✓ ${course.title}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
