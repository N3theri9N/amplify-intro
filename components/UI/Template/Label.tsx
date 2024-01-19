import { clsx } from "clsx";

export const Period = ({ children, className }: { children: string; className?: string }) => {
  return <span className={clsx("text-grey text-sm", className)}>{children}</span>;
};
