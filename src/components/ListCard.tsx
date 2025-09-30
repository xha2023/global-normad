"use client";
import clsx from "clsx";
import Tag from "@/components/Tag";
import Button from "@/components/Button";

export interface ListCardProps {
  thumbnail: string;
  title: string;
  subtitle?: string;      // 예: 인원/시간 등
  status?: "success" | "warning" | "info" | "error" | "default";
  statusText?: string;    // 예: 예약완료, 확인요청
  price: string;          // "₩ 35,000~"
  priceSub?: string;      // "세금 포함" 등
  ctaLabel?: string;      // 버튼 텍스트
  className?: string;
  onClickCTA?: () => void;
}

export default function ListCard({
  thumbnail,
  title,
  subtitle,
  status = "default",
  statusText,
  price,
  priceSub,
  ctaLabel = "자세히",
  className,
  onClickCTA,
}: ListCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl bg-white dark:bg-gray-900 border border-border-default p-4 flex items-center gap-4",
        className
      )}
    >
      <img
        src={thumbnail}
        alt=""
        className="w-24 h-24 rounded-xl object-cover shrink-0"
        loading="lazy"
      />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {statusText && <Tag variant={status}>{statusText}</Tag>}
          {/* 시간/라벨 같은 보조정보를 subtitle 앞에 따로 둘 수도 있음 */}
        </div>

        <div className="mt-1 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h4 className="typo-16-b truncate">{title}</h4>
            {subtitle && (
              <p className="typo-12-m text-text-secondary mt-0.5 truncate">
                {subtitle}
              </p>
            )}
          </div>

          <div className="text-right shrink-0">
            <div className="typo-16-b">{price}</div>
            {priceSub && (
              <div className="typo-12-m text-text-secondary">{priceSub}</div>
            )}
          </div>
        </div>
      </div>

      <Button label={ctaLabel} size="sm" onClick={onClickCTA} />
    </div>
  );
}
