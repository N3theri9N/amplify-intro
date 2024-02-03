import React from "react";

export default function VOSLayout({ children }: { children: React.ReactNode }) {
  return <div className="w-screen h-screen bg-[#008776]">{children}</div>;
}
