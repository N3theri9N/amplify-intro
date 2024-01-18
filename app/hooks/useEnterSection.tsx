"use client";
import { RefObject, useEffect } from "react";

const useEnterSection = ({
  ref,
  delay = 0,
}: {
  ref: RefObject<HTMLDivElement>;
  delay?: number;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const opacity = ["opacity-0"];
        const animationClass = ["animate-fadeIn", "duration-500"];
        const goLeftClass = ["animate-goLeft"];
        const goRightClass = ["animate-goRight"];
        const targetCollection: NodeListOf<HTMLDivElement> =
          entries[0].target.querySelectorAll("div");

        targetCollection.forEach((entry: HTMLDivElement, index: number) => {
          const entryTargetClass = entry.classList;
          if (entries[0].isIntersecting) {
            setTimeout(() => {
              entryTargetClass.remove(...opacity);
              if (index % 2 === 0) {
                entryTargetClass.add(...animationClass, ...goLeftClass);
              } else {
                entryTargetClass.add(...animationClass, ...goRightClass);
              }
            }, 500 + delay * index);
          } else {
            entryTargetClass.remove(...animationClass, ...goRightClass, ...goLeftClass);
            entryTargetClass.add(...opacity);
          }
        });
      },
      { threshold: 0.95 }
    );

    const sectionRef: HTMLElement = ref.current as HTMLElement;

    // targetCollection.forEach((target) => {
    observer.observe(sectionRef);
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEnterSection;
