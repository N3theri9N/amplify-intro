"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const ThemeProviderComp = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return <></>;
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderComp;
