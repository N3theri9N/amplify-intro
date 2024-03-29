import NotionSVG from "@/svg/notion.svg";
import GithubSVG from "@/svg/github.svg";
import Link from "next/link";

const BlogFooter = () => {
  const linkData = [
    {
      label: "github",
      icon: <GithubSVG className="h-full w-auto" />,
      href: "https://github.com/N3theri9N",
    },
    {
      label: "notion",
      icon: <NotionSVG className="h-full w-auto" />,
      href: "https://nnea5215.notion.site/882d97d198f44902adfb1c48ef21055c?v=10b444ccba2d45179113f7a0cba1b0bc",
    },
  ];

  return (
    <div className="h-72 flex flex-col justify-around border-t-[1px] py-8 border-black/50 dark:border-white">
      <div className="text-center w-full">Reversed hp Blog</div>
      <div className="text-center w-full h-10 flex justify-center gap-4">
        {linkData.map((link) => (
          <Link aria-label={link.label} key={link.label} href={link.href} target="_blank">
            {link.icon}
          </Link>
        ))}
      </div>
      <div className="text-center w-full">
        <div>Powered by NextJS & ContentLayer</div>
        <div>Since. Janurary 2024</div>
      </div>
    </div>
  );
};
export default BlogFooter;
