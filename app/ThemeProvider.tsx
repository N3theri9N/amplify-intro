"use client";
import { ThemeProvider } from "next-themes";
// TODO : 해당 라이브러리를 덜어낸다... globalThis 로 대응할 수 있을지도??
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
