import clsx from "clsx";
import Link from "next/link";

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
    <div className="left-0 fixed w-full flex">
      <div className="relative mx-auto w-full max-w-[800px]">
        <div className="absolute left-[800px]">
          <aside className="rounded-xl border-1 w-auto max-w-[300px] max-h-[80vh] bg-white overflow-y-auto border-2 p-4">
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
        </div>
      </div>
    </div>
  );
};

export default AsideMenu;
