"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Post } from "contentlayer/generated";
import { useCallback, useState } from "react";
import AsideMenu from "./AsideMenu";
import style from "./post.module.css";
import { parseMdxDateFormat } from "@/utils/date";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const PostComponent = ({
  post,
  prevPost,
  nextPost,
}: {
  post: Post;
  prevPost?: Post;
  nextPost?: Post;
}) => {
  const [headData, setHeadData] = useState<{ nodeName: string; text: string }[]>([]);
  const [activedIndex, setActivedIndex] = useState<number>(0);
  const MDXContent = useMDXComponent(post.body.code);
  const searchParams = useSearchParams();
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
      const scrollY: number = window.scrollY + 5;
      const aheadHeaders: number[] = offsetTopArr.filter((top) => top <= scrollY) ?? [];
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
      <div className={`${style.post} pb-10 border-b-[1px] border-black/50`} ref={nodeSearcher}>
        <MDXContent />
      </div>
      <div className="py-5 flex justify-around gap-4">
        <div className="w-[50%]">
          {typeof prevPost !== "undefined" && (
            <div className="border-2 border-l-4 rounded-l border-l-black p-4 text-right">
              <Link href={`${prevPost.url}?${searchParams.toString()}`}>
                <div className="text-lg font-bold">이전 포스트</div>
                <div className="text-ellipsis">{prevPost.title}</div>
              </Link>
            </div>
          )}
        </div>
        <div className="w-[50%]">
          {typeof nextPost !== "undefined" && (
            <div className="border-2 p-4 border-r-4 rounded-r border-r-black">
              <Link href={`${nextPost.url}?${searchParams.toString()}`}>
                <div className="text-lg font-bold">다음 포스트</div>
                <div className="text-ellipsis">{nextPost.title}</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PostComponent;
