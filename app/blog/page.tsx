import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
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

export default function Blog({ searchParams }: { searchParams: { page?: number; tag?: string } }) {
  const { page = 0, tag = "" } = searchParams;
  const sortedPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  const posts = sortedPosts.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1));

  return <BlogHome posts={posts} totalSize={allPosts.length} />;
}
