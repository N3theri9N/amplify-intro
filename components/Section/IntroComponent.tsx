import LinkButton from "@/components/UI/Template/LinkButton";

import style from "./introSection.module.css";
import DeveloperSVG from "@/svg/developer.svg";

import { useTheme } from "next-themes";
import Link from "next/link";
import Panel from "../UI/Template/Panel";
export const Blank = () => {
  return <div className="col-[span_2] h-0"></div>;
};
export const MyProfile = () => {
  return (
    <div className="flex flex-col w-[80%] gap-2 border-t-2 border-b-2 dark:border-white border-black p-4 opacity-0">
      <h2>DO-YOON KIM</h2>
      <h3>FRONT END DEVELOPER</h3>
      <div>E-mail : nnea5215@gmail.com</div>
      <div className="flex gap-x-2">
        <span>Link:</span>
        <LinkButton href="https://github.com/N3theri9N" target="_blank">
          git
        </LinkButton>
        <LinkButton
          href="https://nnea5215.notion.site/nnea5215/882d97d198f44902adfb1c48ef21055c"
          target="_blank"
        >
          Notion
        </LinkButton>
        <LinkButton
          href="https://docs.google.com/document/d/1t55DCLkIJ42rbnxbMYThunXZhvl6qfgwBCu5h2MYxco/edit?usp=sharing"
          target="_blank"
        >
          Resume
        </LinkButton>
      </div>
    </div>
  );
};

export const Summary = () => {
  return (
    <div
      className={`flex flex-col gap-2 text-base border-2 rounded-xl border-black dark:border-white p-2 mx-4 ${style.caption} relative opacity-0`}
    >
      <div>1. NextJS 기반 프론트엔드 개발자.</div>
      <div>
        2. UI/UX/DX 개선, 접근성, 디자인 시스템 등등 다양한 방법으로 프로젝트 고도화/최적화.
      </div>
      <div>3. 운영과 개발 프로세스의 향상을 항상 고민하며 운영과 생산성을 지속적으로 개선.</div>
      <div>
        4. 풀스택 개발 경험과 마케터간 협업 경험으로 개발팀 내외적인 커뮤니케이션 능력 보유.
      </div>
    </div>
  );
};

export const DeveloperIcon = () => {
  const { theme } = useTheme();
  return (
    <div className="col-[span_2] relative border-black dark:border-white border-b-2 h-16">
      <DeveloperSVG
        className="h-16 absolute left-[calc(50%-45px)] bottom-0"
        fill={theme === "dark" ? "white" : "black"}
      />
    </div>
  );
};

export const CareersSector = () => {
  return (
    <>
      {" "}
      <div className="col-[span_2] my-auto">
        <Panel
          company="HITCHMED"
          title="HITCHMED"
          period="2023.06 ~ 2024.01 ( 8 Months )"
          subTitle="현지 여행객의 병원 예약과 증상문진 기능을 제공하는 헬스케어 이지닥 애플리케이션 제작"
          position="left"
          description={
            <>
              <p>
                url :
                <Link target="_blank" href="https://easy-doc.app">
                  https://easy-doc.app
                </Link>
              </p>
              <p>프로젝트 매니저 / 프론트엔드 개발자</p>
            </>
          }
        />
      </div>
      <div className="col-[span_2] my-auto">
        <Panel
          company="NTS"
          title="N TECH SERVICE"
          className="h-[calc(100%-20px)] relative bottom-0"
          period="2017.07 ~ 2022.06 ( 5 Years )"
          position="right"
          subTitle={
            <p>
              네이버 자회사로 본사 마케팅 업무의 페이지 제작을 지원.
              <br /> 웹서비스 개발실에서는 네이버 프로모션에 사용될 페이지 개발업무를 진행.
            </p>
          }
          description={"웹서비스 개발실 / 풀스택 개발자"}
        />
      </div>
    </>
  );
};
