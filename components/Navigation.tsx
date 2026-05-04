"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();
  const isWorkSection = pathname.startsWith("/work");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 px-6">
      <div className="absolute inset-0 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60" />
      <nav className="relative h-full max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-sans font-medium tracking-tight text-stone-900 dark:text-stone-50 hover:text-stone-500 dark:hover:text-stone-400 transition-colors duration-200"
        >
          Miguel Nicolau
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/work"
            className={[
              "text-sm font-sans px-3 py-1.5 rounded-full transition-colors duration-200",
              isWorkSection
                ? "text-stone-900 dark:text-stone-50 bg-stone-100 dark:bg-stone-800"
                : "text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50",
            ].join(" ")}
          >
            Work
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
