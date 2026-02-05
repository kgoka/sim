import TestCard from '@/components/TestCard';

// 임시 데이터 (나중에 FastAPI에서 받아올 부분)
const DUMMY_TESTS = [
  {
    id: 'minecraft',
    title: '마인크래프트 몹 성향 테스트',
    description: '크리퍼? 엔더맨? 내 안의 숨겨진 블록 본능을 깨워보자!',
    imageUrl: 'from-green-400 to-blue-500', // 임시 그라데이션 색상
    tags: ['게임', '성격', '인기급상승'],
  },
  {
    id: 'ai-dream',
    title: 'AI가 분석하는 소름 돋는 꿈 해몽',
    description: '어젯밤 꿈 내용 입력하면 GPT가 미래를 예언해줍니다 (아마도).',
    imageUrl: 'from-purple-500 to-pink-500',
    tags: ['AI', '운세', '신기능'],
  },
  {
    id: 'love-style',
    title: '나의 연애 세포 레벨 테스트',
    description: '왜 나는 아직 솔로인가? 팩트로 뼈 때려드립니다.',
    imageUrl: 'from-red-400 to-yellow-500',
    tags: ['연애', '팩폭주의'],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24">
      {/* 1. Hero Section (상단 배너) */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="block text-white">나도 몰랐던 나를 만나는 곳,</span>
          {/* 트렌디한 그라데이션 텍스트 효과 */}
          <span className="bg-clip-text text-transparent bg-trendy-gradient animate-pulse">
            MY UNIVERSE
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          직접 만든 고퀄리티 심리테스트부터 AI 분석 보고서 까지. <br/>
          지금 가장 핫한 테스트들을 만나보세요.
        </p>
        {/* 힙한 느낌의 버튼 */}
        <button className="px-8 py-3 rounded-full bg-white text-darkBg font-bold text-lg hover:bg-neonCyan transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
           ✨ 테스트 전체보기
        </button>
      </section>

      {/* 2. Test Grid Section (테스트 목록) */}
      <section id="tests" className="py-10">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-bold text-white flex items-center">
            🔥 지금 뜨는 테스트
           </h2>
        </div>
        
        {/* 반응형 그리드 레이아웃 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {DUMMY_TESTS.map((test) => (
            <TestCard
              key={test.id}
              id={test.id}
              title={test.title}
              description={test.description}
              imageUrl={test.imageUrl}
              tags={test.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}