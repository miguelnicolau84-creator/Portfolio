import outsystemsMentor from "./outsystems-mentor";
import legacyMigration from "./legacy-migration";
import delightfulApplications from "./delightful-applications";
import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  outsystemsMentor,
  legacyMigration,
  delightfulApplications,
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.id === id);
}
