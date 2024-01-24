import Link from "next/link";
import ThemeSwitch from "../themeSwitch";

const Header = (): JSX.Element => {
  return (
    <header className="z-10 w-full fixed dark:bg-[#393939] duration-500 bg-lightgry shadow-2xl h-10 animate-fadeIn">
      <div className="flex justify-between mx-auto items-center w-[90%] h-full">
        <nav className="flex gap-x-2">
          <Link className="hover:underline" href="/blog/47d67ae7f4b34c7aa8ed52aacf8d65f2">
            제작 비하인드
          </Link>
          <Link className="hover:underline" href="/blog">
            BLOG
          </Link>
        </nav>
        <nav>MY FULLED FRONT END STORY</nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
