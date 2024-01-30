import clsx from "clsx";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const PAGE_SIZE: number = 10;

function PageComponenet({ totalSize }: { totalSize: number }): JSX.Element {
  const searchParams = useSearchParams();
  const paramPage: string = searchParams.get("page") ?? "0";
  const paramTag: string = searchParams.get("tag") ?? "";
  const totalPage: number = Math.ceil(totalSize / PAGE_SIZE);
  return (
    <div className="px-auto mx-auto flex items-center">
      {new Array(totalPage).fill("").map((_, index) => {
        const page: number = index + 1;
        return (
          <Link
            key={`page_` + page}
            href={{
              pathname: "/blog",
              query: { page: index, tag: paramTag },
            }}
            className={clsx({
              "mx-2 text-sm": index !== parseInt(paramPage),
              "text-xl font-semibold px-1 border-b-2 dark:border-white border-black aria-disabled pointer-events-none":
                index === parseInt(paramPage),
            })}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}

export default PageComponenet;
