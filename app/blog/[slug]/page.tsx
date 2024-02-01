import PostComponent from "@/components/Blog/Post";
import { allDocuments as allDocs, Post } from "contentlayer/generated";
import type { Metadata, ResolvingMetadata } from "next";
import { FILTERED_POSTS, SORTED_ALL_POST, TAG_UNION } from "../allPosts";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const getPost = (id: string, tag: string): { nextPost?: Post; prevPost?: Post; post: Post } => {
  let postList = tag !== "" ? FILTERED_POSTS.get(tag) ?? [] : SORTED_ALL_POST;

  const post: Post = postList.find((doc: Post) => doc._raw.flattenedPath === id) as Post;
  const index = postList.map((doc) => doc._raw.flattenedPath).indexOf(id);
  const prevPost: Post | undefined = postList[index + 1];
  const nextPost: Post | undefined = postList[index - 1];
  return { post, prevPost, nextPost };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id: string = String(params.slug);
  const postData = getPost(id, "");

  const previousImages = (await parent).openGraph?.images || [];
  const title: string = "Reversed_hp : " + String(postData?.post?.title ?? "");
  return {
    title,
    openGraph: {
      title,
      description: "개발 초보자의 플레이 그라운드",
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
  return <PostComponent {...postData} />;
};

export default BlogPostPage;
