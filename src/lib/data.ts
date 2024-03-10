"use client";

// 메인페이지
export const mainPageData = [
  {
    title: "광고 아카이브",
    description:
      "아이디어를 얻기 위해 아카이브에서 참고영상을 찾아보세요.\n키워드만 입력하면 AI 객체 인식 기반으로 원하는 광고를 쉽고 빠르게 찾아볼 수 있어요.",
    card: [
      {
        title: "광고 검색",
        description:
          "많은 광고들을 한 눈에 모아보고 내가 검색한 광고의 상세정보를 확인할 수 있어요.",
        img: "/main/AdSearch.png",
        link: "",
      },
      {
        title: "레퍼런스 보드",
        description:
          "키워드만 검색하면 내가 원하는 광고 이미지로 나만의 광고 레퍼런스 보드를 생성할 수 있어요.",
        img: "/main/RefBoard.png",
        link: "",
      },
      {
        title: "광고 데이터 분석",
        description:
          "아이작만의 데이터 시각화 기술로 중소 기업의 광고 영향력, AI 데이터맵을 확인할 수 있어요.",
        img: "/main/DataAnalysis.png",
        link: "",
      },
    ],
  },
  {
    title: "트렌드 분석",
    description:
      "인물, 아이템 검색을 통해 관련 해시태그와 검색량 추이, 관련 콘텐츠를 확인해보세요.\n키워드 비교 분석으로 공통 연관어와 관련 콘텐츠까지 한번에 데이터를 비교할 수 있어요.",
    card: [
      {
        title: "인물 분석",
        description:
          "검색량과 연관어 추이, 브랜드 평판 지수를 통해 인물에 대한 정보를 한번에 확인할 수 있어요.",
        img: "/main/CharacterAnalysis.png",
        link: "/trend/people",
      },
      {
        title: "아이템 분석",
        description:
          "검색량과 연관어 추이, 네이버 쇼핑 키워드를 통해 정보를 한번에 분석할 수 있어요.",
        img: "/main/ItemAnalysis.png",
        link: "/trend/item",
      },
      {
        title: "비교 분석",
        description:
          "인물/키워드 간 비교를 통해 검색량 추이부터 공통 연관어 비교, 콘텐츠까지 확인 할 수 있어요.",
        img: "/main/Comparative.png",
        link: "/trend/compare",
      },
    ],
  },
];
export const copyGuideData = [
  {
    index: "01",
    title: "N카피 / K카피 생성",
    description: "원하는 모델을 선택해\n카피를 생성해보세요.",
  },
  {
    index: "02",
    title: "광고카피 생성",
    description:
      "광고 카피는 1개씩 생성이\n가능해요. AI 카피를 수정해\n나만의 카피를 만들고\n저장해보세요.",
  },
  {
    index: "03",
    title: "카피갤러리",
    description: "더 많은 예시들을 한번에\n확인할 수 있어요.",
  },
];
export const storyBoardData = [
  [
    {
      img: "/main/story1.png",
      writer: "윤시연",
      name: "아라리 치킨",
    },
    {
      img: "/main/story2.png",
      writer: "정예진",
      name: "나르지오 워킹화",
    },
    {
      img: "/main/story3.png",
      writer: "황주희",
      name: "어드래서블 광고",
    },
  ],
  [
    {
      img: "/main/story4.png",
      writer: "김서윤",
      name: "지벤 컴페니웨어 상업광고",
    },
    {
      img: "/main/story5.png",
      writer: "김예찬",
      name: "싱그라미 마스크 상업광고",
    },
    {
      img: "/main/story6.png",
      writer: "박예진",
      name: "디지털 배너 공익광고",
    },
  ],
];

export const genderOption = ["전체", "남성", "여성"];
export const genderENUM = <string[]>["ALL", "MALE", "FEMALE"];
export const ageOption = [
  "전체",
  "0~9세",
  "10~19세",
  "20~29세",
  "30~39세",
  "40~49세",
  "50~59세",
  "60세 이상",
];
export const ageENUM = [
  "ALL",
  "ZERO",
  "TEN",
  "TWENTY",
  "THIRTY",
  "FORTY",
  "FIFTY",
  "SIXTY",
];
export const toneOption = [
  "기본형",
  "언어유희형",
  "행동촉구형",
  "리뷰형",
  "경고형",
  "감정호소형",
  "문제제기형",
  "질문형",
];
export const toneENUM = [
  "DEFAULT",
  "WORDPLAY",
  "ACTION",
  "REVIEW",
  "WARNING",
  "EMOTIONAL",
  "PROBLEM",
  "QUESTION",
];
