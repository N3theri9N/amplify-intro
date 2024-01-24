import type { Metadata } from "next";
import { suit } from "@/font/localFont";
// import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import ThemeProviderComp from "./ThemeProvider";
import { Suspense } from "react";
import Loading from "./loading";
// import { NextFont } from "next/dist/compiled/@next/font";

export const metadata: Metadata = {
  title: "My Fulled Front End Story",
  description: "개발연습중",
};
// const notoSans: NextFont = Noto_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={clsx(suit.className)}>
      <body className="bg-white dark:bg-slate-900 duration-300 transition-[background-color_0.3s]">
        <ThemeProviderComp>
          {/* <Suspense fallback={<Loading />}> */}
          {children}
          <div id="modal"></div>
          {/* </Suspense> */}
        </ThemeProviderComp>
      </body>
    </html>
  );
}
