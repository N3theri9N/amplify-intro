import FolderSVG from "@/svg/VOS/folder.svg";

export const docs = ({ setCellSpace }: { setCellSpace: any }) => {
  const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const allCells: HTMLElement[] = Array.from(document.querySelectorAll(".cell"));
    const droppedCell: HTMLElement = document
      .elementFromPoint(e.clientX, e.clientY)
      ?.closest(".cell") as HTMLElement;
    const toIndex: number = allCells.indexOf(droppedCell);

    const rows = Math.floor(window.innerWidth / 100);
    const cols = Math.floor(window.innerHeight / 100);
    const initCell = new Array(rows * cols).fill(undefined);
    initCell[toIndex] = e.target;
    setCellSpace(initCell);
  };

  return (
    <div className="m-auto bg-opacity-0 bg-white" draggable onDragEnd={onDragEndHandler}>
      <FolderSVG className="w-16 mx-auto h-16" />
      <div className="text-white text-center text-xs stroke-1 stroke-black select-none">파일</div>
    </div>
  );
};
