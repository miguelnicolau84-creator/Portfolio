import type { CaseStudy } from "../types";

const delightfulApplications: CaseStudy = {
  id: "delightful-applications",
  title: "Delightful Applications",
  subtitle: "Proving that enterprise software can be powerful and delightful at once",
  role: "UX Lead",
  year: "2023",
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
};

export default delightfulApplications;
