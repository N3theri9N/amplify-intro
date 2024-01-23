import ThemeSwitch from "@/components/themeSwitch";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="p-4 fixed flex w-full items-center justify-between bg-white dark:bg-slate-900 bg-opacity-50 border-b-[1px]">
        <h1 className="text-center mb-0 text-2xl font-black">Reversed_hp&#39;s Blog</h1>
        <ThemeSwitch />
      </header>
      <div className="h-[65px]"></div>
      <div className={`mx-auto max-w-[800px] px-5 py-8`}>{children}</div>
    </>
  );
}
