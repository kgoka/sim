// frontend/data/basketballData.ts

export type Question = {
  id: number;
  question: string;
  answers: { text: string; type: string }[];
};

export type Result = {
  name: string;
  desc: string;
  image: string; // 나중에 public 폴더에 이미지 넣고 경로 연결
};

export const questions: Question[] = [
  {
    id: 1,
    question: "경기 종료 3초 전, 1점 차로 지고 있다! 공이 내 손에 왔다. 당신의 선택은?",
    answers: [
      { text: "내가 해결한다. 3점 슛 발사! 🏀", type: "shooter" },
      { text: "빈 동료에게 완벽한 패스! 👀", type: "guard" },
      { text: "골밑으로 돌파해서 덩크! 💪", type: "center" },
    ],
  },
  {
    id: 2,
    question: "농구 할 때 가장 좋아하는 플레이는?",
    answers: [
      { text: "깔끔하게 들어가는 클린 슛", type: "shooter" },
      { text: "상대 멘탈 흔드는 수비 & 스틸", type: "guard" },
      { text: "상대를 힘으로 밀어내는 리바운드", type: "center" },
    ],
  },
  {
    id: 3,
    question: "팀에서 당신의 역할은?",
    answers: [
      { text: "득점 기계 (Ace)", type: "shooter" },
      { text: "야전 사령관 (Leader)", type: "guard" },
      { text: "팀의 기둥 (Big Man)", type: "center" },
    ],
  },
];

export const results: Record<string, Result> = {
  shooter: {
    name: "스테픈 커리 (Stephen Curry)",
    desc: "당신은 3점 슛의 신! 폭발적인 득점력을 가진 슈터입니다.",
    image: "/images/curry.png", 
  },
  guard: {
    name: "크리스 폴 (Chris Paul)",
    desc: "코트 위의 사령관! 경기를 조율하는 포인트 가드입니다.",
    image: "/images/cp3.png",
  },
  center: {
    name: "샤킬 오닐 (Shaquille O'Neal)",
    desc: "골밑의 지배자! 압도적인 피지컬의 센터입니다.",
    image: "/images/shaq.png",
  },
};