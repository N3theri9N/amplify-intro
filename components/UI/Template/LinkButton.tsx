import Link from "next/link";

const LinkButton = ({
  href = "#",
  target,
  children,
}: {
  href?: string;
  target?: string;
  children: string;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className="px-1 border-[1px] dark:border-white border-black rounded shadow-md"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
