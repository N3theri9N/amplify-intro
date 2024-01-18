import useEnterSection from "@/app/hooks/useEnterSection";
import { clsx } from "clsx";
import { ReactNode, useEffect, useRef } from "react";

export const IntroSection = (): JSX.Element => {
  const gateRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: gateRef, delay: 500 });
  return (
    <Section className="text-3xl" id="gate">
      <div
        className="flex flex-col items-center w-full h-full justify-center py-auto"
        ref={gateRef}
      >
        <div className="opacity-0 text-center">FRONTEND DEVELOPER</div>
        <div className="opacity-0 text-center">INTRODUCTION</div>
      </div>
    </Section>
  );
};

export const BlueSection = (): JSX.Element => {
  const introduceRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: introduceRef, delay: 500 });
  return (
    <Section className="text-lg">
      <div ref={introduceRef} className="flex flex-col items-center w-full h-full justify-between">
        <div className="opacity-0">
          <h1 className="text-3xl">THIS IS ME</h1>
        </div>
        <div className="opacity-0">NAME</div>
      </div>
    </Section>
  );
};
export const WhiteSection = (): JSX.Element => {
  return <Section className="text-lg">PAGE 2</Section>;
};
export const RedSection = (): JSX.Element => {
  return (
    <Section className="text-lg">
      <div>
        <h1 className="text-3xl">기술스택</h1>
      </div>
      <div>
        <div>JAVASCRIPT</div>
      </div>
    </Section>
  );
};

export const SkillSection = (): JSX.Element => {
  return <Section className="">PAGE 3</Section>;
};

const Section = ({
  children,
  id,
  className,
}: {
  children?: ReactNode;
  id?: string;
  className?: string;
}): JSX.Element => {
  return (
    <section
      id={id}
      className={clsx(
        `p-20 snap-start h-screen w-screen bg-white dark:bg-black duration-300 transition-[background-color_0.3s] ${className}`
      )}
    >
      {children}
    </section>
  );
};
