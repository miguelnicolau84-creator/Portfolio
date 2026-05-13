import type { CaseStudy } from "@/lib/types";

const legacyMigration: CaseStudy = {
  id: "legacy-migration",
  title: "Legacy Migration",
  subtitle: "Unifying a fragmented migration experience across services, teams, and customers",
  role: "Design Lead",
  year: "2026",
  tags: ["Design Systems", "Strategy", "Platform"],
  intro:
    "Bringing UX into an engineering-led AI research team to design a unified orchestration layer for a complex, multi-service migration journey.",
  videoUrl: "/case-studies/legacy-migration/legacy-mod.mov",
  sections: [
    {
      heading: "Context",
      body: [
        "As part of a broader Legacy Migration initiative, multiple new services were being developed in parallel to support customers transitioning from older systems. This work was driven by a small, highly focused AI research team exploring new ways to accelerate and enhance the migration experience. I joined the team to bring a UX perspective into an otherwise engineering-led effort.",
        "While each service addressed a specific need, the overall experience was becoming increasingly fragmented, particularly for partners and customer success teams responsible for guiding customers through the process.",
      ],
    },
    {
      heading: "Challenge",
      body: [
        "As the number of services grew, there was no unified way to connect them into a coherent experience or support effective interaction between partners, customer success teams, and customers.",
        "The lack of orchestration across the migration journey made it difficult to deliver a consistent, guided experience and ultimately limited the value these services could provide when combined.",
      ],
    },
    {
      heading: "My Role",
      body: [
        "I led the design of a unified experience within a small, cross-functional AI research team, while also taking a hands-on role in building a functional prototype. Working in close collaboration with engineers, I used AI-assisted development to rapidly translate ideas into a working product.",
        "This approach enabled faster iteration and tighter feedback loops than a traditional design-to-development handoff.",
      ],
    },
    {
      heading: "Approach",
      body: [
        "I began by mapping the full service ecosystem, identifying key actors, touchpoints, and gaps across the migration journey. This process surfaced a critical orchestration gap: while individual services existed, there was no connective layer to turn them into a usable, end-to-end experience.",
        "I designed a unified interface that aggregates and contextualises services, enables partner and customer success teams to engage directly with customers, and guides interactions based on each customer's stage in the migration journey.",
        "To validate the concept, I built a working prototype using AI-assisted coding, integrated directly into the development workflow, allowing for real-time iteration alongside engineers and reducing reliance on static design deliverables.",
      ],
    },
    {
      heading: "Outcome",
      body: [
        "The prototype demonstrated how a unified orchestration layer could reduce fragmentation, improve the clarity and effectiveness of partner and customer interactions, and accelerate alignment between design and engineering.",
        "It also highlighted a more integrated way of working, where design and implementation evolve together, significantly shortening the distance between concept and execution.",
      ],
    },
  ],
  visualSlots: [],
};

export default legacyMigration;
