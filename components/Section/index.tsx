import useEnterSection from "@/hooks/useEnterSection";
import { clsx } from "clsx";
import { ReactNode, useCallback, useRef } from "react";
import SkillCards from "../SkillCards";
import Panel from "@/components/UI/Template/Panel";
import Link from "next/link";
import * as IntroComponent from "./IntroComponent";
import { fadeInOutApplier } from "@/utils/animation";

export const IntroSection = (): JSX.Element => {
  const introduceRef = useCallback(fadeInOutApplier(50), []);
  // const introduceRef = useRef<HTMLDivElement>(null);
  // useEnterSection({ ref: introduceRef, delay: 50 });
  return (
    <Section className="text-lg" id="intro">
      <div
        ref={introduceRef}
        className="grid grid-cols-2 grid-rows-[auto_0_auto_auto_auto_1fr_1fr] gap-x-4 h-[calc(100vh-128px)]"
      >
        <div className="col-[span_2] opacity-0">
          <h1>THIS IS ME</h1>
        </div>
        <IntroComponent.Blank />
        <IntroComponent.MyProfile />
        <IntroComponent.Summary />
        <IntroComponent.DeveloperIcon />
        <div className="col-[span_2] mt-1 opacity-0">
          <h1>CAREERS</h1>
        </div>
        <IntroComponent.CareersSector />
      </div>
    </Section>
  );
};
export const CareerSection = (): JSX.Element => {
  const careerRef = useCallback(fadeInOutApplier(100), []);
  // const careerRef = useRef<HTMLDivElement>(null);
  // useEnterSection({ ref: careerRef, delay: 100 });
  return (
    <Section className="text-lg">
      <div ref={careerRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>CAREERS</h1>
        </div>
        <Panel
          company="HITCHMED"
          position="right"
          title="HITCHMED"
          period="2023.06 ~ 2024.01 ( 8 Months )"
          subTitle="현지 여행객의 병원 예약과 증상문진 기능을 제공하는 헬스케어 이지닥 애플리케이션 제작"
          description={
            <>
              <div>
                url :
                <Link target="_blank" href="https://easy-doc.app">
                  https://easy-doc.app
                </Link>
              </div>
              <div>프로젝트 매니저 / 프론트엔드 개발자</div>
            </>
          }
        />
        <Panel
          company="NTS"
          position="left"
          title="N TECH SERVICE"
          period="2017.07 ~ 2022.06 ( 5 Years )"
          subTitle={
            <div>
              네이버 자회사로 본사 마케팅 업무의 페이지 제작을 지원.
              <br /> 웹서비스 개발실에서는 네이버 프로모션에 사용될 페이지 개발업무를 진행.
            </div>
          }
          description={"웹서비스 개발실 / 풀스택 개발자"}
        ></Panel>
      </div>
    </Section>
  );
};

export const ProjectSection = (): JSX.Element => {
  const projectRef = useCallback(fadeInOutApplier(300), []);
  // const projectRef = useRef<HTMLDivElement>(null);
  // useEnterSection({ ref: projectRef, delay: 300 });
  return (
    <Section className="text-lg">
      <div ref={projectRef} className="flex flex-col w-full h-full justify-between ">
        <div>
          <h1>PROJECTS</h1>
        </div>
        <Panel
          company="HITCHMED"
          position="right"
          title="증상문진"
          period="2023.09 ~ 2023.12"
          subTitle="연속되는 증상 질문을 답변하여 어떤 증상인지 파악하는 이지닥의 주요 기능."
          description={
            <>
              API 데이터를 기반으로 여러 유형의 질문 폼 생성하고 이를 연속적인 질문 답변하는 기능을
              구현하여 증상문진 기능을 제작.
              <br />폼 접근성, 뒤로가기, 다음버튼 활성화, 건너뛰기 등등의 유저 상호작용까지 고려하여
              제작.
            </>
          }
        />
        <Panel
          company="HITCHMED"
          position="left"
          title="이지닥 프로젝트 리뉴얼"
          period="2023.06 ~ 2024.01"
          subTitle="이지닥 프로젝트의 협업 환경 개선을 포함한 리뉴얼 작업."
          description={
            <>
              <p>
                API 호출 결과를 ISR, react-query로 캐싱을 제어하도록 하여 성능을 개선하여 페이지
                로딩을 1초 이내로 단축.
              </p>
              <p>
                ESLint, Prettier, Typescript, tailwindcss 를 적용하여 코드 템플릿 생성작업과 번역
                데이터를 대응하기 쉽도록
                <br />
                n18next 의 json 대신, csv 로 대응가능한 번역 기능을 제작하여 팀 내외적으로 프로젝트
                협업 환경을 개선.
              </p>
              <p></p>
            </>
          }
        />
        <Panel
          company="NTS"
          position="right"
          title="네이버 쇼핑라이브 프로모션"
          period="2022.01 ~ 2022.06"
          subTitle="쇼핑라이브 상품 전시페이지 제작 및 전시 상품을 관리하는 폼 기능을 백오피스로 구현"
          description={
            <>
              <p>
                상품 유형, 이미지, 이름, 텍스트, 랜딩 url 등등의 데이터를 담도록 폼을 백오피스에
                개발하여 상품 정보 갱신 절차를 간소화.
              </p>
              <p>
                페이지에 보여야할 이미지가 매우 많아, 이미지 CDN 주소 적용과 LazyLoading 을 구현하여
                페이지 로딩 문제 개선.
              </p>
              <p>
                상품 클릭시 클릭 내역이 ElasticSearch 에 쌓이고 백오피스 대시보드에 해당 지표를 볼
                수 있도록 기능 구현. <br />
                아울러 대시보드 데이터 GET 요청을 react-query 로 중복호출 최소화.
              </p>
            </>
          }
        />
      </div>
    </Section>
  );
};

export const ProjectSectionSecond = (): JSX.Element => {
  const projectRef = useCallback(fadeInOutApplier(300), []);
  // const projectRef = useRef<HTMLDivElement>(null);
  // useEnterSection({ ref: projectRef, delay: 300 });
  return (
    <Section className="text-lg">
      <div ref={projectRef} className="flex flex-col w-full h-full justify-between">
        <div>
          <h1>PROJECTS</h1>
        </div>
        <Panel
          company="NTS"
          position="right"
          title="네이버페이 프로모션"
          period="2017.07 ~ 2022.06"
          subTitle="
          네이버 페이 유저 참여형 홍보 페이지를 주기적으로 개발"
          description={
            <>
              <p>
                기본적인 유저 상호작용 기능을 클라이언트 사이드로 자바스크립트랑 MySQL 로 저장
                로직을 담당하는 PHP 로 구현하여, 배포 작업까지 진행.
              </p>
              <p>
                선착순 포인트 지급, 친구추천 이벤트, 참여 리더보드, 카드 첫 결제 등등 다양한 유형의
                프로모션 진행.
              </p>
              <p>
                답변이 불가능한 고객 문의를 최소화할 수 있도록 유저의 특정 행동시 Apache Lucene 으로
                로그를 기록하여 대응.
              </p>
            </>
          }
        />
        <Panel
          company="NTS"
          position="left"
          title="네이버페이 프로모션 백오피스"
          period="2017.07 ~ 2022.06"
          subTitle="참여 유저 데이터 열람, 페이지 데이터 설정, 리더보드 등등 네이버 페이 프로모션 관리 프로젝트"
          description={
            <>
              <p>
                네이버 페이 참여 내역이 데이터 대시보드 기능, 내역 csv 다운로드 기능, 프로모션
                페이지에 반영할 데이터 관리 폼 기능이 들어간 백오피스 개발.
              </p>
              <p>
                단일 Sprinv MVC 와 JSTL 구조의 불규칙성과, 중복코드 문제로 React 16.8 과 RestAPI
                구조로 마이그레이션.
              </p>
            </>
          }
        />
        <Panel
          company="NTS"
          position="right"
          title="V LIVE 팝업 페이지"
          period="2017.07 ~ 2021.12"
          subTitle="서비스 접속시 처음 보이는 상품 소개 팝업 페이지를 VLive( 現 weverse ) 측에 제공"
          description={
            <>
              <p>
                최대 10개국어 제작 및 배포 작업 진행해야하는데, 그 과정에 휴먼 에러가 잦아 마케터가
                직접 운영/배포 할 수 있도록 생성툴 구현
              </p>
              <p>
                VLive 서비스 사용량이 많아 DB 를 사용하지 않고 서버내 디렉토리로 CRUD 구현.
                백오피스에서 디자인 리소스의 git 주소, 페이지 url 이름, 상품 페이지 설정 폼을 제작.
              </p>
              <p>
                페이지 진입시 패스 파라미터로 사용할 디자인 리로스와 랜딩버튼을 구성하여 화면에
                표현.
              </p>
              <p>툴 개발 후 팝업 페이지 생성 시간이 2시간에서 10분으로 단축.</p>
            </>
          }
        />
      </div>
    </Section>
  );
};

export const SkillSection = (): JSX.Element => {
  const skillRef = useCallback(fadeInOutApplier(390), []);

  return (
    <Section>
      <div ref={skillRef}>
        <div>
          <h1>MY SKILL CARDS</h1>
        </div>
        <SkillCards />
      </div>
    </Section>
  );
};

const Section = ({
  children,
  id,
  className,
}: {
  children?: ReactNode;
  id?: string;
  className?: string;
}): JSX.Element => {
  return (
    <section
      id={id}
      className={clsx(
        `py-16 px-16 snap-start overflow-hidden h-screen w-screen bg-white dark:bg-gray-900 duration-300 transition-[background-color_0.3s] ${className}`
      )}
    >
      {children}
    </section>
  );
};
