import { Post } from "@/.contentlayer/generated/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PreviousNextPost = ({ prevPost, nextPost }: { prevPost?: Post; nextPost?: Post }) => {
  const searchParams = useSearchParams();
  return (
    <div className="w-full py-5 flex max-sm:flex-col justify-between gap-4">
      <div className="w-full sm:w-[calc(50%-8px)] flex-none">
        {typeof prevPost !== "undefined" && (
          <Link href={`${prevPost.url}?${searchParams.toString()}`}>
            <div className="flex justify-between items-center border-2 border-l-4 rounded-l border-l-black dark:border-l-white p-4 text-right">
              <div className="w-5 h-10 border-transparent border-[20px] border-l-0 dark:border-r-white border-r-black" />
              <div className="flex-auto overflow-hidden shrink">
                <div className="text-lg font-bold">이전 포스트</div>
                <div className="truncate overflow-hidden">{prevPost.title}</div>
              </div>
            </div>
          </Link>
        )}
      </div>
      <div className="w-full sm:w-[calc(50%-8px)] flex-none">
        {typeof nextPost !== "undefined" && (
          <Link href={`${nextPost.url}?${searchParams.toString()}`}>
            <div className="flex flex-row-reverse justify-between items-center p-4 border-2 border-r-4 rounded-r border-r-black dark:border-r-white">
              <div className="w-5 h-10 border-transparent border-[20px] border-r-0 dark:border-l-white border-l-black" />
              <div className="flex-auto overflow-hidden shrink">
                <div className="text-lg font-bold">다음 포스트</div>
                <div className="truncate">{nextPost.title}</div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PreviousNextPost;
