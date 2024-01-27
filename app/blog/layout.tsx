import BlogFooter from "@/components/Blog/Footer";
import BlogHeader from "@/components/Blog/Header";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogHeader />
      <div className={`mx-auto max-w-[800px] px-5 py-8`}>{children}</div>
      <BlogFooter />
    </>
  );
}
