import { Post } from "@/.contentlayer/generated/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PreviousNextPost = ({ prevPost, nextPost }: { prevPost?: Post; nextPost?: Post }) => {
  const searchParams = useSearchParams();
  return (
    <div className="py-5 flex justify-around gap-4">
      <div className="w-[50%]">
        {typeof prevPost !== "undefined" && (
          <Link href={`${prevPost.url}?${searchParams.toString()}`}>
            <div className="border-2 border-l-4 rounded-l border-l-black p-4 text-right">
              <div className="text-lg font-bold">이전 포스트</div>
              <div className="truncate">{prevPost.title}</div>
            </div>
          </Link>
        )}
      </div>
      <div className="w-[50%]">
        {typeof nextPost !== "undefined" && (
          <Link href={`${nextPost.url}?${searchParams.toString()}`}>
            <div className="border-2 p-4 border-r-4 rounded-r border-r-black">
              <div className="text-lg font-bold">다음 포스트</div>
              <div className="truncate">{nextPost.title}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PreviousNextPost;
