import BlogFooter from "@/components/Blog/Footer";
import BlogHeader from "@/components/Blog/Header";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogHeader />
      <div className="invisible lg:visible w-full h-4 absolute flex top-[100px] justify-center">
        <div id="LeftAside" className="w-full text-right"></div>
        <div className="min-w-[800px]"></div>
        <div id="RightAside" className="w-full"></div>
      </div>
      <div className={`mx-auto max-w-[800px] px-5 py-8`}>{children}</div>
      <BlogFooter />
    </>
  );
}
