import useEnterSection from "@/app/hooks/useEnterSection";
import { clsx } from "clsx";
import { ReactNode, useRef } from "react";
import SkillCards from "../SkillCards";
import { Period } from "../UI/Template/Label";
import Panel from "@/components/UI/Template/Panel";

export const IntroSection = (): JSX.Element => {
  const introduceRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: introduceRef, delay: 500 });
  return (
    <Section className="text-lg" id="intro">
      <div
        ref={introduceRef}
        className="grid grid-cols-2 gap-4 flex-col w-full h-full justify-between"
      >
        <div className="opacity-0">
          <h1>THIS IS ME</h1>
          <div className="border-2 relative dark:border-white border-black p-4 rounded-xl">
            <h2>프로필</h2>
          </div>
        </div>

        <div />

        <div className="border-2 relative dark:border-white border-black p-4 rounded-xl opacity-0 text-right">
          <h2>나의 강점</h2>
        </div>
        <div className="border-2 relative dark:border-white border-black p-4 rounded-xl opacity-0">
          <h2>커뮤니케이션 능력</h2>
        </div>
        <div className="border-2 relative dark:border-white border-black p-4 rounded-xl opacity-0 text-right">
          <h2>지금까지 해온 일 요약</h2>
        </div>
        <div className="border-2 relative dark:border-white border-black p-4 rounded-xl opacity-0">
          <h2>인사이트 보유</h2>
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
        <Panel company="HITCHMED" position="right" title="회사A">
          <Period>2023.06 ~ 2024.01</Period>
        </Panel>
        <Panel company="NTS" position="left" title="회사B">
          <Period>2017.07 ~ 2022.06</Period>
        </Panel>
      </div>
    </Section>
  );
};

export const ProjectSection = (): JSX.Element => {
  const projectRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: projectRef, delay: 300 });
  return (
    <Section className="text-lg">
      <div ref={projectRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>PROJECTS</h1>
        </div>
        <Panel company="HITCHMED" position="right" title="프로젝트 A1">
          <Period>2023.09 ~ 2023.12</Period>
        </Panel>
        <Panel company="HITCHMED" position="left" title="프로젝트 A2">
          <Period>2023.06 ~ 2024.01</Period>
        </Panel>
        <Panel company="NTS" position="right" title="프로젝트 B1">
          <Period>2022.01 ~ 2022.06</Period>
        </Panel>
      </div>
    </Section>
  );
};

export const ProjectSectionSecond = (): JSX.Element => {
  const projectRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: projectRef, delay: 300 });
  return (
    <Section className="text-lg">
      <div ref={projectRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>PROJECTS</h1>
        </div>
        <Panel company="NTS" position="right" title="프로젝트 B2">
          <Period>2017.07 ~ 2022.06</Period>
        </Panel>
        <Panel company="NTS" position="left" title="프로젝트 B3">
          <Period>2017.07 ~ 2022.06</Period>
        </Panel>
        <Panel company="NTS" position="right" title="프로젝트 B4">
          <Period>2017.07 ~ 2021.12</Period>
        </Panel>
      </div>
    </Section>
  );
};

export const SkillSection = (): JSX.Element => {
  const skillRef = useRef<HTMLDivElement>(null);
  useEnterSection({ ref: skillRef, delay: 300 });
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
        `py-32 px-16 snap-start overflow-x-hidden h-screen w-screen bg-white dark:bg-gray-900 duration-300 transition-[background-color_0.3s] ${className}`
      )}
    >
      {children}
    </section>
  );
};
