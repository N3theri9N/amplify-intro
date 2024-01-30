import { useCallback, useState } from "react";

const useTOC = () => {
  const [headData, setHeadData] = useState<{ nodeName: string; text: string }[]>([]);
  const [activedIndex, setActivedIndex] = useState<number>(0);
  const nodeSearcher = useCallback((node: HTMLDivElement) => {
    if (node == null) {
      return;
    }
    const sections: NodeListOf<HTMLHeadElement> = node.querySelectorAll("h1,h2,h3");
    const headArray: HTMLHeadElement[] = Array.from(sections);

    setHeadData(
      headArray.map((node: HTMLHeadElement) => {
        return { nodeName: node.nodeName, text: node.id };
      })
    );
    const offsetTopArr = [...headArray.map((node) => node.offsetTop)];

    window.addEventListener("scroll", () => {
      const scrollY: number = window.scrollY + 5;
      const aheadHeaders: number[] = offsetTopArr.filter((top) => top <= scrollY) ?? [];
      const scrollIndex = aheadHeaders.length;
      setActivedIndex(Math.max(scrollIndex - 1, 0));
    });
  }, []);

  return { headData, activedIndex, nodeSearcher };
};
export default useTOC;
