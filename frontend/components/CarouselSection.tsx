"use client";

import { useRef, useState, useEffect } from "react";
import TestCard from "./TestCard";
import { TestData } from "@/data/tests";

interface CarouselSectionProps {
  title: string;
  tag: string;
  tests: TestData[];
}

export default function CarouselSection({ title, tag, tests }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // [상태 추가] 스크롤 위치에 따라 화살표 표시 여부 결정
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // 스크롤 감지 함수: 맨 처음과 맨 끝에서 화살표 숨김 처리
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // 왼쪽 끝에 있으면 왼쪽 화살표 숨김 (오차범위 10px)
      setShowLeftArrow(scrollLeft > 10);
      // 오른쪽 끝에 있으면 오른쪽 화살표 숨김 (오차범위 10px)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // 초기 로딩 시 스크롤 상태 체크
  useEffect(() => {
    handleScroll();
    // 리사이즈 시에도 체크
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <section className="py-10 border-t border-white/10 relative group">
      {/* 제목 섹션 - 패딩 값을 아래 슬라이더와 정확히 일치시킴 */}
      <div className="mb-6 px-4 md:px-12">
        <h2 className="text-2xl font-bold text-white">
          {title} <span className="text-neonPurple">#{tag}</span>
        </h2>
      </div>

      {/* 컨테이너 (relative) */}
      <div className="relative">
        
        {/* [왼쪽 화살표] showLeftArrow 상태에 따라 렌더링 */}
        <button
          onClick={() => scroll("left")}
          className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 
                     w-16 h-full bg-gradient-to-r from-black/80 to-transparent
                     items-center justify-start pl-4 text-white transition-opacity duration-300
                     ${showLeftArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <span className="text-4xl font-bold drop-shadow-lg">‹</span>
        </button>

        {/* 슬라이더 영역 */}
        {/* [핵심 수정 사항] 
           1. px-4 md:px-12 : 제목과 동일한 패딩
           2. scroll-pl-4 md:scroll-pl-12 : 스크롤 스냅 시작점을 패딩만큼 밀어줌 (정렬 고정)
           3. snap-mandatory : 스크롤이 멈출 때 항상 카드 시작점에 맞춤
        */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-12 scroll-pl-4 md:scroll-pl-12 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {tests.map((test) => (
            <div key={test.id} className="flex-none w-[280px] snap-start">
              <TestCard {...test} />
            </div>
          ))}
        </div>

        {/* [오른쪽 화살표] showRightArrow 상태에 따라 렌더링 */}
        <button
          onClick={() => scroll("right")}
          className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 
                     w-16 h-full bg-gradient-to-l from-black/80 to-transparent
                     items-center justify-end pr-4 text-white transition-opacity duration-300
                     ${showRightArrow ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <span className="text-4xl font-bold drop-shadow-lg">›</span>
        </button>

      </div>
    </section>
  );
}