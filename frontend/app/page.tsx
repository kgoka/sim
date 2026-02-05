import Link from 'next/link';
import TestCard from '@/components/TestCard';
import CarouselSection from '@/components/CarouselSection';
import { DUMMY_TESTS } from '@/data/tests';

// 1. 페이지를 '동적'으로 설정 (필수!)
export const dynamic = "force-dynamic";

export default function Home() {
  // 2. [고정] 상단 '지금 뜨는 테스트' (데이터의 맨 앞 3개)
  const featuredTests = DUMMY_TESTS.slice(0, 3);

  // 3. [랜덤 로직] 전체 태그 중 무작위로 2개 뽑기
  // 3-1. 모든 태그 수집 및 중복 제거
  const allTags = Array.from(new Set(DUMMY_TESTS.flatMap((test) => test.tags)));
  
  // 3-2. 태그 목록 섞어서 2개 자르기
  const randomTags = allTags
    .sort(() => 0.5 - Math.random())
    .slice(0, 2); 

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24 overflow-hidden">
      {/* overflow-hidden: 가로 스크롤바가 전체 화면에 생기는 것을 방지 */}

      {/* --- Hero Section (배너) --- */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block text-white">나도 몰랐던 나를 만나는 곳,</span>
          
          {/* [수정됨] 문구 변경 및 그라데이션 스타일 교체 */}
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-neonPink via-neonPurple to-neonCyan animate-pulse pb-2">
            SIM(心)
          </span>
          
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          직접 만든 고퀄리티 심리테스트부터 AI 분석 보고서 까지. <br/>
          지금 가장 핫한 테스트들을 만나보세요.
        </p>
        <Link href="/tests">
          <button className="px-8 py-3 rounded-full bg-white text-darkBg font-bold text-lg hover:bg-neonCyan transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
             ✨ 테스트 전체보기
          </button>
        </Link>
      </section>

      {/* --- [고정 섹션] 지금 뜨는 테스트 (Grid Layout) --- */}
      <section className="py-10 px-4 md:px-0">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-bold text-white flex items-center">
            🔥 지금 뜨는 테스트
           </h2>
           <Link href="/tests" className="text-gray-400 hover:text-neonPink text-sm transition-colors">
             더보기 →
           </Link>
        </div>
        {/* 여기는 중요하니까 크게 Grid로 보여줌 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTests.map((test) => (
            <TestCard key={test.id} {...test} />
          ))}
        </div>
      </section>

      {/* --- [동적 섹션] 랜덤 키워드 (Carousel Layout) --- */}
      {randomTags.map((tag) => {
        // 해당 태그를 가진 테스트들만 필터링
        const relatedTests = DUMMY_TESTS.filter((t) => t.tags.includes(tag));
        
        // 혹시 테스트가 하나도 없으면 렌더링 안 함 (에러 방지)
        if (relatedTests.length === 0) return null;

        return (
          <CarouselSection 
            key={tag}
            title="✨ 오늘의 추천 키워드"
            tag={tag}
            tests={relatedTests}
          />
        );
      })}

    </main>
  );
}