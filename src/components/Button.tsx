// src/components/Button.tsx
"use client";
import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

// ✅ 아이콘 파일 (세진 경로 그대로)
import iconGoogle from "@/assets/img/icon_google.png";
import iconArt from "@/assets/img/icon_art.png";
import iconUser from "@/assets/img/icon_user.png";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "lg" | "md" | "sm";
export type IconKey = "google" | "art" | "user";

const ICONS: Record<IconKey, StaticImageData> = {
  google: iconGoogle,
  art: iconArt,
  user: iconUser,
};

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: IconKey;
  rightIcon?: IconKey;
  fullWidth?: boolean;
  label?: React.ReactNode;
  iconOnly?: IconKey | null;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

const sizeMap: Record<ButtonSize, string> = {
  lg: "h-12 px-6 text-16b rounded-2xl",
  md: "h-10 px-5 text-14b rounded-2xl",
  sm: "h-8 px-4 text-12b rounded-xl",
};

const iconSizeMap: Record<ButtonSize, { w: number; h: number; cls: string }> = {
  lg: { w: 20, h: 20, cls: "w-5 h-5" },
  md: { w: 18, h: 18, cls: "w-[18px] h-[18px]" },
  sm: { w: 16, h: 16, cls: "w-4 h-4" },
};

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:brightness-[1.05] active:brightness-95",
  secondary:
    "bg-gray-100 text-text-primary hover:bg-gray-200 active:bg-gray-300",
  ghost:
    "bg-white text-text-primary border border-border-default hover:bg-gray-50 active:bg-gray-100",
  outline:
    "bg-transparent text-text-primary border border-border-default hover:bg-gray-50 active:bg-gray-100",
  danger:
    "bg-red text-white shadow-sm hover:brightness-[1.05] active:brightness-95",
};

const Icon = ({ name, size }: { name: IconKey; size: ButtonSize }) => {
  const m = iconSizeMap[size];
  return (
    <Image
      src={ICONS[name]}
      alt=""
      width={m.w}
      height={m.h}
      className={clsx(m.cls, "shrink-0")}
      aria-hidden
    />
  );
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  label,
  iconOnly = null,
  className,
  ...rest
}) => {
  // 원형 아이콘 전용 버튼
  if (iconOnly) {
    const dim =
      size === "lg" ? "h-12 w-12" : size === "md" ? "h-10 w-10" : "h-8 w-8";
    return (
      <button
        className={clsx(base, dim, "rounded-full", variantMap[variant], className)}
        {...rest}
      >
        <Icon name={iconOnly} size={size} />
      </button>
    );
  }

  return (
    <button
      className={clsx(
        base,
        sizeMap[size],
        variantMap[variant],
        fullWidth && "w-full",
        className
      )}
      {...rest}
    >
      {leftIcon && <Icon name={leftIcon} size={size} />}
      {label}
      {rightIcon && <Icon name={rightIcon} size={size} />}
    </button>
  );
};

export default Button;

/* ===== 칩 컴포넌트 ===== */
type ChipVariant = "filled" | "ghost";
interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  selected?: boolean;
  size?: ButtonSize;
  label: string;
  icon?: IconKey; // FilterChip 기본: art, LabelChip 기본: user
  variant?: ChipVariant;
  className?: string;
}

export const FilterChip: React.FC<ChipProps> = ({
  selected = false,
  size = "sm",
  label,
  icon = "art",
  variant = "ghost",
  className,
  ...rest
}) => {
  const filled = selected || variant === "filled";
  return (
    <button
      className={clsx(
        base,
        size === "lg"
          ? "h-12 px-4 text-16b"
          : size === "md"
          ? "h-10 px-3.5 text-14b"
          : "h-8 px-3 text-12b",
        "rounded-full",
        filled
          ? "bg-gray-900 text-white hover:brightness-105 active:brightness-95"
          : "bg-white text-text-primary border border-border-default hover:bg-gray-50 active:bg-gray-100",
        className
      )}
      {...rest}
    >
      <Icon name={icon} size={size} />
      {label}
    </button>
  );
};

export const LabelChip: React.FC<ChipProps> = ({
  size = "sm",
  label,
  icon = "user",
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        base,
        size === "lg"
          ? "h-12 px-4 text-16b"
          : size === "md"
          ? "h-10 px-3.5 text-14b"
          : "h-8 px-3 text-12b",
        "rounded-full bg-white text-text-primary border border-border-default hover:bg-gray-50 active:bg-gray-100",
        className
      )}
      {...rest}
    >
      <Icon name={icon} size={size} />
      {label}
    </button>
  );
};
