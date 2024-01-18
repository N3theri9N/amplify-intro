import BorderedStarSVG from "../../svg/borderedStar.svg";
import FilledStarSVG from "../../svg/filledStar.svg";
import { useTheme } from "next-themes";
import React, { Dispatch, Fragment, SetStateAction, useRef } from "react";
import Modal from "../UI/Modal";
import Image from "next/image";
import { SkillCardType } from "./skillData";

export const LevelGuage = ({ level }: { level: number }) => {
  const { theme } = useTheme();

  const StarSVG = {
    Filled: (
      <FilledStarSVG className="w-4 h-4 mx-[1px]" fill={theme === "dark" ? "white" : "black"} />
    ),
    Bordered: (
      <BorderedStarSVG className="w-4 h-4 mx-[1px]" fill={theme === "dark" ? "white" : "black"} />
    ),
  };

  const stars = (): JSX.Element => {
    const starArr: boolean[] = [];
    for (let i = 0; i < 10; i++) {
      if (i < level) {
        starArr.push(true);
      } else {
        starArr.push(false);
      }
    }
    return (
      <>
        {starArr.map((starFilled, index) => {
          if (starFilled) {
            if (theme === "dark") {
            }
            return <Fragment key={index}>{StarSVG.Filled}</Fragment>;
          } else {
            return <Fragment key={index}>{StarSVG.Bordered}</Fragment>;
          }
        })}
      </>
    );
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-start">{stars()}</div>
      <div>
        <b>{level}</b> / 10
      </div>
    </div>
  );
};
export const ModalUI = ({
  modal,
  setModal,
  children,
}: {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}) => {
  const detailedCardRef = useRef<HTMLDivElement>(null);
  const onClose = () => {
    setModal(false);
  };

  const stopPropogate = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    innerWidth / 2;
    const degX = (e.pageX - innerWidth / 2) / 10;
    const degY = (e.pageY - innerHeight / 2) / 10;
    if (detailedCardRef.current !== null) {
      detailedCardRef.current.setAttribute(
        "style",
        `transform: 
          perspective(700px) 
          rotateY(${degX}deg) 
          rotateX(${degY}deg)`
      );
    }
  };
  const reset = () => {
    if (detailedCardRef.current !== null) {
      detailedCardRef.current.setAttribute(
        "style",
        `transform: 
          perspective(700px) 
          rotateY(0deg) 
          rotateX(0deg)`
      );
    }
  };

  return (
    <Modal visible={modal} onClose={onClose}>
      <div className="flex h-screen items-center">
        <div
          ref={detailedCardRef}
          className="w-[300px] m-auto h-[500px] rounded-xl bg-white dark:bg-black duration-100"
          onClick={stopPropogate}
          onMouseMove={mouseMoveHandler}
          onMouseOut={reset}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};
export const Details = ({ image, title, description, grade }: SkillCardType): JSX.Element => {
  return (
    <div className="border-2 rounded-xl border-black dark:border-white m-1 h-[492px]">
      <div className="flex flex-col">
        <Image
          className="mx-auto py-1"
          alt={title}
          src={`/img/Logo/${image}`}
          width={100}
          height={0}
          style={{ height: "auto" }}
        />

        <div className="h-[1px] dark:bg-white bg-black"></div>

        <div className="pt-3 px-3">
          <h2>{title}</h2>
          <div>{description}</div>
          <LevelGuage level={grade} />
        </div>
      </div>
    </div>
  );
};
