import * as Aside from "@/components/UI/Portal/Aside";
import { FILTERED_POSTS } from "@/app/blog/allPosts";
import Link from "next/link";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

let TAG_ARRAY: { [key: string]: number } = {};
FILTERED_POSTS.forEach((data, index) => {
  TAG_ARRAY[index] = data.length;
});

const TagLists = () => {
  const searchParams = useSearchParams();
  const paramTag: string = searchParams.get("tag") ?? "";
  return (
    <Aside.Left>
      <div className="ml-3 flex justify-end">
        <div></div>
        <div className="text-left border-t-2 border-b-2 p-4">
          <div className="text-xl border-b-4 p-2">Tags</div>
          <div className="p-2">
            {Object.keys(TAG_ARRAY).map((tag) => {
              return (
                <div key={tag}>
                  <Link
                    href={{
                      pathname: "/blog",
                      query: {
                        tag,
                      },
                    }}
                    className={clsx("text-lg w-auto my-1", {
                      "text-sky-500": tag === paramTag,
                    })}
                  >
                    {tag.length > 0 ? tag : "ALL"} ({TAG_ARRAY[tag]})
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Aside.Left>
  );
};
export default TagLists;
