"use client";

import React from "react";
import Image from "next/image";

// ✅ 정적 import (src/assets/img 안에 있어야 함)
import iconFacebook from "@/assets/img/icon_facebook.png";
import iconInstagram from "@/assets/img/icon_instagram.png";
import iconYoutube from "@/assets/img/icon_youtube.png";
import iconX from "@/assets/img/icon_x.png";

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
        {/* 왼쪽 카피라이트 */}
        <p className="typo-12-m text-text-secondary">©codeit - 2023</p>

        {/* 가운데 링크 */}
        <div className="flex items-center gap-4 text-text-secondary typo-12-m">
          <a href="#">Privacy Policy</a>
          <span>·</span>
          <a href="#">FAQ</a>
        </div>

        {/* 오른쪽 아이콘 */}
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src={iconFacebook} alt="Facebook" width={20} height={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src={iconInstagram} alt="Instagram" width={20} height={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Image src={iconYoutube} alt="YouTube" width={20} height={20} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <Image src={iconX} alt="X" width={20} height={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
