import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="p-4 fixed flex w-full items-center z-10 justify-between bg-white/50 dark:bg-slate-900/50 border-b-[1px]">
        {/* <h1 className="text-center mb-0 text-2xl font-black">Reversed_hp&#39;s Blog</h1> */}
        <Link href="/blog">
          <h1 className="text-center mb-0 text-2xl font-black">Reversed_hp</h1>
        </Link>

        <div className="flex items-center gap-x-2">
          <Link href="/">INTRO</Link>
          <ThemeSwitch />
        </div>
      </header>
      <div className="h-[65px]"></div>
      <div className={`mx-auto max-w-[800px] px-5 py-8`}>{children}</div>
    </>
  );
}
