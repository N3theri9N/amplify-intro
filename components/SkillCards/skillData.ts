export type SkillCardType = {
  image: string;
  title: string;
  description: string;
  grade: number;
  type: "FRONT END" | "BACK END";
  tooltip?: string[];
};

export const cardData: SkillCardType[] = [
  {
    image: "html.svg",
    title: "HTML",
    description: "에이치티에멜",
    grade: 7,
    type: "FRONT END",
    tooltip: [
      "기본적인 레이아웃을 제작합니다.",
      "웹표준, 접근성을 고려하여 구성합니다.",
      "시멘틱 태그, SEO를 활용하므로 검색엔진이 마음에 들어합니다.",
    ],
  },
  {
    image: "css.svg",
    title: "CSS",
    description: "씨에스에스",
    grade: 6,
    type: "FRONT END",
    tooltip: [
      "GRID 와 FLEX 를 비롯한 전체적인 레이아웃의 대응이 가능합니다.",
      "디자인이 제작되어 Figma에 공유되면 똑같이 재현합니다.",
      "기본적인 애니메이션을 제작할 수 있습니다.",
    ],
  },
  {
    image: "javascript.svg",
    title: "JavaScript",
    description: "자바스크립트",
    grade: 8,
    type: "FRONT END",
    tooltip: [
      "유저 상호작용적인 기능을 구현합니다.",
      "객체 프로토타입, GC, 프로미스를 비롯한 자바스크립트의 기본적인 개념을 활용할 수 있습니다.",
    ],
  },
  {
    image: "typescript.svg",
    title: "TypeScript",
    description: "타입스크립트",
    grade: 5,
    type: "FRONT END",
    tooltip: [
      "React 프레임워크 프로젝트를 TSX 기반으로 다룰 수 있습니다.",
      "API 응답에 타입을 적용하여 응답값의 데이터 이슈를 해결합니다.",
    ],
  },

  {
    image: "reactjs.svg",
    title: "React",
    description: "리액트",
    grade: 7,
    type: "FRONT END",
    tooltip: [
      "16.8 버전 이후에 나온 훅을 거의 원하는 기능을 자유자재로 활용합니다.",
      "Suspense 로 사용자 경험을 향상합니다.",
      "Memorize 에 대한 이해로 필요한 곳에 리랜더링을 최적화합니다.",
    ],
  },
  {
    image: "nextjs.svg",
    title: "NextJS",
    description: "넥스트 제이에스",
    grade: 7,
    type: "FRONT END",
    tooltip: [
      "Route정의, SSG/ISR, Revalidation 등등의 사용 가능한 기능의 대부분을 활용합니다.",
      "빌드부터 배포까지의 절차를 알게됩니다.",
      "캐싱, 메모라이징이 어떤 상황일때 일어나는지 이해하여 프로젝트를 최적화합니다.",
    ],
  },
  {
    image: "reactquery.svg",
    title: "React-Query",
    description: "리액트 쿼리",
    grade: 6,
    type: "FRONT END",
    tooltip: [
      "쿼리와 변형으로 저장소의 데이터와 화면의 내용을 동기화합니다.",
      "라운드 트립을 최소화할 수 있습니다.",
      "설정 폼 페이지, 로그인 데이터 보존, 무한스크롤등등 다양한 유형에 적용합니다. ",
    ],
  },
  {
    image: "recoil.svg",
    title: "Recoil",
    description: "리코일",
    grade: 5,
    type: "FRONT END",
    tooltip: ["프롭 드릴링과 무분별한 리랜더링을 최소화 하기위해 어떻게 사용하는지 이해합니다."],
  },

  {
    image: "webpack.svg",
    title: "Webpack",
    description: "웹팩 번들러",
    grade: 4,
    type: "FRONT END",
    tooltip: [
      "빌드시 활용 방법에 대해 기본적인 역할을 이해합니다.",
      "새로운 유형의 파일에 플러그인을 도입하여 번들링하도록 설정합니다.",
      "특정 환경에서 운영과 다른 작업을 동작하도록 설정합니다.",
    ],
  },
  {
    image: "php.svg",
    title: "PHP",
    description: "피에이치피",
    grade: 6,
    type: "BACK END",
    tooltip: [
      "세션, API 호출의 응답, 저장소 연결을 비롯한 여러 작업이 가능합니다.",
      "DB 접근시 무결성, 일관성을 고려한 로직으로 대응합니다.",
    ],
  },
  {
    image: "mysql.svg",
    title: "MySQL",
    description: "마이에스큐엘",
    grade: 5,
    type: "BACK END",
    tooltip: [
      "RDBMS 관련 개념을 이해합니다.",
      "사용할 쿼리문의 성능에 문제가 없는지 EXPLAIN 으로 테스트합니다.",
    ],
  },
  {
    image: "redis.svg",
    title: "Redis",
    description: "레디스",
    grade: 6,
    type: "BACK END",
    tooltip: [
      "응답이 빠른 Redis 만의 장점을 활용할 수 있습니다.",
      "String, Hash, Set 등등 지원 가능한 자료형들로 원하는 방식대로 활용 가능합니다.",
    ],
  },
];
