import Image from "next/image";
import { cardData, SkillCardType } from "./skillData";
import * as CardCompoent from "./CardComponents";
import React, { useState } from "react";

const SkillCards = (): JSX.Element => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {cardData.map((data: SkillCardType) => {
        return <Card key={data.title} {...data} />;
      })}
    </div>
  );
};

const Card = ({ image, title, description, grade }: SkillCardType) => {
  const [modal, setModal] = useState<boolean>(false);

  const onClickHandler = () => {
    setModal(true);
  };

  return (
    <>
      <div
        className="border-2 border-black dark:border-white w-full mx-auto max-w-[250px] rounded-xl p-2 cursor-zoom-in"
        onClick={onClickHandler}
      >
        <Image
          className="mx-auto py-1"
          alt={title}
          src={`/img/Logo/${image}`}
          width={100}
          height={0}
          style={{ height: "auto" }}
        />
        <div className="h-[1px] dark:bg-white bg-black"></div>
        <div className="pt-3">
          <h2>{title}</h2>
          <div>{description}</div>
          <CardCompoent.LevelGuage level={grade} />
        </div>
      </div>
      <CardCompoent.ModalUI {...{ modal, setModal }}>
        <CardCompoent.Details {...{ image, title, description, grade }} />
      </CardCompoent.ModalUI>
    </>
  );
};

export default SkillCards;
