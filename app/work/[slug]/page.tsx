import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.title} — Miguel Nicolau`,
    description: cs.subtitle,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) notFound();

  const currentIndex = caseStudies.findIndex((c) => c.id === cs.id);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1
      ? caseStudies[currentIndex + 1]
      : null;

  return (
    <div>
      {/* Back link + header */}
      <div className="pt-24 pb-16 md:pt-32 md:pb-20 px-6 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-sans text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-200 mb-10 group"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:-translate-x-0.5 transition-transform duration-200">
              <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All work
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-sans text-stone-400 dark:text-stone-500 tracking-wide border border-stone-200 dark:border-stone-700 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-stone-900 dark:text-stone-50 mb-6">
              {cs.title}
            </h1>
            <p className="text-lg md:text-xl font-sans text-stone-500 dark:text-stone-400 leading-relaxed max-w-2xl">
              {cs.subtitle}
            </p>
          </div>

          {/* Meta row */}
          <div className="mt-10 flex flex-wrap gap-8 text-sm font-sans">
            <div>
              <span className="text-stone-300 dark:text-stone-600 mr-3 tracking-wide uppercase text-xs">Role</span>
              <span className="text-stone-600 dark:text-stone-300">{cs.role}</span>
            </div>
            <div>
              <span className="text-stone-300 dark:text-stone-600 mr-3 tracking-wide uppercase text-xs">Year</span>
              <span className="text-stone-600 dark:text-stone-300">{cs.year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video embed */}
      {cs.videoUrl && (
        <div className="px-6 pt-6 pb-2">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900">
              <iframe
                src={cs.videoUrl}
                title={`${cs.title} — video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="px-6 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          {cs.sections.map((section, sectionIndex) => {
            const visualsAfterThisSection = cs.visualSlots.filter(
              (v) => v.afterSection === section.heading
            );

            return (
              <div key={section.heading}>
                <section className="pt-16 md:pt-20">
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16">
                    {/* Section label */}
                    <div className="pt-1">
                      <span className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 sticky top-20">
                        {String(sectionIndex + 1).padStart(2, "0")} &nbsp; {section.heading}
                      </span>
                    </div>

                    {/* Section content */}
                    <div>
                      <div className="space-y-5 text-base md:text-[1.0625rem] leading-[1.8] text-stone-600 dark:text-stone-300 font-sans">
                        {section.body.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Visual placeholders after this section */}
                  {visualsAfterThisSection.length > 0 && (
                    <div
                      className={
                        visualsAfterThisSection.length === 1
                          ? "mt-10 md:mt-14"
                          : "mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4"
                      }
                    >
                      {visualsAfterThisSection.map((visual, vIndex) =>
                        visual.src ? (
                          <figure key={vIndex} className="my-0">
                            {visual.naturalSize ? (
                              <div className="w-1/2 mx-auto">
                                <Image
                                  src={visual.src}
                                  alt={visual.caption}
                                  width={1600}
                                  height={900}
                                  className="w-full h-auto rounded-sm"
                                />
                                {visual.caption && (
                                  <figcaption className="mt-3 text-sm font-sans text-stone-400 dark:text-stone-500 leading-relaxed">
                                    {visual.caption}
                                  </figcaption>
                                )}
                              </div>
                            ) : (
                            <div className={`w-full overflow-hidden rounded-sm ${
                              visual.aspectRatio === "square" ? "aspect-square" :
                              visual.aspectRatio === "tall" ? "aspect-[3/4]" :
                              "aspect-[16/9]"
                            }`}>
                              <Image
                                src={visual.src}
                                alt={visual.caption}
                                width={1600}
                                height={900}
                                className="w-full h-full object-cover"
                                style={{ objectPosition: visual.objectPosition ?? "center" }}
                              />
                            </div>
                            )}
                            {!visual.naturalSize && visual.caption && (
                              <figcaption className="mt-3 text-sm font-sans text-stone-400 dark:text-stone-500 leading-relaxed">
                                {visual.caption}
                              </figcaption>
                            )}
                          </figure>
                        ) : (
                          <ImagePlaceholder
                            key={vIndex}
                            caption={visual.caption}
                            aspectRatio={visual.aspectRatio}
                            className="my-0"
                          />
                        )
                      )}
                    </div>
                  )}
                </section>

                {/* Divider between sections (except after last) */}
                {sectionIndex < cs.sections.length - 1 && (
                  <div className="mt-14 md:mt-16 border-t border-stone-100 dark:border-stone-900" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Previous / Next navigation */}
      {(prevStudy || nextStudy) && (
        <div className="border-t border-stone-200 dark:border-stone-800 px-6 py-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4">
            <div>
              {prevStudy && (
                <Link
                  href={`/work/${prevStudy.id}`}
                  className="group block"
                >
                  <span className="text-xs font-sans tracking-widest uppercase text-stone-300 dark:text-stone-600 mb-2 block">
                    ← Previous
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors duration-200 leading-tight">
                    {prevStudy.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextStudy && (
                <Link
                  href={`/work/${nextStudy.id}`}
                  className="group block"
                >
                  <span className="text-xs font-sans tracking-widest uppercase text-stone-300 dark:text-stone-600 mb-2 block">
                    Next →
                  </span>
                  <span className="font-serif text-xl md:text-2xl text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-50 transition-colors duration-200 leading-tight">
                    {nextStudy.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="px-6 pb-8">
        <div className="max-w-5xl mx-auto border-t border-stone-200 dark:border-stone-800 pt-6">
          <p className="text-xs font-sans text-stone-300 dark:text-stone-600">
            © {new Date().getFullYear()} Miguel Nicolau
          </p>
        </div>
      </footer>
    </div>
  );
}
