import { Company } from "@/types/Company";
import { clsx } from "clsx";
import { ReactNode } from "react";

type Position = "left" | "right";

const Panel = ({
  period,
  className,
  company,
  title,
  subTitle,
  description,
  position = "left",
}: {
  period: string;
  subTitle: ReactNode;
  description?: ReactNode;
  className?: string;
  company: Company;
  title: string;
  position?: Position;
}) => {
  return (
    <div
      className={clsx("border-4 relative p-4 rounded-xl duration-500", {
        className,
        "border-hitchmed dark:border-dark-hitchmed": company === "HITCHMED",
        "border-ntsgreen dark:border-dark-ntsgreen": company === "NTS",
        "right-[30%] text-right": position === "left",
        "left-[30%]": position === "right",
      })}
    >
      <Title company={company}>{title}</Title>
      <Period>{period}</Period>
      <SubTitle company={company}>{subTitle}</SubTitle>
      <div className="w-full">
        <main
          className={clsx("text-sm w-[70%]", {
            "float-right": position === "left",
          })}
        >
          {description}
        </main>
      </div>
    </div>
  );
};

export const Title = ({
  company,
  children,
}: {
  company: Company;
  children: ReactNode;
}): JSX.Element => {
  return (
    <h2
      className={clsx({
        "text-hitchmed dark:text-dark-hitchmed": company === "HITCHMED",
        "text-ntsgreen dark:text-dark-ntsgreen": company === "NTS",
      })}
    >
      {children}
    </h2>
  );
};

export const SubTitle = ({
  company,
  children,
}: {
  company: Company;
  children: ReactNode;
}): JSX.Element => {
  return (
    <h3
      className={clsx({
        "text-hitchmed dark:text-dark-hitchmed": company === "HITCHMED",
        "text-ntsgreen dark:text-dark-ntsgreen": company === "NTS",
      })}
    >
      {children}
    </h3>
  );
};

export const Period = ({ children, className }: { children: string; className?: string }) => {
  return <span className={clsx("text-grey text-sm", className)}>{children}</span>;
};

export default Panel;
