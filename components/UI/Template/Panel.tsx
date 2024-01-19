import { Company } from "@/types/Company";
import { clsx } from "clsx";
import { ReactNode } from "react";

type Position = "left" | "right";

const Panel = ({
  children,
  className,
  company,
  title,
  position = "left",
}: {
  children: ReactNode;
  className?: string;
  company: Company;
  title: string;
  position?: Position;
}) => {
  return (
    <div
      className={clsx("border-4 relative p-4 rounded-xl", {
        className,
        "border-hitchmed dark:border-dark-hitchmed": company === "HITCHMED",
        "border-ntsgreen dark:border-dark-ntsgreen": company === "NTS",
        "right-[30%] text-right": position === "left",
        "left-[30%]": position === "right",
      })}
    >
      <Title company={company}>{title}</Title>
      {children}
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

export default Panel;
