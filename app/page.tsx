import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel Nicolau — Design",
  description:
    "Design leader with 10+ years of experience building and scaling products in engineering-heavy environments.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-1 pt-20 pb-24 md:pt-24 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-8 pt-8 md:pt-12">
            Product Design
          </p>

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
                  Design leader with 10+ years of experience building and
                  scaling products in engineering-heavy environments.
                </p>
                <p>
                  I&apos;ve led teams of ~10 designers across platform and
                  AI-driven products. Working with Product, Engineering, and AI
                  leadership to define strategy, align organisations and deliver
                  systems at scale.
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

          {/* Below the grid: CTA only */}
          <div className="mt-12 pt-10 border-t border-stone-200 dark:border-stone-800">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-stone-900 dark:text-stone-50 border-b border-stone-900 dark:border-stone-50 pb-0.5 hover:text-stone-500 hover:border-stone-500 dark:hover:text-stone-400 dark:hover:border-stone-400 transition-colors duration-200"
            >
              View selected work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-8">
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
