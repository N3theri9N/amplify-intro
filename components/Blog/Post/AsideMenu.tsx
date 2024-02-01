import clsx from "clsx";
import Link from "next/link";
import * as Aside from "@/components/UI/Portal/Aside";

const AsideMenu = ({
  headData,
  activedIndex = 0,
}: {
  headData: { nodeName: string; text: string }[];
  activedIndex?: number;
}) => {
  if (headData.length === 0) {
    return <></>;
  }

  return (
    <Aside.Right>
      <aside className="rounded-xl fixed border-1 w-auto max-w-[300px] max-h-[80vh] bg-white dark:bg-slate-900 overflow-y-auto border-2 p-4">
        {headData.map((node, index) => {
          return (
            <div key={`aside_${index}`}>
              <Link
                href={`#${node.text}`}
                replace={true}
                className={clsx("w-auto text-nowrap text-ellipsis text-sm", {
                  "pl-4": node.nodeName === "H2",
                  "pl-8": node.nodeName === "H3",
                  "text-sky-500": index == activedIndex,
                })}
              >
                {`${node.text.replace(/-/g, " ")}`}
              </Link>
            </div>
          );
        })}
      </aside>
    </Aside.Right>
  );
};

export default AsideMenu;
