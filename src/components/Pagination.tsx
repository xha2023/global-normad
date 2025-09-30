"use client";
import clsx from "clsx";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (p: number) => void;
  className?: string;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
  className,
}: PaginationProps) {
  const go = (p: number) =>
    onChange?.(Math.max(1, Math.min(totalPages, p)));

  const items = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={clsx(
        "w-full flex items-center justify-center gap-1 py-3 rounded-xl border-2 border-violet-300/60 border-dashed bg-white dark:bg-gray-900",
        className
      )}
    >
      <button
        className="h-8 w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => go(page - 1)}
        aria-label="이전"
      >
        ‹
      </button>
      {items.map((n) => (
        <button
          key={n}
          onClick={() => go(n)}
          className={clsx(
            "h-8 w-8 rounded-lg typo-12b",
            n === page
              ? "bg-primary text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-800"
          )}
        >
          {n}
        </button>
      ))}
      <button
        className="h-8 w-8 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => go(page + 1)}
        aria-label="다음"
      >
        ›
      </button>
    </div>
  );
}
