import Link from "next/link";
import ThemeSwitch from "../themeSwitch";

const Header = (): JSX.Element => {
  return (
    <header className="z-10 w-full fixed dark:bg-[#393939] duration-500 bg-lightgry shadow-2xl h-10 animate-fadeIn">
      <div className="flex justify-between mx-auto items-center w-[90%] h-full">
        <nav>
          <Link
            href="https://nnea5215.notion.site/47d67ae7f4b34c7aa8ed52aacf8d65f2?pvs=4"
            target="_blank"
          >
            비하인드
          </Link>
        </nav>
        <nav>MY FULLED FRONT END STORY</nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
