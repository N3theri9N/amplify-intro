"use client";
import { useTheme } from "next-themes";
import * as ToggleSwitch from "./ToggleSwitch";
import React from "react";

const ThemeSwitch = (): JSX.Element => {
  const { theme, setTheme, systemTheme } = useTheme();
  const getSystemTheme = (theme: string | undefined) => {
    if (theme === "system") {
      return systemTheme;
    } else {
      return theme;
    }
  };
  return (
    <div className="relative h-5">
      <ToggleSwitch.Background theme={getSystemTheme(theme)} setTheme={setTheme} />
      <ToggleSwitch.BackgroundDecoration />
      <ToggleSwitch.Circle theme={getSystemTheme(theme)} />
    </div>
  );
};

export default ThemeSwitch;
