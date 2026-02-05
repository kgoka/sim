import TestCard from '@/components/TestCard';
import { DUMMY_TESTS } from '@/data/tests'; // 아까 만든 데이터 가져오기

export default function TestListPage() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* 헤더 섹션 */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            전체 테스트 <span className="text-neonPurple">({DUMMY_TESTS.length})</span>
          </h1>
          <p className="text-gray-400 text-lg">
            심심할 틈이 없는 다양한 테스트들을 만나보세요.
          </p>
        </div>

        {/* 리스트 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </div>
    </main>
  );
}