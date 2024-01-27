"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { useCallback, useState } from "react";
import AsideMenu from "./AsideMenu";
import style from "./post.module.css";
import { parseMdxDateFormat } from "@/utils/date";

const PostComponent = ({ post }: { post: Post }) => {
  const [headData, setHeadData] = useState<{ nodeName: string; text: string }[]>([]);
  const [activedIndex, setActivedIndex] = useState<number>(0);
  const MDXContent = useMDXComponent(post.body.code);

  const nodeSearcher = useCallback((node: HTMLDivElement) => {
    if (node == null) {
      return;
    }
    const sections: NodeListOf<HTMLHeadElement> = node.querySelectorAll("h1,h2,h3");
    const headArray: HTMLHeadElement[] = Array.from(sections);

    setHeadData(
      headArray.map((node: HTMLHeadElement) => {
        return { nodeName: node.nodeName, text: node.id };
      })
    );
    const offsetTopArr = [...headArray.map((node) => node.offsetTop)];

    window.addEventListener("scroll", () => {
      const scrollY: number = window.scrollY;
      const aheadHeaders: number[] = offsetTopArr.filter((top) => top < scrollY) ?? [];
      const scrollIndex = aheadHeaders.length;
      setActivedIndex(Math.max(scrollIndex - 1, 0));
    });
  }, []);

  return (
    <div>
      <AsideMenu headData={headData} activedIndex={activedIndex} />
      <div>
        <h1 className="my-5 text-5xl font-normal">{post.title}</h1>
        <p className="opacity-50">생성 일시 : {parseMdxDateFormat(post.date)}</p>
      </div>
      <div className={style.post} ref={nodeSearcher}>
        <MDXContent />
      </div>
    </div>
  );
};
export default PostComponent;
