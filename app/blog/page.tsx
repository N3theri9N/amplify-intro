import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";

function PostCard(post: Post) {
  return (
    <article className="py-2 border-b-2 border-opacity-50">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <div className="flex justify-between align-center">
        <div>
          {post.tag?.split(",").map((tagName) => {
            tagName = tagName.trim();
            return (
              <span className="border-2 mr-2 p-1 text-xs rounded-lg" key={tagName}>
                {tagName}
              </span>
            );
          })}
        </div>
        <time dateTime={post.date} className="block text-xs opacity-50">
          {/* {format(parseISO(post.date), "LLLL d, yyyy")} */}
          {format(parseISO(post.date), "yyyy-MM-d")}
        </time>
      </div>
    </article>
  );
}

export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="flex flex-col gap-4">
      <div className="p-4 rounded-xl border-2">
        <div className="text-xl font-bold">현재 블로그 공사중입니다.</div>
        <div className="text-xl">TODOS : </div>
        <ul className="list-disc list-inside">
          <li>기존 Notion 포스트를 MDX 로 이전</li>
          <li>메인페이지 꾸미기</li>
        </ul>
      </div>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </main>
  );
}
