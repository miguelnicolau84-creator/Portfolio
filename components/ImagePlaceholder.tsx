interface ImagePlaceholderProps {
  caption?: string;
  aspectRatio?: "wide" | "square" | "tall";
  className?: string;
}

const aspectClasses = {
  wide: "aspect-[16/9]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

export default function ImagePlaceholder({
  caption,
  aspectRatio = "wide",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure className={`my-10 md:my-14 ${className}`}>
      <div
        className={`w-full ${aspectClasses[aspectRatio]} bg-stone-100 dark:bg-stone-900 border border-dashed border-stone-300 dark:border-stone-700 rounded-sm flex items-center justify-center`}
      >
        <div className="text-center select-none">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mx-auto mb-3 text-stone-300 dark:text-stone-600"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            <path
              d="M21 15l-5-5L5 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-sans text-stone-300 dark:text-stone-600 tracking-widest uppercase">
            Visual
          </span>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm font-sans text-stone-400 dark:text-stone-500 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
