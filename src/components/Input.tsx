"use client";

import React from "react";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

// ✅ 기본 아이콘(정적 import)
import eyeOffDefault from "@/assets/img/active=off.png";
import eyeOnDefault from "@/assets/img/active=on.png";

type InputStatus = "default" | "success" | "error";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helpText?: string;
  status?: InputStatus;

  // 구 API
  leadingIcon?: React.ReactNode;

  // 새 API: 문자열 경로 or 정적 import
  leadingIconSrc?: string | StaticImageData | null;
  leadingIconAlt?: string;

  // 비밀번호 토글
  showPasswordToggle?: boolean;
  eyeOffSrc?: string | StaticImageData | null;
  eyeOnSrc?: string | StaticImageData | null;

  className?: string;
}

const statusRing: Record<InputStatus, string> = {
  default: "border-border-default focus:ring-primary",
  success: "border-emerald-500 focus:ring-emerald-500",
  error: "border-red-500 focus:ring-red-500",
};

const isValidSrc = (v: unknown): v is string | StaticImageData =>
  !!v && !(typeof v === "string" && v.trim() === "");

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    helpText,
    status = "default",
    leadingIcon,
    leadingIconSrc = null,
    leadingIconAlt = "",
    showPasswordToggle = false,
    eyeOffSrc = eyeOffDefault,     // ✅ 기본값 제공
    eyeOnSrc = eyeOnDefault,       // ✅ 기본값 제공
    className,
    type = "text",
    ...domProps
  },
  ref
) {
  const [show, setShow] = React.useState(false);

  const effectiveType =
    showPasswordToggle && (type === "password" || type === "text")
      ? show
        ? "text"
        : "password"
      : type;

  const leadingSrc = isValidSrc(leadingIconSrc) ? leadingIconSrc : null;
  const hasLeading = !!(leadingIcon || leadingSrc);

  const canShowEye = showPasswordToggle && (type === "password" || type === "text");
  const eyeSrc = show ? eyeOnSrc : eyeOffSrc;
  const hasEye = canShowEye && isValidSrc(eyeSrc);

  return (
    <div className={clsx("w-full", className)}>
      {label && <label className="block mb-2.5 typo-14-m">{label}</label>}

      <div className="relative">
        {/* 왼쪽 아이콘 */}
        {hasLeading && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            {leadingSrc ? (
              <span className="relative block w-5 h-5">
                <Image
                  src={leadingSrc}
                  alt={leadingIconAlt}
                  fill
                  sizes="20px"
                  className="object-contain"
                />
              </span>
            ) : (
              leadingIcon
            )}
          </span>
        )}

        <input
          ref={ref}
          type={effectiveType}
          className={clsx(
            "w-full rounded-2xl bg-white dark:bg-gray-900",
            "px-4 py-5",
            hasLeading && "pl-11",
            "typo-14-m text-text-primary placeholder:text-text-secondary/60",
            "border focus:outline-none focus:ring-2 transition",
            statusRing[status]
          )}
          {...domProps}
        />

        {/* 오른쪽 눈 토글 (src 없으면 버튼 자체를 렌더 X) */}
        {hasEye && (
          <button
            type="button"
            onClick={() => setShow(v => !v)}
            className="absolute inset-y-0 right-0 flex items-center justify-center w-11"
            aria-label={show ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            <span className="relative block w-5 h-5">
              <Image
                src={eyeSrc as string | StaticImageData}
                alt={show ? "show" : "hide"}
                fill
                sizes="20px"
                className="object-contain"
              />
            </span>
          </button>
        )}
      </div>

      {helpText && (
        <p
          className={clsx(
            "mt-2 typo-12-m",
            status === "error"
              ? "text-red-500"
              : status === "success"
              ? "text-emerald-600"
              : "text-text-secondary"
          )}
        >
          {helpText}
        </p>
      )}
    </div>
  );
});

export default Input;
