import Image from 'next/image';
import Link from 'next/link';

// Props 타입 정의 (나중에 FastAPI에서 받아올 데이터 형태)
interface TestCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export default function TestCard({ id, title, description, imageUrl, tags }: TestCardProps) {
  return (
    <Link href={`/tests/${id}`} className="group block">
      {/* 카드 컨테이너: 호버 시 살짝 위로 뜨고 테두리 빛남 */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-neonPurple/50">
        
        {/* 이미지 영역 */}
        <div className="relative h-48 w-full overflow-hidden">
           {/* 실제 이미지 대신 임시 그라데이션 박스 (나중에 Image 컴포넌트로 교체) */}
           <div className={`w-full h-full bg-gradient-to-br ${imageUrl}`} />
           {/* <Image src={imageUrl} alt={title} fill style={{objectFit:"cover"}} className="group-hover:scale-110 transition-transform duration-500"/> */}
        </div>

        {/* 텍스트 영역 */}
        <div className="p-5">
          {/* 태그 */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-neonPurple/20 text-neonPink">
                #{tag}
              </span>
            ))}
          </div>
          {/* 제목 */}
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neonCyan transition-colors">{title}</h3>
          {/* 설명 */}
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>
      </div>
    </Link>
  );
}