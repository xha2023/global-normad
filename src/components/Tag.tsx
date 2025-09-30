"use client";
import clsx from "clsx";

/** 예약 상태 */
export type BookingStatus =
  | "canceled"       // 예약 취소
  | "completed"      // 예약 완료
  | "rejected"       // 예약 거절
  | "experienceDone" // 체험 완료
  | "approved";      // 예약 승인

/** 일반 태그 */
export type GenericTag = "default" | "info" | "success" | "warning" | "error";

type Props = {
  /** 둘 중 하나만 써도 됩니다. (status 우선) */
  status?: BookingStatus;
  variant?: GenericTag;

  className?: string;
  size?: "sm" | "md";
  /** 라벨 오버라이드가 필요하면 children으로 넣어도 됩니다. */
  children?: React.ReactNode;
};

/** 한국어 라벨 매핑 */
const LABEL_STATUS: Record<BookingStatus, string> = {
  canceled: "예약 취소",
  completed: "예약 완료",
  rejected: "예약 거절",
  experienceDone: "체험 완료",
  approved: "예약 승인",
};
const LABEL_VARIANT: Record<GenericTag, string> = {
  default: "기본",
  info: "정보",
  success: "성공",
  warning: "경고",
  error: "오류",
};

/** 색상 매핑 */
const STYLE_STATUS: Record<BookingStatus, { bg: string; text: string; ring: string }> = {
  canceled:       { bg: "bg-gray-100",   text: "text-gray-700",   ring: "ring-gray-200" },
  completed:      { bg: "bg-[#E9FAD7]",  text: "text-[#49B000]",  ring: "ring-[#D2F0B4]" },
  rejected:       { bg: "bg-[#FFE5E7]",  text: "text-[#FF2237]",  ring: "ring-[#FFC9CF]" },
  experienceDone: { bg: "bg-[#E5F1FF]",  text: "text-[#3069F2]",  ring: "ring-[#CFE3FF]" },
  approved:       { bg: "bg-[#E3F7FF]",  text: "text-[#1E9ED6]",  ring: "ring-[#C8EEFF]" },
};
const STYLE_VARIANT: Record<GenericTag, { bg: string; text: string; ring: string }> = {
  default: { bg: "bg-gray-100",   text: "text-gray-700",    ring: "ring-gray-200" },
  info:    { bg: "bg-blue-100",   text: "text-blue-600",    ring: "ring-blue-200" },
  success: { bg: "bg-emerald-100",text: "text-emerald-600", ring: "ring-emerald-200" },
  warning: { bg: "bg-amber-100",  text: "text-amber-600",   ring: "ring-amber-200" },
  error:   { bg: "bg-red-100",    text: "text-red-600",     ring: "ring-red-200" },
};

export default function Tag({ status, variant, className, size = "md", children }: Props) {
  // 우선순위: status > variant
  const isStatus = !!status;
  const style = isStatus
    ? (status && STYLE_STATUS[status]) || STYLE_STATUS.canceled
    : (variant && STYLE_VARIANT[variant]) || STYLE_VARIANT.default;

  const label = children
    ?? (isStatus
        ? (status && LABEL_STATUS[status]) || LABEL_STATUS.canceled
        : (variant && LABEL_VARIANT[variant]) || LABEL_VARIANT.default);

  if (process.env.NODE_ENV !== "production") {
    const key = status ?? variant;
    const ok = isStatus ? !!STYLE_STATUS[status as BookingStatus] : !!STYLE_VARIANT[variant as GenericTag];
    if (!ok) {
      // eslint-disable-next-line no-console
      console.warn(`[Tag] unknown key "${key}". Falling back to ${isStatus ? "canceled" : "default"}.`);
    }
  }

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full ring-1",
        style.bg, style.text, style.ring,
        size === "sm" ? "h-6 px-3 typo-12-m" : "h-7 px-3.5 typo-14-m",
        className
      )}
    >
      {label}
    </span>
  );
}
