import { Company } from "@/types/Company";
import { clsx } from "clsx";
import { ReactNode } from "react";

type Position = "left" | "right" | "center";

const Panel = ({
  period,
  className,
  company,
  title,
  subTitle,
  description,
  position = "center",
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
      className={clsx(`border-4 relative rounded-xl opacity-0 duration-500 ${className}`, {
        "border-hitchmed dark:border-dark-hitchmed": company === "HITCHMED",
        "border-ntsgreen dark:border-dark-ntsgreen": company === "NTS",
        "right-[30%] text-right": position === "left",
        "left-[30%]": position === "right",
      })}
    >
      <Title company={company}>{title}</Title>
      <div className="px-4">
        <Period>{period}</Period>
        <SubTitle company={company}>{subTitle}</SubTitle>
        <div className="w-full float-right mb-4">
          <main
            className={clsx("text-sm w-[70%]", {
              "relative left-[30%]": position === "left",
            })}
          >
            {description}
          </main>
        </div>
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
      className={clsx("py-1 px-2 text-white dark:text-black", {
        "bg-hitchmed dark:bg-dark-hitchmed": company === "HITCHMED",
        "bg-ntsgreen dark:bg-dark-ntsgreen": company === "NTS",
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
