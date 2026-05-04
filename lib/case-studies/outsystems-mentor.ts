import type { CaseStudy } from "../types";

const outsystemsMentor: CaseStudy = {
  id: "outsystems-mentor",
  title: "OutSystems Mentor",
  subtitle: "Designing an AI-powered developer experience for enterprise developers",
  role: "UX Lead/DRI",
  year: "2026",
  tags: ["AI Design", "Enterprise", "Design Systems"],
  intro:
    "Mentor was OutSystems' flagship AI initiative — a 0→1 product that redefined how enterprise developers build applications, from an empty canvas to a conversational, AI-driven experience.",
  videoUrl: "https://www.youtube.com/embed/RxLgYcxEcqE",
  sections: [
    {
      heading: "Context",
      body: [
        "I led design for Mentor, a company-critical AI initiative at OutSystems, taking a 0→1 product from concept to production. The work sat at the intersection of product, engineering, and executive leadership, with direct CEO sponsorship.",
      ],
    },
    {
      heading: "Challenge",
      body: [
        "The challenge was to define a completely new way of building applications using generative AI. Users had no established mental model for interacting with AI in this context, and there was significant risk around trust, usability, and adoption in a highly ambiguous space.",
      ],
    },
    {
      heading: "My Role",
      body: [
        "I led design for the initiative. I built, grew, and managed a team of ~10 product designers, aligning the team with the ambition and pace of a company-critical AI effort.",
        "I worked in close partnership with AI, engineering, and product leadership to define the product vision and drive strategy. I also created and led a customer research program, engaging directly with customers to inform decision making.",
      ],
    },
    {
      heading: "Approach",
      body: [
        "To navigate uncertainty, I introduced a structured approach combining deep customer engagement with rapid iteration. We ran continuous research and testing with users, while establishing a dedicated discovery track to explore high-risk areas. Strong cross-functional collaboration and regular alignment sessions ensured we could move quickly while maintaining clarity.",
        "To ensure Mentor delivered real value at enterprise scale, I worked directly with customers across regions, observing how products were used in practice, understanding complex project landscapes, and aligning with senior stakeholders on product direction.",
        "In parallel with targeted customer engagements, we gathered feedback at scale through the OutSystems ODC World Tour, engaging directly with developer communities across multiple regions. These sessions helped validate patterns observed in enterprise contexts and ensured Mentor addressed both advanced and emerging user needs.",
      ],
    },
    {
      heading: "Outcome",
      body: [
        "The product successfully moved from concept to production and delivered strong results. Users achieved a significant increase in productivity in comparable tasks, often completing a task in minutes that previously would take weeks. Non-technical users were able to complete core workflows without prior training, and friction across key tasks was significantly reduced.",
        "The work also strengthened confidence in design at a strategic level and reinforced OutSystems' position in AI-driven development.",
      ],
    },
    {
      heading: "Key Takeaways",
      body: [
        "This work highlighted the importance of designing new interaction models for AI-driven products, the value of continuous customer involvement in ambiguous spaces, and the need for strong alignment between design, product, and engineering to deliver meaningful outcomes.",
      ],
    },
  ],
  visualSlots: [
    {
      afterSection: "Approach",
      caption:
        "On-site with Petronas teams in Kuala Lumpur, observing how large enterprise developers were using Mentor in real production environments. These sessions directly influenced our roadmap.",
      aspectRatio: "wide",
      src: "/case-studies/outsystems-mentor/petronas.png",
      objectPosition: "center 60%",
    },
    {
      afterSection: "Approach",
      caption:
        "On-site with Thermo Fisher teams in California to understand the types of enterprise projects they were building, ensuring alignment for our solution and roadmap.",
      aspectRatio: "wide",
      src: "/case-studies/outsystems-mentor/thermofisher.jpg",
      objectPosition: "center 40%",
    },
    {
      afterSection: "Approach",
      caption:
        "Facilitating an executive feedback session in London with senior stakeholders. These conversations shaped how we positioned Mentor internally and ensured alignment with customer expectations.",
      aspectRatio: "wide",
      src: "/case-studies/outsystems-mentor/london_odc_executive.jpeg",
      objectPosition: "center 10%",
    },
    {
      afterSection: "Approach",
      caption:
        "Hundreds of developers engaged with us throughout the day in São Paulo, creating a continuous stream of feedback and insights.",
      aspectRatio: "wide",
      src: "/case-studies/outsystems-mentor/saopaulo-1.jpeg",
      objectPosition: "center 60%",
    },
  ],
};

export default outsystemsMentor;
