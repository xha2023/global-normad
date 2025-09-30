// src/components/SideMenu.tsx
"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import avatarPng from "@/assets/img/default profile.png";
import editPng from "@/assets/img/edit_button.png";
import iconUser from "@/assets/img/icon_user.png";
import iconList from "@/assets/img/icon_list.png";
import iconSetting from "@/assets/img/icon_setting.png";
import iconCalendar from "@/assets/img/icon_calendar.png";

type MenuItem = { href?: string; label: string; icon: StaticImageData | string };

interface SideMenuProps {
  className?: string;
  items?: MenuItem[];
  avatarSrc?: StaticImageData | string;
  onEditClick?: () => void;
  size?: "lg" | "sm";
}

export default function SideMenu({
  className,
  items = [
    { href: "/profile", label: "내 정보", icon: iconUser },
    { href: "/bookings", label: "예약내역", icon: iconList },
    { href: "/experiences", label: "내 체험 관리", icon: iconSetting },
    { href: "/calendar", label: "예약 현황", icon: iconCalendar },
  ],
  avatarSrc = avatarPng,
  onEditClick,
  size = "lg",
}: SideMenuProps) {
  const isLg = size === "lg";
  const avatarBox = isLg ? "w-28 h-28" : "w-16 h-16";
  const editSize = isLg ? "w-7 h-7" : "w-6 h-6";

  return (
    <aside
      className={clsx(
        "w-full rounded-2xl border border-gray-100 bg-white",
        "shadow-[0_2px_10px_rgba(20,20,43,0.06)]",
        isLg ? "p-6" : "p-4",
        className
      )}
    >
      {/* 프로필 영역 */}
      <div className={clsx("relative mx-auto", isLg ? "mb-6" : "mb-4", avatarBox)}>
        {/* 원형 배경 + 아바타 */}
        <div className={clsx("w-full h-full rounded-full bg-[#E9F4FF] overflow-hidden")}>
          {/* 시안처럼 중앙에 아이콘 크기 여유 있게 */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={avatarSrc}
              alt="프로필"
              width={isLg ? 84 : 48}
              height={isLg ? 84 : 48}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 연필 버튼: 원 하단 우측에 살짝 겹치게 */}
        <button
          type="button"
          onClick={onEditClick}
          aria-label="프로필 수정"
          className={clsx(
            "absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3",
            editSize,
            "rounded-full bg-[#B7BAC2] text-white",
            "flex items-center justify-center",
            "ring-2 ring-white shadow-sm",
            onEditClick ? "hover:brightness-105 active:brightness-95" : "cursor-default"
          )}
        >
          <Image
            src={editPng}
            alt=""
            width={isLg ? 14 : 12}
            height={isLg ? 14 : 12}
            className="object-contain"
          />
        </button>
      </div>

      {/* 메뉴 리스트 */}
      <nav className={clsx("flex flex-col", isLg ? "gap-3" : "gap-2")}>
        {items.map((it, i) => (
          <Link
            key={(it.href || "#") + i}
            href={it.href || "#"}
            className={clsx(
              "group flex items-center rounded-xl",
              isLg ? "h-11 px-3" : "h-10 px-3",
              "hover:bg-gray-50 transition-colors"
            )}
          >
            <Image
              src={it.icon}
              alt=""
              width={20}
              height={20}
              className="mr-3 object-contain"
            />
            <span className="typo-14-m text-gray-700">{it.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
