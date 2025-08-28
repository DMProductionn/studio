import { InfoSection } from '@/sections/info/InfoSection';
import { MainSection } from '@/sections/main/MainSection';
import { ProjectSection } from '@/sections/projects/ProjectSection';
import { TeamSection } from '@/sections/team/TeamSection';
import { TitleSection2 } from '@/sections/Title/TitleSection2';
import Image from 'next/image';

export default function Home() {

  return (
    <>
      {/* Фоновые эффекты */}
      <Image
        className="absolute left-0 top-0 z-[-1]"
        src="/effect/BlurShapes3.webp"
        width={670}
        height={908}
        alt="effect"
      />
      <Image
        className="absolute right-0 top-0 z-[-1]"
        src="/effect/BlurShapes4.webp"
        width={670}
        height={908}
        alt="effect"
      />

      <div className="max-w-[1220px] w-full mx-auto px-[20px]">
        <TitleSection2 />
        <MainSection />
        <ProjectSection />
      </div>

        <div className="sticky top-[230px] h-[400px] w-full pointer-events-none z-[-1]">
          <Image src="/logo_big.webp" alt="logo" fill className="object-contain -bottom-[130px]" />
        </div>

        <TeamSection />
        <InfoSection />
    </>
  );
}
