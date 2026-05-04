import type { CaseStudy } from "../types";

const legacyMigration: CaseStudy = {
  id: "legacy-migration",
  title: "Legacy Migration",
  subtitle: "Unifying seven years of design debt across a platform used by thousands",
  role: "UX Lead",
  year: "2026",
  tags: ["AI Experience", "Strategy", "Legacy Migration"],
  intro:
    "A platform-wide initiative to migrate OutSystems' fragmented, multi-system design landscape into a single, token-based design system — without breaking thirty-plus product teams in the process.",
  sections: [
    {
      heading: "Context",
      body: [
        "After seven years of rapid product growth, OutSystems' core platform was operating with multiple design systems running in parallel. Different teams had evolved their own component libraries, spacing conventions, and interaction patterns — all with good intentions, none in isolation.",
        "The result was a product experience that felt inconsistent to users and costly to maintain for teams. Cross-team design collaboration was slow and error-prone. A significant redesign was not an option; the platform was too large, too live, and too critical to customers. We needed a migration strategy.",
      ],
    },
    {
      heading: "Challenge",
      body: [
        "No component was 'safe' to change without impacting five or more product teams. Engineering debt was deep: some components had been in production, unchanged, for six years. And perhaps most significantly, teams had strong attachment to their local patterns — they'd been built with care, under pressure, and they worked.",
        "The challenge was not just technical. It was organisational. Any migration plan that didn't account for team autonomy, existing roadmaps, and the real cost of adoption would fail regardless of how well-designed the new system was.",
      ],
    },
    {
      heading: "My Role",
      body: [
        "I led the migration strategy as Design System Lead. I built and managed a migration team of four designers, ran stakeholder alignment across twelve product teams, and owned the sequencing and communication of the rollout.",
        "I also served as the primary liaison between the design system team and platform engineering, translating design intent into technical constraints and vice versa throughout the process.",
      ],
    },
    {
      heading: "Approach",
      body: [
        "We started with a full component audit across two hundred-plus screens. The findings were clarifying: we had eighty-seven distinct button variants across the product. The audit gave us a shared language for the problem — teams could see, concretely, what fragmentation looked like at scale.",
        "From the audit, we built a migration cost matrix — prioritising components by impact, technical risk, and adoption readiness. High-impact, low-risk components were migrated first to build momentum and demonstrate value before tackling the harder, higher-risk work.",
        "We introduced a shadow DOM approach that allowed teams to adopt new components incrementally, without breaking existing functionality. Weekly office hours, a public migration guide, and a Slack-based support channel were as important as the technical infrastructure.",
      ],
    },
    {
      heading: "Outcome",
      body: [
        "Seventy percent of the platform was migrated within eight months. Component duplication dropped by 65%. The average component-to-page ratio fell from 3.1 to 1.4 — a concrete measure of teams reusing rather than rebuilding.",
        "More importantly, the migration established a new working model. Teams that had been designing in isolation were now contributing to a shared system. The design system went from being a centrally maintained artifact to a genuinely collaborative platform.",
      ],
    },
    {
      heading: "Key Takeaways",
      body: [
        "Migration is a change management problem before it's a design problem. The technical decisions were difficult. The organisational ones were harder. Team buy-in required sustained investment — not a single launch announcement.",
        "Visibility of the problem was essential to progress. The component audit didn't just inform the strategy; it created alignment. Showing teams the scale of fragmentation was more persuasive than any proposal document.",
        "Communication rituals matter enormously. The weekly office hours and the public guide weren't support mechanisms — they were adoption mechanisms. Teams that felt supported adopted early. Teams that didn't, waited.",
      ],
    },
  ],
  visualSlots: [
    {
      afterSection: "Context",
      caption: "A fragment of the component audit: three teams, three button systems, zero shared tokens.",
      aspectRatio: "wide",
    },
    {
      afterSection: "Approach",
      caption: "The migration cost matrix — organising 200+ components by impact, risk, and team readiness.",
      aspectRatio: "wide",
    },
    {
      afterSection: "Outcome",
      caption: "Before and after: the platform's component library, six months apart.",
      aspectRatio: "square",
    },
  ],
};

export default legacyMigration;
