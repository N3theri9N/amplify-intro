import ThemeSwitch from "../themeSwitch";

const Header = (): JSX.Element => {
  return (
    <header className="w-full fixed dark:bg-[#393939] bg-white-600 shadow-2xl h-10">
      <div className="flex justify-between mx-auto items-center w-[90%] h-full">
        <nav>HEADER</nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
