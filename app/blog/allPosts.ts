import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const SORTED_ALL_POST: Post[] = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);
