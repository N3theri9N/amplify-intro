import SparkleSVG from "@/svg/sparkle.svg";
import CloudSVG from "@/svg/cloud.svg";
import { clsx } from "clsx";

export const Background = ({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}): JSX.Element => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <input
      type="checkbox"
      id={`toggleSwitch`}
      checked={theme === "dark"}
      onChange={onChangeHandler}
      className="peer cursor-pointer appearance-none relative bg-grey-300 rounded-[10px] bg-blue-500 checked:bg-black w-10 h-5 transition-[background-color_0.3s] duration-300"
      aria-label={`toggleswitch`}
    />
  );
};

export const BackgroundDecoration = (): JSX.Element => {
  return (
    <>
      <SparkleSVG className="absolute w-3 h-3 left-1 bottom-1 pointer-events-none" />
      <CloudSVG className="absolute w-3 h-3 right-1.5 bottom-1 pointer-events-none" />
    </>
  );
};

export const Circle = ({ theme }: { theme: string | undefined }): JSX.Element => {
  // console.log(theme);
  return (
    <label
      htmlFor={`toggleSwitch`}
      className={clsx(
        "cursor-pointer absolute bottom-0.5 left-[1.5px] transition-[transform_0.5s] peer-checked:translate-x-5 duration-500 -translate-x-0 [&>input:checked]:translate-x-5 h-4 w-4 inline-block rounded-full",
        {
          "bg-yellow-300": theme === "dark",
          "bg-yellow-100": theme === "light",
        }
      )}
    ></label>
  );
};
