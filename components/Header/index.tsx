import ThemeSwitch from "../themeSwitch";

const Header = (): JSX.Element => {
  return (
    <header className="z-10 w-full fixed dark:bg-[#393939] bg-lightgry shadow-2xl h-10">
      <div className="flex justify-between mx-auto items-center w-[90%] h-full">
        <nav>비하인드</nav>
        <nav>MY FULLED FRONT END STORY</nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
