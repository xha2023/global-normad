"use client";
import React from "react";
import clsx from "clsx";

interface CardProps { className?: string; children: React.ReactNode; }
interface ImageProps { src: string; alt: string; ratio?: "1:1" | "4:3" | "16:9"; }
interface ContentProps { children: React.ReactNode; }
interface PriceProps { price: string; sub?: string; right?: React.ReactNode; }

const CardRoot: React.FC<CardProps> = ({ className, children }) => (
  <div
    className={clsx(
      "bg-white dark:bg-gray-900 rounded-2xl overflow-hidden",
      "shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)] border border-border-default",
      className
    )}
  >
    {children}
  </div>
);

const ratioMap = {
  "1:1": "aspect-square",
  "4:3": "aspect-[4/3]",
  "16:9": "aspect-video",
};

const CardImage: React.FC<ImageProps> = ({ src, alt, ratio = "4:3" }) => (
  <div className={clsx("w-full", ratioMap[ratio])}>
    {/* next/image를 쓰면 <Image fill ...> 권장 */}
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const CardContent: React.FC<ContentProps> = ({ children }) => (
  <div className="p-4">{children}</div>
);

const CardPrice: React.FC<PriceProps> = ({ price, sub, right }) => (
  <div className="px-4 pb-4">
    <div className="flex items-end justify-between">
      <div>
        <div className="typo-16-b">{price}</div>
        {sub && <div className="typo-12-m text-text-secondary mt-0.5">{sub}</div>}
      </div>
      {right}
    </div>
  </div>
);

const Card = Object.assign(CardRoot, { Image: CardImage, Content: CardContent, Price: CardPrice });
export default Card;
