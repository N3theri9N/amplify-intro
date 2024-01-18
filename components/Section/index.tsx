import useEnterSection from "@/app/hooks/useEnterSection";
import { clsx } from "clsx";
import { ReactNode, useRef } from "react";
import SkillCards from "../SkillCards";

export const GateSection = (): JSX.Element => {
  const gateRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: gateRef, delay: 300 });
  return (
    <Section className="text-3xl" id="gate">
      <div
        className="flex flex-col gap-y-5 items-center w-full h-full justify-center py-auto"
        ref={gateRef}
      >
        <div className="text-center">MY</div>
        <div className="text-center">FRONTEND</div>
        <div className="text-center">DEVELOPER</div>
        <div className="text-center">STORY</div>
      </div>
    </Section>
  );
};

export const IntroSection = (): JSX.Element => {
  const introduceRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: introduceRef, delay: 100 });
  return (
    <Section className="text-lg" id="intro">
      <div ref={introduceRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>THIS IS ME</h1>
        </div>
        <div className="border-2 relative left-[30%] dark:border-white border-black p-4 rounded-xl">
          <h2>NAME</h2>
        </div>
        <div className="border-2 relative right-[30%] dark:border-white border-black p-4 rounded-xl">
          <h2 className="text-right">NAME</h2>
        </div>
      </div>
    </Section>
  );
};
export const CareerSection = (): JSX.Element => {
  const careerRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: careerRef, delay: 100 });
  return (
    <Section className="text-lg">
      <div ref={careerRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>CAREERS</h1>
        </div>
        <div className="border-2 relative left-[30%] dark:border-white border-black p-4 rounded-xl">
          <h2>NAME</h2>
        </div>
        <div className="border-2 relative right-[30%] dark:border-white border-black p-4 rounded-xl">
          <h2 className="text-right">NAME</h2>
        </div>
      </div>
    </Section>
  );
};
export const ProjectSection = (): JSX.Element => {
  const projectRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: projectRef, delay: 100 });
  return (
    <Section className="text-lg">
      <div ref={projectRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>PROJECTS</h1>
        </div>
        <div className="border-2 relative left-[30%] dark:border-white border-black p-4 rounded-xl">
          <h2>NAME</h2>
        </div>
      </div>
    </Section>
  );
};

export const SkillSection = (): JSX.Element => {
  const skillRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: skillRef, delay: 100 });
  return (
    <Section>
      <div ref={skillRef}>
        <div>
          <h1>MY SKILL CARDS</h1>
        </div>
        <SkillCards />
      </div>
    </Section>
  );
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
        `p-20 snap-start overflow-x-hidden h-screen w-screen bg-white dark:bg-black duration-300 transition-[background-color_0.3s] ${className}`
      )}
    >
      {children}
    </section>
  );
};
