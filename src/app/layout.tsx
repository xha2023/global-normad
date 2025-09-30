import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Global-Nomad",
  description: "Next.js App Router setup",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
