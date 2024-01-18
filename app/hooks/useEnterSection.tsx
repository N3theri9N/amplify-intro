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
    const invisible = ["opacity-0"];
    const animationClass = ["animate-fadeIn", "duration-500"];
    const goLeftClass = ["animate-goLeft"];
    const goRightClass = ["animate-goRight"];

    const setInvisible = (target: HTMLDivElement) => {
      target.classList.remove(...animationClass, ...goRightClass, ...goLeftClass);
      target.classList.add(...invisible);
    };

    const setHorizontalFadeInAnimation = (target: HTMLDivElement, index: number) => {
      target.classList.remove(...invisible);
      if (index % 2 === 0) {
        target.classList.add(...animationClass, ...goLeftClass);
      } else {
        target.classList.add(...animationClass, ...goRightClass);
      }
    };

    const promises: any = [];

    const createPromise = (target: HTMLDivElement, index: number): Promise<""> => {
      return new Promise((res) => {
        setTimeout(() => {
          setHorizontalFadeInAnimation(target, index);
          res("");
        }, 500 + delay * index);
      });
    };

    const observer = new IntersectionObserver(
      async (entries: IntersectionObserverEntry[]) => {
        const sectionEl = entries[0];
        const childTarget: NodeListOf<HTMLDivElement> =
          sectionEl.target.querySelectorAll(":scope>div");
        if (sectionEl.isIntersecting) {
          childTarget.forEach((target: HTMLDivElement, index: number) => {
            promises.push(createPromise(target, index));
          });
        } else {
          await Promise.all(promises);
          childTarget.forEach((target: HTMLDivElement) => {
            setInvisible(target);
          });
        }
      },
      { threshold: 0.95 }
    );

    const sectionRef: HTMLElement = ref.current as HTMLElement;
    const childCollection: NodeListOf<HTMLDivElement> = sectionRef.querySelectorAll(":scope>div");
    childCollection.forEach((target: HTMLDivElement) => {
      setInvisible(target);
    });

    observer.observe(sectionRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEnterSection;
