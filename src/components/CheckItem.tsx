"use client";
import React from "react";
import clsx from "clsx";

interface CheckItemProps {
  checked?: boolean;
  onChange?: (v: boolean) => void;
  label: string;
  description?: string;
  right?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function CheckItem({
  checked = false,
  onChange,
  label,
  description,
  right,
  className,
  disabled,
}: CheckItemProps) {
  return (
    <label
      className={clsx(
        "w-full flex items-center justify-between gap-3 rounded-2xl border border-border-default bg-white dark:bg-gray-900 p-4",
        disabled && "opacity-60",
        className
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        <input
          type="checkbox"
          className="mt-0.5 h-5 w-5 rounded border-border-default text-primary focus:ring-primary"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
        />
        <div className="min-w-0">
          <div className="typo-14-b truncate">{label}</div>
          {description && (
            <div className="typo-12-m text-text-secondary mt-0.5 truncate">
              {description}
            </div>
          )}
        </div>
      </div>
      {right}
    </label>
  );
}
