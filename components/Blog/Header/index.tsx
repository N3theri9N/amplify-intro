"use client";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";
import { useCallback } from "react";

const BlogHeader = () => {
  const scrollBarRef = useCallback((node: HTMLDivElement) => {
    if (node == null) {
      return;
    }
    let timer = true;
    window.addEventListener("scroll", function () {
      if (timer === false) return;

      timer = false;
      setTimeout(() => {
        const progression: any = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
        const percent: string = String(progression.toFixed(2) * 100) + "%";
        node.style.width = percent;
        timer = true;
      }, 100);
    });
  }, []);

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
        <div
          className="absolute -z-[10] w-[1%] duration-100 left-0 top-0 border-b-4 h-[65px] border-black dark:border-white"
          ref={scrollBarRef}
        ></div>
      </header>
      <div className="h-[65px]"></div>
    </>
  );
};

export default BlogHeader;
