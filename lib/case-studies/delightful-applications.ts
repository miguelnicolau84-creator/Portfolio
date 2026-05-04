import type { CaseStudy } from "../types";

const delightfulApplications: CaseStudy = {
  id: "delightful-applications",
  title: "Delightful Applications",
  subtitle: "Raising the quality bar for mobile experiences on a low-code platform",
  role: "UX Lead",
  year: "2024",
  tags: ["Strategy", "Mobile Apps", "Design System"],
  intro:
    "A platform-wide initiative to redefine what design quality means for enterprise mobile apps — and prove, through concrete frameworks and measurable outcomes, that low-code and delightful are not in opposition.",
  sections: [
    {
      heading: "Context",
      body: [
        "OutSystems is a leader in the low-code space, enabling teams to build and deploy enterprise applications quickly. However, customer feedback consistently pointed to a gap: out-of-the-box mobile apps lacked the quality and polish expected from modern products, requiring significant additional effort to reach acceptable UX standards.",
        "This created friction for developers, slowed delivery, and risked customer churn.",
      ],
    },
    {
      heading: "Challenge",
      body: [
        "The core challenge was to shift the baseline from 'it works' to 'it delights.' We needed to enable teams to consistently produce high-quality mobile experiences without requiring deep UX expertise or extensive customisation.",
        "We defined success through two clear outcomes: achieving a measurable 'delightful' experience benchmark aligned with leading apps, and eliminating churn driven by poor mobile UX.",
      ],
    },
    {
      heading: "My Role",
      body: [
        "I led the initiative end-to-end, defining the product vision and quality bar while leading a team of four product designers. I worked closely with engineering and product leadership to align on strategy and execution.",
        "My role combined hands-on product thinking with team leadership, introducing a driven approach to experience quality and guiding the creation of a mobile framework designed to scale across the platform.",
      ],
    },
    {
      heading: "Approach",
      body: [
        "To move from subjective opinions to measurable quality, I created the 'Delightful Model' — a framework evaluating 42 dimensions of the user experience against market-leading applications. This established a shared language for quality and allowed us to make decisions grounded in data rather than intuition.",
        "We then translated these insights into a scalable mobile framework composed of reusable components and patterns, designed not only to meet industry standards but to exceed them. Just as importantly, we focused on the developer experience — ensuring the system was intuitive to use, reduced complexity, and accelerated delivery.",
        "Throughout the process, we maintained tight feedback loops with both designers and developers. Continuous testing and iteration ensured the framework was not only well-designed but also practical, efficient, and impactful in real-world usage.",
      ],
    },
    {
      heading: "Outcome",
      body: [
        "The results were transformative. Applications built using the framework consistently achieved delightful scores above 90, significantly surpassing our initial benchmark.",
        "Developer productivity improved, with faster build times and reduced learning curves, while teams reported greater confidence and creative freedom. Most notably, issues related to mobile experience dropped to the point where no measurable churn could be attributed to them.",
      ],
    },
    {
      heading: "Key Takeaways",
      body: [
        "This work reinforced that quality needs to be clearly defined and measurable to scale effectively. It highlighted that the biggest impact comes from systems, not individual screens, and that in a low-code environment, the developer experience is inseparable from the end-user experience.",
        "Above all, it showed that strong cross-functional alignment — when paired with a clear vision and the right frameworks — can elevate not just a product, but an entire ecosystem.",
      ],
    },
  ],
  visualSlots: [
    {
      afterSection: "Context",
      caption: "The five principles of enterprise delight — developed from the joy sprint and validated through user research.",
      aspectRatio: "wide",
      src: "/case-studies/delightful-apps/delightful1.avif",
      naturalSize: true,
    },
    {
      afterSection: "Approach",
      caption: "Benchmarking matrix: 30 products scored across 12 dimensions of interaction quality.",
      aspectRatio: "wide",
      src: "/case-studies/delightful-apps/delightful2.avif",
      naturalSize: true,
    },
    {
      afterSection: "Outcome",
      caption: "Applications built with the framework consistently scoring above 90 on the Delightful Model benchmark.",
      aspectRatio: "wide",
      src: "/case-studies/delightful-apps/delightful3.avif",
      naturalSize: true,
    },
  ],
};

export default delightfulApplications;
