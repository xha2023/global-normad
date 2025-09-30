// src/components/GNB.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/img/Logo.png";
import BellIcon from "@/assets/img/icon_bell.png";

type GNBProps = {
  /** 로그인 여부 */
  isLoggedIn?: boolean;
  /** 안 읽은 알림 개수 (0 또는 undefined면 뱃지 숨김) */
  unread?: number;
};

export default function GNB({ isLoggedIn = false, unread = 0 }: GNBProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border-default">
      <div className="mx-auto w-full max-w-[1200px] h-14 px-6 flex items-center justify-between">
        {/* Left: Logo (이미 텍스트 포함된 이미지) */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src={Logo}
            alt="GlobalNomad 로고"
            height={28}
            priority
          />
        </Link>

        {/* Right */}
        {isLoggedIn ? (
          // ----- 로그인 상태 -----
          <nav className="flex items-center gap-3">
            {/* 알림 버튼 */}
            <button
              type="button"
              aria-label="알림"
              className="relative h-8 w-8 flex items-center justify-center rounded-xl border border-border-default bg-white hover:bg-gray-50 transition"
            >
              <Image
                src={BellIcon}
                alt="알림"
                width={20}
                height={20}
                className="object-contain"
              />
              {unread > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-red-500 text-white typo-11-b flex items-center justify-center"
                >
                  {unread > 9 ? "9+" : unread}
                </span>
              )}
            </button>

            {/* 프로필 버튼 */}
            <Link
              href="/profile"
              className="h-8 px-3 rounded-xl border border-border-default bg-white hover:bg-gray-50 transition flex items-center typo-12b text-gray-900"
            >
              프로필
            </Link>
          </nav>
        ) : (
          // ----- 게스트 상태 -----
          <nav className="flex items-center gap-6">
            <Link href="/login" className="typo-14-m text-gray-900 hover:text-primary">
              로그인
            </Link>
            <Link href="/signup" className="typo-14-m text-gray-900 hover:text-primary">
              회원가입
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
