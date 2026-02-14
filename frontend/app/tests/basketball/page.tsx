// frontend/app/tests/basketball/page.tsx
"use client";

import { useState } from "react";
import { questions, results } from "./basketballdata";

export default function BasketballTestPage() {
  const [step, setStep] = useState(0); // 0: 시작전, 1~N: 질문, 999: 결과
  const [scores, setScores] = useState({ shooter: 0, guard: 0, center: 0 });
  const [finalResult, setFinalResult] = useState<string>("");

  // 답변 선택 시 실행
  const handleAnswer = (type: string) => {
    // 점수 업데이트
    const newScores = { ...scores, [type]: (scores as any)[type] + 1 };
    setScores(newScores);

    // 다음 질문으로 넘어가기
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      // 마지막 질문이면 결과 계산
      calculateResult(newScores);
    }
  };

  // 결과 계산 로직
  const calculateResult = (finalScores: any) => {
    // 가장 높은 점수의 키값 찾기
    const resultType = Object.keys(finalScores).reduce((a, b) =>
      finalScores[a] > finalScores[b] ? a : b
    );
    setFinalResult(resultType);
    setStep(999); // 결과 화면 코드로 이동
  };

  // 1. 시작 화면
  if (step === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-orange-50">
        <h1 className="text-4xl font-bold mb-4 text-orange-600">🏀 NBA 선수 성향 테스트</h1>
        <p className="text-lg mb-8">나와 플레이 스타일이 비슷한 선수는?</p>
        <button
          onClick={() => setStep(1)}
          className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-bold"
        >
          테스트 시작하기
        </button>
      </div>
    );
  }

  // 2. 결과 화면
  if (step === 999) {
    const resultData = results[finalResult];
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-orange-100">
        <h2 className="text-2xl font-bold mb-2 text-gray-700">당신의 유형은...</h2>
        <h1 className="text-4xl font-bold mb-4 text-orange-700">{resultData?.name}</h1>
        <p className="text-xl mb-8 text-center max-w-md">{resultData?.desc}</p>
        
        {/* 이미지 들어갈 자리 */}
        <div className="w-64 h-64 bg-gray-300 rounded-lg mb-6 flex items-center justify-center text-gray-500">
             이미지 영역
        </div>

        <button
          onClick={() => {
            setStep(0);
            setScores({ shooter: 0, guard: 0, center: 0 });
          }}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
        >
          다시 하기
        </button>
      </div>
    );
  }

  // 3. 질문 진행 화면
  const currentQ = questions[step - 1];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <div className="w-full max-w-lg">
        <div className="mb-4 text-gray-500 font-medium">
          Question {step} / {questions.length}
        </div>
        <h2 className="text-2xl font-bold mb-8 text-gray-800">{currentQ.question}</h2>
        
        <div className="flex flex-col gap-4">
          {currentQ.answers.map((ans, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(ans.type)}
              className="w-full p-4 text-left border-2 border-orange-100 rounded-xl hover:bg-orange-50 hover:border-orange-300 transition-all text-lg font-medium text-gray-700"
            >
              {ans.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}