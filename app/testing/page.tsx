import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testing — Miguel Nicolau",
  description:
    "Why Miguel Nicolau would be a strong fit for a Product Design role at EasyLlama.",
  robots: { index: false, follow: false },
};

const fitPoints = [
  {
    heading: "Two-sided products are where I do my best work",
    body: [
      "EasyLlama serves both HR admins managing compliance at scale and employees completing training on their phones between meetings. That dual-audience challenge — powerful admin tools on one side, frictionless learner experiences on the other — mirrors the platform work I've led at OutSystems, where we designed for enterprise builders and end users simultaneously.",
      "I know how to balance depth and simplicity: giving admins the control and visibility they need without pushing complexity onto learners who just want to finish a course and get back to work.",
    ],
  },
  {
    heading: "Making complex products feel simple",
    body: [
      "Compliance training sits at an uncomfortable intersection: legally serious content that people are often required to complete, not choose to. EasyLlama's bet — that training can be engaging, bite-sized, and mobile-first — is exactly the kind of design problem I gravitate toward.",
      "At OutSystems, I led Delightful Applications, a platform initiative to raise the quality bar for enterprise mobile experiences. The goal wasn't polish for its own sake — it was proving that 'enterprise' and 'delightful' aren't opposites. That mindset maps directly to EasyLlama's mission of replacing static, checkbox compliance with training people actually absorb.",
    ],
  },
  {
    heading: "AI-native product design",
    body: [
      "EasyLlama's AI course authoring tool — turning policies into interactive training in minutes — is the kind of 0→1 AI experience I've spent the last two years building. As UX Lead for OutSystems Mentor, I led design for a conversational AI product with no established mental model, navigating trust, ambiguity, and adoption in a space where users had never interacted with the product category before.",
      "I understand the design challenges unique to AI products: setting expectations, handling failure gracefully, keeping humans in control, and making powerful capabilities feel approachable. Course authoring is a natural fit for that skill set.",
    ],
  },
  {
    heading: "Design systems that scale content, not just UI",
    body: [
      "EasyLlama's course library — hundreds of legally vetted, customizable modules — is fundamentally a content-at-scale problem. I've built design systems that don't just standardize buttons and typography, but enable teams to ship faster: reusable patterns, templates, and frameworks that let non-designers produce quality output.",
      "That experience matters when you're empowering customers to author their own training, or when your internal content team needs to produce courses across dozens of compliance topics without reinventing the interaction model each time.",
    ],
  },
  {
    heading: "Cross-functional leadership in fast-moving teams",
    body: [
      "I've led teams of ~10 designers, worked directly with engineering and product leadership, and operated with CEO-level sponsorship on company-critical initiatives. I'm comfortable in ambiguous, high-stakes environments where design needs to move at the pace of the business — not hold it back.",
      "EasyLlama is growing fast, expanding its product surface (LMS, Compliance Hub, AI authoring, security training) while keeping the experience cohesive. That's a leadership and systems challenge as much as a craft one, and it's where I've spent most of my career.",
    ],
  },
];

const relevantWork = [
  {
    title: "OutSystems Mentor",
    description:
      "0→1 AI product design — conversational UX, trust patterns, enterprise adoption.",
    href: "/work/outsystems-mentor",
  },
  {
    title: "Delightful Applications",
    description:
      "Platform-wide initiative to make enterprise mobile experiences genuinely delightful.",
    href: "/work/delightful-applications",
  },
  {
    title: "Legacy Migration",
    description:
      "Simplifying a complex, high-anxiety workflow for non-technical users.",
    href: "/work/legacy-migration",
  },
];

export default function TestingPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-8">
            Product Design · EasyLlama
          </p>

          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] text-stone-900 dark:text-stone-50 mb-6">
            Why I&apos;d be a good fit at{" "}
            <span className="italic text-stone-400 dark:text-stone-500">
              EasyLlama
            </span>
          </h1>

          <p className="text-lg md:text-xl font-sans text-stone-500 dark:text-stone-400 leading-relaxed">
            EasyLlama is redefining workplace compliance — making training
            engaging, mobile-first, and AI-powered instead of a checkbox
            exercise. Here&apos;s how my experience maps to what you&apos;re
            building.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">
          {fitPoints.map((point) => (
            <article key={point.heading}>
              <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 leading-tight mb-5">
                {point.heading}
              </h2>
              <div className="space-y-4 text-base leading-[1.75] text-stone-600 dark:text-stone-300 font-sans">
                {point.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-8">
            Relevant Work
          </p>

          <ul className="space-y-6">
            {relevantWork.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group block border-b border-stone-200 dark:border-stone-800 pb-6"
                >
                  <h3 className="font-serif text-xl text-stone-900 dark:text-stone-50 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors duration-200 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-sans text-stone-400 dark:text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 leading-tight mb-5">
            In short
          </h2>
          <p className="text-base leading-[1.75] text-stone-600 dark:text-stone-300 font-sans mb-8">
            EasyLlama needs designers who can make compliance feel human,
            scale content without sacrificing quality, and ship AI experiences
            that people trust. I&apos;ve spent a decade doing exactly that in
            engineering-heavy, enterprise environments — and I&apos;d love to bring
            that to a product with a mission I genuinely believe in.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:miguelnicolau84@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-sans px-5 py-2.5 rounded-full bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors duration-200"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/miguelnicolau/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-sans px-5 py-2.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:border-stone-900 dark:hover:border-stone-200 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
