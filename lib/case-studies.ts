export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  tags: string[];
  intro: string;
  sections: CaseStudySection[];
  visualSlots: {
    afterSection: string;
    caption: string;
    aspectRatio?: "wide" | "square" | "tall";
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "outsystems-mentor",
    title: "OutSystems Mentor",
    subtitle: "Designing an AI-powered guidance system for enterprise developers",
    role: "Design Lead",
    year: "2023",
    tags: ["AI Design", "Enterprise", "Design Systems"],
    intro:
      "OutSystems Mentor was a new surface within the platform IDE — an always-available, contextual AI guide that helped enterprise developers apply best practices without breaking their flow.",
    sections: [
      {
        heading: "Context",
        body: [
          "OutSystems serves tens of thousands of enterprise developers building low-code applications at scale. As the platform matured, its capabilities expanded significantly — but so did its complexity. Users were spending an increasing amount of time searching documentation, community forums, and asking colleagues for help, often at the cost of momentum.",
          "The Mentor initiative emerged from a strategic bet: if we could distill the platform's accumulated knowledge into a contextual, responsive AI guide, we could meaningfully reduce the friction between intent and execution for developers at every skill level.",
        ],
      },
      {
        heading: "Challenge",
        body: [
          "Designing an AI assistant for a developer IDE is not a problem of information architecture alone — it's a problem of trust, timing, and tone. Our early research revealed that users were deeply resistant to unsolicited suggestions. Interruptive AI felt patronising to experienced developers and overwhelming to newer ones.",
          "We also had to reckon with the model's limitations. The AI could be wrong. Any design that obscured uncertainty risked eroding trust permanently. We needed to design not only for confidence, but for calibrated doubt.",
          "The technical constraints were equally demanding. Surface latency, streaming responses, and model confidence thresholds all had direct design implications that required close collaboration with the AI engineering team.",
        ],
      },
      {
        heading: "My Role",
        body: [
          "I led design end-to-end across a cross-functional team of three product managers and twelve engineers. I defined the interaction model, facilitated user research, and extended the design system to cover AI-specific surfaces — a first for the platform.",
          "Beyond execution, I shaped the product strategy around two questions: when should the Mentor speak, and what should it never say? The answers to those questions became foundational to both the experience and the engineering architecture.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We began with three weeks of contextual interviews with enterprise developers — ranging from recent platform adopters to power users with six-plus years of experience. We mapped the 'help-seeking journey' in detail: what triggered the need, where users went, how long it took, and what the cost of interruption was at each stage.",
          "From this research, we identified five distinct interaction paradigms and prototyped all five. We tested across two rounds of moderated sessions before converging on an ambient presence model — one that stayed out of the way until summoned, but felt immediately useful when invoked.",
          "Working directly with AI engineers, we established confidence thresholds that governed when and how suggestions surfaced. High-confidence responses were presented directly; lower-confidence suggestions were framed with explicit hedging language. We also designed a deliberate 'I'm not sure' state — a pattern that didn't exist in the platform prior to this work.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Mentor reduced average time-to-help from twelve minutes — the time users previously spent searching documentation and forums — to under two minutes. Feature adoption of advanced platform capabilities increased by 34% in the six months following launch.",
          "The AI confidence pattern we developed was later adopted as a standard across all AI surfaces at OutSystems, establishing a shared design grammar for how the platform communicates uncertainty.",
        ],
      },
      {
        heading: "Key Takeaways",
        body: [
          "AI features require a different trust grammar than conventional UI. Transparency about confidence — even when it means saying less — proved more valuable than an illusion of omniscience.",
          "Designing for graceful failure is as important as designing for success. The moments users remembered most clearly in research were not when the AI was right, but when it acknowledged the limits of its knowledge honestly.",
          "Proximity to engineers building the model is not optional. The best design decisions on this project came from conversations at the intersection of design intent and model behaviour — not from working in isolation.",
        ],
      },
    ],
    visualSlots: [
      {
        afterSection: "Context",
        caption: "The existing help-seeking journey, mapped across a typical development session.",
        aspectRatio: "wide",
      },
      {
        afterSection: "Approach",
        caption: "Five interaction paradigms explored in early prototyping — from proactive nudges to ambient presence.",
        aspectRatio: "wide",
      },
      {
        afterSection: "Approach",
        caption: "Confidence threshold system: how the AI's certainty level determined the visual treatment of a suggestion.",
        aspectRatio: "square",
      },
      {
        afterSection: "Outcome",
        caption: "Final interaction design — the Mentor in its ambient, summoned, and uncertainty states.",
        aspectRatio: "wide",
      },
    ],
  },
  {
    id: "legacy-migration",
    title: "Legacy Migration",
    subtitle: "Unifying seven years of design debt across a platform used by thousands",
    role: "Design System Lead",
    year: "2022",
    tags: ["Design Systems", "Strategy", "Platform"],
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
  },
  {
    id: "delightful-applications",
    title: "Delightful Applications",
    subtitle: "Proving that enterprise software can be powerful and delightful at once",
    role: "Design Director",
    year: "2024",
    tags: ["Strategy", "Craft", "Design Culture"],
    intro:
      "A leadership-sponsored initiative to redefine what design quality means for an enterprise platform — and to prove, through concrete work, that functional and delightful are not in opposition.",
    sections: [
      {
        heading: "Context",
        body: [
          "OutSystems' market position had long been defined by power: the platform could do extraordinary things. But in a market where competitors were closing the capability gap, the experience quality of the platform itself was becoming a competitive differentiator.",
          "Internally, the conversation about 'delight' often stalled. Enterprise stakeholders were skeptical — delight felt like a consumer concept, at odds with the reliability, density, and efficiency that enterprise users demanded. The Delightful Applications initiative was an attempt to change that conversation with evidence rather than argument.",
        ],
      },
      {
        heading: "Challenge",
        body: [
          "The word 'delight' carries weight. For some stakeholders, it implied playfulness — which felt inappropriate for enterprise software. For others, it implied risk: an excuse to spend time on aesthetics at the expense of functionality.",
          "The real challenge was reframing the concept. Delight in enterprise is not about animation or illustration. It's about a product that behaves the way you expect it to, reveals information at the moment you need it, and gets out of the way when you don't. Making that case credibly required demonstrated work, not definitions.",
        ],
      },
      {
        heading: "My Role",
        body: [
          "I initiated and led this initiative from concept through to company-wide adoption. I assembled a cross-disciplinary team, defined the strategic framework, ran the proof-of-concept design work, and presented findings to the C-suite.",
          "The initiative also required significant internal advocacy — working with the VP of Product and Chief Design Officer to secure the time and space for exploratory work in an environment that was deeply roadmap-driven.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "We started by benchmarking twenty enterprise products and ten consumer products, looking not for aesthetic inspiration but for patterns in what made interactions feel effortless. We were looking for the mechanics of delight, not its surface expression.",
          "From this, we ran a 'joy sprint' — a two-week experiment in which a small team redesigned one core platform flow with no constraints. The sprint was deliberately unconstrained to unlock creative range; the findings were then distilled into principles that were applicable within real constraints.",
          "Five principles of enterprise delight emerged from this work, each grounded in research and validated against real user behaviour. The principles were intentionally actionable — each one could be applied to an existing design decision without requiring a redesign from scratch.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The initiative produced a 'Quality Bar' — a concrete set of standards adopted across all product teams at OutSystems. The redesigned flow from the joy sprint saw an 18-point increase in NPS scores in post-launch measurement.",
          "The initiative also shifted a cultural conversation. 'Delight' is now a word that appears in product reviews and design critiques at OutSystems without requiring definition or justification. That shift, harder to measure than NPS, may be the most durable outcome.",
        ],
      },
      {
        heading: "Key Takeaways",
        body: [
          "Delight in enterprise needs a business case before it gets creative freedom. The most effective part of this initiative was not the design work — it was the framing. Tying craft to retention, NPS, and competitive differentiation opened doors that aesthetics alone would not.",
          "The most impactful moments of delight were about removing friction, not adding flourish. Users described the redesigned flow as 'faster' and 'simpler' — not 'beautiful.' The craft was invisible, which meant it was working.",
          "Proof-of-concept work is an organisational tool as much as a design tool. The joy sprint produced designs, but its real output was conviction — in the team, in leadership, and eventually in the product culture as a whole.",
        ],
      },
    ],
    visualSlots: [
      {
        afterSection: "Context",
        caption: "Benchmarking matrix: 30 products scored across 12 dimensions of interaction quality.",
        aspectRatio: "wide",
      },
      {
        afterSection: "Approach",
        caption: "The five principles of enterprise delight — developed from the joy sprint and validated through user research.",
        aspectRatio: "tall",
      },
      {
        afterSection: "Outcome",
        caption: "The redesigned flow: before and after the joy sprint, with annotation on the design decisions.",
        aspectRatio: "wide",
      },
    ],
  },
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.id === id);
}
