"use client";
import Link from "next/link";

import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import { parseMdxDateFormat } from "@/utils/date";

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
  const paramTag: string = searchParams.get("tag") ?? "";
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
            <Link
              href={{
                pathname: "/blog",
                query: { page: index, tag: paramTag },
              }}
              key={`page_` + page}
              className={"mx-2 text-sm"}
            >
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
        <li>태그 및 검색 기능</li>
      </ul>
    </div>
  );
}

function PostCard(post: Post) {
  const tagData: string | undefined = post.tag;
  const tagStr: string = typeof tagData === "string" ? tagData : "";
  const tagArr: string[] = tagStr
    .split(",")
    .map((i) => i.trim())
    .filter((i) => i)
    .sort() as string[];
  return (
    <article className="px-2 py-4 border-b-2 border-opacity-50">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900  dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <div className="flex justify-between items-center h-6">
        <div>
          {tagArr.map((tagName) => {
            return (
              <Link
                href={{
                  pathname: "/blog",
                  query: {
                    tag: tagName.toLowerCase(),
                  },
                }}
                className="border-2 mr-2 p-1 text-xs rounded-lg"
                key={tagName}
              >
                {tagName}
              </Link>
            );
          })}
        </div>
        <time dateTime={post.date} className="block text-xs opacity-50">
          {parseMdxDateFormat(post.date)}
        </time>
      </div>
    </article>
  );
}

export default BlogHome;
