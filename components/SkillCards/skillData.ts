export type SkillCardType = {
  image: string;
  title: string;
  description: string;
  grade: number;
};

export const cardData: SkillCardType[] = [
  {
    image: "JavaScript.svg",
    title: "JavaScript",
    description: "자바스크립트",
    grade: 7,
  },
  {
    image: "TypeScript.svg",
    title: "TypeScript",
    description: "타입스크립트",
    grade: 5,
  },
  {
    image: "ReactJS.svg",
    title: "React",
    description: "리액트",
    grade: 7,
  },
  {
    image: "NextJS.svg",
    title: "NextJS",
    description: "넥스트 프레임워크",
    grade: 7,
  },
  {
    image: "Css.svg",
    title: "CSS",
    description: "씨에스에스",
    grade: 5,
  },
];
