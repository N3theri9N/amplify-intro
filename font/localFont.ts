import localFont from "next/font/local";

export const stardust = localFont({
  src: [
    {
      path: "../font/stardust.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/stardust-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const suit = localFont({
  src: [
    {
      path: "./suit.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});
