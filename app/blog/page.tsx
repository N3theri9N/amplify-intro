import { compareDesc } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import BlogHome from "@/components/Blog";

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

function getFilteredPosts(tag: string): Post[] {
  const regex = new RegExp(tag);
  const filteredPosts = allPosts
    .filter((item) => {
      return regex.test(String(item.tag).toLowerCase());
    })
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  return filteredPosts;
}

export default function Blog({ searchParams }: { searchParams: { page?: number; tag?: string } }) {
  const { page = 0, tag = "" } = searchParams;
  const filteredPosts = getFilteredPosts(tag);
  const from: number = PAGE_SIZE * Number(page);
  const to: number = PAGE_SIZE * (Number(page) + 1);
  const posts = filteredPosts.slice(from, to);
  return <BlogHome posts={posts} totalSize={filteredPosts.length} />;
}
