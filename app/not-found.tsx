import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <p className="text-xs font-sans tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-6">
          404
        </p>
        <h1 className="font-serif text-4xl text-stone-900 dark:text-stone-50 mb-4 leading-tight">
          Page not found
        </h1>
        <p className="text-base font-sans text-stone-500 dark:text-stone-400 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-medium text-stone-900 dark:text-stone-50 border-b border-stone-900 dark:border-stone-50 pb-0.5 hover:text-stone-500 hover:border-stone-500 dark:hover:text-stone-400 dark:hover:border-stone-400 transition-colors duration-200"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
