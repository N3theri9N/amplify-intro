import { clsx } from "clsx";
import { ReactNode } from "react";

export const BlueSection = (): JSX.Element => {
  return (
    <Section className="text-lg">
      <h1 className="text-3xl">자기소개</h1>
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
  className,
}: {
  children?: ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <section
      className={clsx(
        `p-20 snap-start h-screen w-screen bg-lightgry dark:bg-black duration-300 transition-[background-color_0.3s] ${className}`
      )}
    >
      {children}
    </section>
  );
};
