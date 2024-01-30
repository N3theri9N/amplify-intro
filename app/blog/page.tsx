import { Post } from "contentlayer/generated";
import { Metadata } from "next";
import BlogHome from "@/components/Blog";
import { SORTED_ALL_POST, FILTERED_POSTS, TAG_UNION } from "./allPosts";

export const metadata: Metadata = {
  title: "RHP의 블로그",
  // metadataBase: new URL("/blog"),
  description: "현재 블로그는 얼리엑세스 버전입니다. 추후에 주요 기능들이 추가될 예정입니다.",
  openGraph: {
    images: "",
    title: "RHP의 블로그",
    description: "현재 블로그는 얼리엑세스 버전입니다. 추후에 주요 기능들이 추가될 예정입니다.",
  },
};

const PAGE_SIZE: number = 10;

export default function Blog({
  searchParams,
}: {
  searchParams: { page?: number; tag?: TAG_UNION };
}) {
  const { page = 0, tag = "" } = searchParams;
  let filteredPosts: Post[];
  if (tag !== "") {
    filteredPosts = FILTERED_POSTS.get(String(tag).toLowerCase()) ?? [];
  } else {
    filteredPosts = SORTED_ALL_POST;
  }

  const from: number = PAGE_SIZE * Number(page);
  const to: number = PAGE_SIZE * (Number(page) + 1);
  const posts = filteredPosts.slice(from, to);

  return <BlogHome posts={posts} totalSize={filteredPosts.length} />;
}
