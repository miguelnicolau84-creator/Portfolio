import type { CaseStudy } from "./types";
import delightfulApplications from "./case-studies/delightful-applications";
import legacyMigration from "./case-studies/legacy-migration";
import outsystemsMentor from "./case-studies/outsystems-mentor";

export const caseStudies: CaseStudy[] = [
  outsystemsMentor,
  legacyMigration,
  delightfulApplications,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.id === slug);
}
