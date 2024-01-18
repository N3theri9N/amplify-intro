"use client";
import { useTheme } from "next-themes";
import * as ToggleSwitch from "./ToggleSwitch";
import React from "react";

const ThemeSwitch = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative h-5">
      <ToggleSwitch.Background theme={theme} setTheme={setTheme} />
      <ToggleSwitch.BackgroundDecoration />
      <ToggleSwitch.Circle theme={theme} />
    </div>
  );
};

export default ThemeSwitch;
