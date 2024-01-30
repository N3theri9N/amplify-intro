"use client";
import { setFadeOut, setHorizontalFadeInAnimation } from "@/utils/animation";
import { useEffect, useRef } from "react";
import { splashComponentDelay, splashFadeoutTime } from "./loadingControlOption";

export default function Loading(): JSX.Element {
  const gateRef = useRef<HTMLDivElement>(null);

  const delay: number = splashComponentDelay;

  useEffect(() => {
    const sectionRef: HTMLDivElement = gateRef.current as HTMLDivElement;
    const childCollection: NodeListOf<HTMLDivElement> = sectionRef.querySelectorAll(":scope>div");
    childCollection.forEach((target: HTMLDivElement, index: number) => {
      setTimeout(() => {
        setHorizontalFadeInAnimation(target, index);
      }, 500 + delay * index);
    });

    setTimeout(() => {
      setFadeOut(sectionRef);
    }, splashFadeoutTime);
  }, [delay]);

  return (
    <div
      className="text-3xl bg-white dark:bg-slate-900 w-screen h-screen overflow-hidden"
      id="gate"
    >
      <div
        className="flex flex-col gap-y-5 items-center w-full h-full justify-center py-auto"
        ref={gateRef}
      >
        <div className="text-center opacity-0">MY</div>
        <div className="text-center opacity-0">FULLED</div>
        <div className="text-center opacity-0">FRONT END</div>
        <div className="text-center opacity-0">STORY</div>
        <div className="animate-goLeft" />
        <div className="text-center opacity-0 text-base">
          해당 페이지는 1366 x 768 해상도 이상에 맞춰져있습니다.
        </div>
        <div className="animate-goRight" />
      </div>
    </div>
  );
}
