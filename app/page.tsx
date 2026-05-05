import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel Nicolau — Design",
  description:
    "Design leader with 10+ years of experience building and scaling products in engineering-heavy environments.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="pt-20 pb-0 md:pt-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="pt-8 md:pt-12 mb-8" />

          {/* Two-column: name + bio alongside photo */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 md:gap-16 items-end">

            {/* Left: name + bio */}
            <div className="flex flex-col gap-10">
              <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] text-stone-900 dark:text-stone-50">
                Miguel<br />
                <span className="italic text-stone-400 dark:text-stone-500">Nicolau</span>
              </h1>

              <div className="space-y-5 text-base leading-[1.75] text-stone-600 dark:text-stone-300 font-sans max-w-lg">
                <p>
                  Product Design leader with 10+ years of experience building and
                  scaling products in engineering-heavy environments.
                </p>
                <p>
                  I&apos;ve led teams of designers across platform and
                  AI-driven products. Working with Product, Engineering, and AI
                  leadership to define strategy and deliver systems at scale.
                </p>
              </div>
            </div>

            {/* Right: photo, bottom-aligned with bio text */}
            <div className="hidden md:block">
              <div className="w-full aspect-[3/4] rounded-sm overflow-hidden bg-stone-100 dark:bg-stone-900">
                <Image
                  src="/miguel.png"
                  alt="Miguel Nicolau"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Case study list */}
          <div className="mt-20 md:mt-28">
            <p className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-8">
              Selected Work
            </p>
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
      </section>

      {/* Footer */}
      <footer className="px-6 pb-8 mt-12">
        <div className="max-w-5xl mx-auto border-t border-stone-200 dark:border-stone-800 pt-6 flex items-center justify-between gap-6">
          <p className="text-xs font-sans text-stone-300 dark:text-stone-600">
            © {new Date().getFullYear()} Miguel Nicolau
          </p>
          <div className="flex gap-5">
            <a
              href="mailto:miguelnicolau84@gmail.com"
              className="text-xs font-sans text-stone-300 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400 transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/miguelnicolau/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans text-stone-300 dark:text-stone-600 hover:text-stone-600 dark:hover:text-stone-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
