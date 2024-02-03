"use client";
import { useCallback, useState } from "react";
import * as Icon from "./Icons";

const GRID_SIDE = "100px";

const VOSHome = () => {
  const [cellSpace, setCellSpace] = useState<(JSX.Element | undefined)[]>([]);

  const fillDivElements = useCallback((node: HTMLDivElement) => {
    if (node === null) {
      return;
    }
    const rows = Math.floor(node.clientWidth / 100);
    const cols = Math.floor(node.clientHeight / 100);
    const initCell = new Array(rows * cols).fill(undefined);
    initCell[0] = <Icon.docs setCellSpace={setCellSpace} />;

    setCellSpace(initCell);
  }, []);

  console.log(cellSpace);

  return (
    <>
      <div
        id="background"
        className={`w-full h-full grid grid-rows-[repeat(auto-fill,${GRID_SIDE})] grid-cols-[repeat(auto-fill,${GRID_SIDE})]`}
        onDragOver={(e) => {
          e.preventDefault();
          return false;
        }}
        ref={fillDivElements}
      >
        {cellSpace.map((icon, index) => {
          const hasIcon: boolean = typeof icon !== "undefined";
          return (
            <div key={index} className="cell py-5">
              {hasIcon && icon}
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 bg-[#B6BBB7] h-10 w-full border-t-4 border-white"></div>
    </>
  );
};
export default VOSHome;

// const droppedPoster: HTMLElement = document
//       .elementFromPoint(e.clientX, e.clientY)
//       ?.closest("article") as HTMLElement;
