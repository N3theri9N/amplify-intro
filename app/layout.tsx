import type { Metadata } from "next";
import { suit } from "@/font/localFont";
// import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import ThemeProviderComp from "./ThemeProvider";
// import { NextFont } from "next/dist/compiled/@next/font";

export const metadata: Metadata = {
  title: "OmochaBako;ToyBox",
  description: "개발연습중",
};
// const notoSans: NextFont = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={clsx(suit.className)}>
      <body>
        <ThemeProviderComp>
          {children}
          <div id="modal"></div>
        </ThemeProviderComp>
      </body>
    </html>
  );
}
