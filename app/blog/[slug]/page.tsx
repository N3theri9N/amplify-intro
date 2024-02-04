import PostComponent from "@/components/Blog/Post";
import { BASE_DOMAIN } from "@/constants";
import { Post } from "contentlayer/generated";
import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { FILTERED_POSTS, SORTED_ALL_POST, TAG_UNION } from "../allPosts";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPost = (id: string, tag: TAG_UNION): { nextPost?: Post; prevPost?: Post; post: Post } => {
  const postList = FILTERED_POSTS.get(tag) ?? [];
  const post: Post = postList.find((doc: Post) => doc._raw.flattenedPath === id) as Post;
  const index = postList.map((doc) => doc._raw.flattenedPath).indexOf(id);
  const prevPost: Post | undefined = postList[index + 1];
  const nextPost: Post | undefined = postList[index - 1];
  return { post, prevPost, nextPost };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id: string = String(params.slug);
  const postData = getPost(id, "");

  const title: string = postData?.post?.title ?? "";
  const description: string = postData?.post?.description ?? "";
  return {
    metadataBase: new URL(`${BASE_DOMAIN}/blog/${id}`),
    title,
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      title,
      images: `${BASE_DOMAIN}/dy.png`,
      description,
    },
  };
}

export async function generateStaticParams() {
  return SORTED_ALL_POST.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const BlogPostPage = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { tag?: TAG_UNION };
}) => {
  const id: string = String(params.slug);
  const { tag = "" } = searchParams;

  const postData: { post: Post; nextPost?: Post; prevPost?: Post } = getPost(id, tag);
  if (typeof postData.post === "undefined") {
    return notFound();
  }
  return <PostComponent {...postData} />;
};

export default BlogPostPage;
