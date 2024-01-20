import Image from "next/image";
import { cardData, SkillCardType } from "./skillData";
import * as CardCompoent from "./CardComponents";
import React, { useState } from "react";

const SkillCards = (): JSX.Element => {
  return (
    <div className="grid grid-cols-4 gap-1 grid-rows-[repeat(3,minmax(210px,auto))] min-h-[75vh]">
      {cardData.map((data: SkillCardType) => {
        return (
          <div key={data.title} className="my-auto">
            <Card {...data} />
          </div>
        );
      })}
    </div>
  );
};

const Card = (props: SkillCardType) => {
  const [modal, setModal] = useState<boolean>(false);
  const { title, image, grade } = props;
  const onClickHandler = () => {
    setModal(true);
  };

  return (
    <>
      <div
        className="border-2 border-black dark:border-white duration-500 w-full mx-auto max-w-[250px] rounded-xl p-2 cursor-zoom-in"
        onClick={onClickHandler}
        tabIndex={2}
      >
        <Image
          className="mx-auto"
          alt={title}
          src={`/img/Logo/${image}`}
          width={100}
          height={100}
        />
        <div className="h-[1px] dark:bg-white bg-black"></div>
        <div className="pt-3">
          <h2>{title}</h2>
          <CardCompoent.LevelGuage level={grade} />
        </div>
      </div>
      <CardCompoent.ModalUI {...{ modal, setModal }}>
        <CardCompoent.Details {...props} />
      </CardCompoent.ModalUI>
    </>
  );
};

export default SkillCards;
