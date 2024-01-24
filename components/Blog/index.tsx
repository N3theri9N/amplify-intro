"use client";
import Link from "next/link";

import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

const BlogHome = ({ posts, totalSize }: { posts: Post[]; totalSize: number }) => {
  return (
    <main className="flex flex-col gap-4">
      <TitlePanel />
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      <PageComponenet totalSize={totalSize} />
    </main>
  );
};

const PAGE_SIZE: number = 10;

function PageComponenet({ totalSize }: { totalSize: number }): JSX.Element {
  const searchParams = useSearchParams();
  const paramPage: string = searchParams.get("page") ?? "0";
  const totalPage: number = Math.ceil(totalSize / PAGE_SIZE);
  return (
    <div className="px-auto mx-auto flex items-center">
      {new Array(totalPage).fill("").map((_, index) => {
        const page: number = index + 1;
        if (index === parseInt(paramPage)) {
          return (
            <span
              key={`page_` + page}
              className="text-xl font-semibold px-1 border-b-2 dark:border-white border-black"
            >
              {page}
            </span>
          );
        } else {
          return (
            <Link href={`/blog?page=${index}`} key={`page_` + page} className={"mx-2 text-sm"}>
              {page}
            </Link>
          );
        }
      })}
    </div>
  );
}

function TitlePanel(): JSX.Element {
  return (
    <div className="p-4 rounded-xl border-2">
      <div className="text-xl font-bold">
        현재 블로그는 얼리엑세스 버전입니다. 추후에 주요 기능들이 추가될 예정입니다.
      </div>
      <div className="text-xl">TODOS : </div>
      <ul className="list-disc list-inside">
        <li>기존 Notion 포스트를 MDX 로 이전</li>
        <li>태그 기능</li>
        <li>검색 기능</li>
      </ul>
    </div>
  );
}

function PostCard(post: Post) {
  return (
    <article className="p-2 border-2 rounded-xl border-opacity-50">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900  dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <div className="flex justify-between items-center h-6">
        <div>
          {post.tag
            ?.split(",")
            .sort()
            .map((tagName) => {
              tagName = tagName.trim();
              return (
                <span className="border-2 mr-2 p-1 text-xs rounded-lg" key={tagName}>
                  {tagName}
                </span>
              );
            })}
        </div>
        <time dateTime={post.date} className="block text-xs opacity-50">
          {format(parseISO(post.date), "yyyy-MM-dd")}
        </time>
      </div>
    </article>
  );
}

export default BlogHome;
