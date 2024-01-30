import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const SORTED_ALL_POST: Post[] = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

const ALL_TAGS = ["blog", "frontend", "javascript", "nextjs", "test"];
export type TAG_UNION = (typeof ALL_TAGS)[number];

const filteredPostMap: [TAG_UNION, Post[]][] = ALL_TAGS.map((tag) => {
  const regex = new RegExp(tag, "i");
  const filteredPost = SORTED_ALL_POST.filter((post: Post) =>
    regex.test(String(post.tag).toLowerCase())
  );
  return [tag, filteredPost];
});

export const FILTERED_POSTS: Map<TAG_UNION, Post[]> = (function () {
  return new Map(filteredPostMap);
})();
