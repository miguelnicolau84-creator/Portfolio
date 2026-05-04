import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Miguel Nicolau",
  description: "Selected case studies by Miguel Nicolau.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-16 md:mb-24">
            <p className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-8">
              Selected Work
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-stone-900 dark:text-stone-50 leading-tight">
              Case studies
            </h1>
          </div>

          {/* Case study list */}
          <ul className="border-t border-stone-200 dark:border-stone-800">
            {caseStudies.map((cs, index) => (
              <li key={cs.id}>
                <Link
                  href={`/work/${cs.id}`}
                  className="group flex items-start md:items-center justify-between gap-6 py-8 md:py-10 border-b border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900/30 -mx-4 px-4 rounded-sm transition-colors duration-200"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10 flex-1 min-w-0">
                    <span className="text-xs font-sans text-stone-300 dark:text-stone-600 tabular-nums shrink-0 pt-1 md:pt-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-50 leading-tight mb-1 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors duration-200">
                        {cs.title}
                      </h2>
                      <p className="text-sm font-sans text-stone-400 dark:text-stone-500 leading-relaxed">
                        {cs.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <span className="hidden md:block text-sm font-sans text-stone-400 dark:text-stone-500">
                      {cs.year}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-400 dark:text-stone-500 group-hover:border-stone-900 dark:group-hover:border-stone-200 group-hover:text-stone-900 dark:group-hover:text-stone-50 group-hover:bg-stone-900 dark:group-hover:bg-stone-50 group-hover:[&>svg]:text-stone-50 dark:group-hover:[&>svg]:text-stone-900 transition-all duration-200">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

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
