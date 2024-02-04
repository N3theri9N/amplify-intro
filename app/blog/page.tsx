import { Post } from "contentlayer/generated";
import { Metadata } from "next";
import BlogHome from "@/components/Blog";
import { FILTERED_POSTS, TAG_UNION } from "./allPosts";
import { BASE_DOMAIN } from "@/constants";

export const metadata: Metadata = {
  title: "Reversed_hp 블로그",
  metadataBase: new URL(`${BASE_DOMAIN}/blog`),

  description:
    "초보 프론트엔드 개발자의 블로그 : 현재 베타 버전입니다. 추후에 주요 기능들이 추가될 예정입니다.",
  openGraph: {
    images: `${BASE_DOMAIN}/dy.png`,
    title: "Reversed_hp 블로그",
    description:
      "초보 프론트엔드 개발자의 블로그 : 현재 베타 버전입니다. 추후에 주요 기능들이 추가될 예정입니다.",
  },
};

const PAGE_SIZE: number = 10;

export default function Blog({
  searchParams,
}: {
  searchParams: { page?: number; tag?: TAG_UNION };
}) {
  const { page = 0, tag = "" } = searchParams;
  const filteredPosts: Post[] = FILTERED_POSTS.get(tag) ?? [];

  const from: number = PAGE_SIZE * Number(page);
  const to: number = PAGE_SIZE * (Number(page) + 1);
  const posts = filteredPosts.slice(from, to);

  return <BlogHome posts={posts} totalSize={filteredPosts.length} />;
}
