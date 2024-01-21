"use client";
import { RefObject, useEffect } from "react";
import { setHorizontalFadeInAnimation, setFadeOut } from "@/utils/animation";

const useEnterSection = ({
  ref,
  delay = 0,
}: {
  ref: RefObject<HTMLDivElement>;
  delay?: number;
}) => {
  useEffect(() => {
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
            setFadeOut(target);
          });
        }
      },
      { threshold: 0.8 }
    );

    const sectionRef: HTMLElement = ref.current as HTMLElement;
    const childCollection: NodeListOf<HTMLDivElement> = sectionRef.querySelectorAll(":scope>div");
    childCollection.forEach((target: HTMLDivElement) => {
      setFadeOut(target);
    });

    observer.observe(sectionRef);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEnterSection;
