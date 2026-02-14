// frontend/data/tests.ts

export interface TestData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const DUMMY_TESTS: TestData[] = [
  // --- [인기] 카테고리 ---
  {
    id: 'minecraft',
    title: '마인크래프트 몹 성향 테스트',
    description: '크리퍼? 엔더맨? 내 안의 숨겨진 블록 본능을 깨워보자!',
    imageUrl: 'from-green-400 to-blue-500', 
    tags: ['게임', '성격', 'AI'],
  },
  
  // --- [AI] 카테고리 ---
  {
    id: 'ai-dream',
    title: 'AI가 분석하는 소름 돋는 꿈 해몽',
    description: '어젯밤 꿈 내용 입력하면 GPT가 미래를 예언해줍니다.',
    imageUrl: 'from-purple-500 to-pink-500',
    tags: ['AI', '운세'],
  },
  {
    id: 'ai-face',
    title: 'AI 관상 테스트 : 내가 왕이 될 상인가?',
    description: '셀카 한 장으로 보는 나의 숨겨진 욕망과 미래 직업.',
    imageUrl: 'from-indigo-500 to-purple-500',
    tags: ['AI', '관상'],
  },
  {
    id: 'ai-pet',
    title: '우리 강아지 마음 번역기',
    description: '멍멍! 짖는 소리를 녹음하면 AI가 감정을 분석해드려요.',
    imageUrl: 'from-yellow-400 to-orange-500',
    tags: ['AI', '동물'],
  },

  // --- [연애] 카테고리 ---
  {
    id: 'love-style',
    title: '나의 연애 세포 레벨 테스트',
    description: '왜 나는 아직 솔로인가? 팩트로 뼈 때려드립니다.',
    imageUrl: 'from-red-400 to-yellow-500',
    tags: ['연애', '팩폭주의','AI'],
  },
  {
    id: 'love-mbti',
    title: 'MBTI 이상형 찾기',
    description: '나랑 찰떡궁합인 MBTI는? 데이터로 증명된 천생연분.',
    imageUrl: 'from-pink-400 to-red-400',
    tags: ['연애', 'MBTI','AI'],
  },
  {
    id: 'love-gaslighting',
    title: '가스라이팅 자가진단',
    description: '혹시 나도 모르게 당하고 있을까? 건강한 연애 점검.',
    imageUrl: 'from-gray-600 to-red-600',
    tags: ['연애', '심리','AI'],
  },
  {
    id: 'basketball', // 유니크한 ID
    title: 'NBA 농구 선수 성향 테스트',
    description: '크리퍼? 아니 커리? 나와 플레이 스타일이 닮은 NBA 선수는 누구일까요?',
    imageUrl: '/images/basketball-cover.png', // (이미지가 없다면 일단 비워두거나 다른 파일명 넣기)
    link: '/tests/basketball', // 아까 만든 페이지 경로
    tags: ['#농구', '#NBA', '#성향'] // 태그가 있다면 추가
  },
];