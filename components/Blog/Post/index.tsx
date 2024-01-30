"use client";
import { Post } from "contentlayer/generated";
import AsideMenu from "./AsideMenu";
import PostBody from "./Body";
import PreviousNextPost from "./PreviousNextPost";
import PostTitle from "./Title";
import useTOC from "@/hooks/useTOC";

const PostComponent = ({
  post,
  prevPost,
  nextPost,
}: {
  post: Post;
  prevPost?: Post;
  nextPost?: Post;
}) => {
  const { headData, activedIndex, nodeSearcher } = useTOC();

  const {
    title,
    date,
    body: { code },
  } = post;

  return (
    <div>
      <AsideMenu headData={headData} activedIndex={activedIndex} />
      <PostTitle title={title} date={date} />
      <PostBody code={code} ref={nodeSearcher} />
      <PreviousNextPost prevPost={prevPost} nextPost={nextPost} />
    </div>
  );
};
export default PostComponent;
