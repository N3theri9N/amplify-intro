import React, { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
const Modal = ({
  visible,
  onClose,
  children,
}: {
  visible: boolean;
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: ReactNode;
}) => {
  if (visible) {
    return ReactDOM.createPortal(
      <div
        id="backdrop"
        onClick={onClose}
        className="z-30 fixed top-0 h-screen w-screen dark:bg-white/50 bg-black/50"
      >
        {children}
      </div>,
      document.querySelector("#modal") as HTMLElement
    );
  } else {
    return <></>;
  }
};

export default Modal;
