import PostComponent from "@/components/Blog/Post";
import { allDocuments as allDocs, Post } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id: string = String(params.slug);
  const post = getPost(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const title: string = "RHP 블로그 : " + post.title;
  return {
    title,
    openGraph: {
      title,
      description: "개발 초보자의 플레이 그라운드",
    },
  };
}

const getPost = (id: string) => {
  const post: Post = allDocs.find((doc: Post) => doc._raw.flattenedPath === id) as Post;
  return post;
};

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const id: string = String(params.slug);
  const post = getPost(id);
  return <PostComponent code={post.body.code} />;
};

export default BlogPostPage;
