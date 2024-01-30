"use client";
import Link from "next/link";

import { Post } from "contentlayer/generated";
import { useSearchParams } from "next/navigation";
import { parseMdxDateFormat } from "@/utils/date";
import TagBadges from "./Tag";
import PageComponenet from "./Pagination";

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

function TitlePanel(): JSX.Element {
  return (
    <div className="p-4 rounded-xl border-2">
      <div className="text-xl font-bold">
        이 블로그는 현재 베타 버전입니다. 제작자 기분 따라 몇몇 기능들이 추가될 예정입니다.
      </div>
      <div className="text-xl">TODOS : </div>
      <ul className="list-disc list-inside">
        <li>기존 Notion 포스트 이전</li>
        <li>검색 기능</li>
        <li>태그 목록 기능</li>
        <li>TOC 드래그 / 닫기</li>
      </ul>
    </div>
  );
}

function PostCard(post: Post) {
  const searchParams = useSearchParams();
  const paramTag: string = searchParams.get("tag") ?? "";

  return (
    <article className="px-2 py-4 border-b-2 border-opacity-50">
      <h2 className="mb-1 text-xl">
        <Link
          href={{ pathname: post.url, query: { tag: paramTag.toLowerCase() } }}
          className="text-blue-700 hover:text-blue-900  dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <div className="flex justify-between items-center h-6">
        <TagBadges tag={post.tag} />
        <time dateTime={post.date} className="block text-xs opacity-50">
          {parseMdxDateFormat(post.date)}
        </time>
      </div>
    </article>
  );
}

export default BlogHome;
