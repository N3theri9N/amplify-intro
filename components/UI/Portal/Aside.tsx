import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Left = ({ children }: { children: ReactNode }) => {
  const [rendered, setRendered] = useState<boolean>(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  return rendered ? (
    ReactDOM.createPortal(children, document.getElementById("LeftAside") as HTMLDivElement)
  ) : (
    <></>
  );
};

export const Right = ({ children }: { children: ReactNode }) => {
  const [rendered, setRendered] = useState<boolean>(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  return rendered ? (
    ReactDOM.createPortal(children, document.getElementById("RightAside") as HTMLDivElement)
  ) : (
    <></>
  );
};
