import type { Metadata } from "next";
import { stardust } from "@/font/localFont";
import "./globals.css";
import { clsx } from "clsx";
import ThemeProviderComp from "./ThemeProvider";

export const metadata: Metadata = {
  title: "OmochaBako;ToyBox",
  description: "개발연습중",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={clsx(stardust.className)}>
      <body>
        <ThemeProviderComp>{children}</ThemeProviderComp>
      </body>
    </html>
  );
}
