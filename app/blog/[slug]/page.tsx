import PostComponent from "@/components/Blog/Post";
import { allDocuments as allDocs, Post } from "contentlayer/generated";

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
