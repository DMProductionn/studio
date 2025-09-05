'use client';

import Image from 'next/image';
import styles from './ButtonEffect.module.css';
import { TypedTextTeam } from '@/assets/TypedTextTeam';

export const TeamSection: React.FC = () => {
  const updatePosition = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="bg-[#18181C] z-[99] pt-[90px] max-sm:pt-[60px]">
      <div className="max-w-[1220px] w-full mx-auto px-[20px]">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-[15px] max-sm:items-start">
          <TypedTextTeam />

          <button
            className={`${styles.button} max-sm:self-end`}
            onMouseMove={updatePosition}
            onMouseOut={updatePosition}>
            Связаться с командой
            <svg
              className="absolute right-0"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="28"
              viewBox="0 0 22 28"
              fill="none">
              <path
                d="M2.80406 1.17502C1.89375 0.462521 0.5625 1.11221 0.5625 2.26815V25.6344C0.5625 27.0763 2.40562 27.6781 3.25687 26.5138L9.09281 18.5235C9.2669 18.2852 9.49474 18.0914 9.75783 17.9579C10.0209 17.8243 10.3118 17.7547 10.6069 17.7547H19.6912C21.1087 17.7547 21.7256 15.9622 20.6081 15.0885L2.80406 1.17502Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-[40px] mt-[60px] h-full">
          {/* Карточка 1 */}
          <div className="relative max-w-[360px] w-full">
            <Image
              className="absolute bottom-[155px] -right-10 z-0 max-sm:hidden"
              src="/effect/BlurShapes7.webp"
              width={310}
              height={420}
              alt="affect"
            />
            <div className="relative z-10 pr-[20px] pl-[30px] pt-[20px] h-[155px] border border-[#fff]/10 bg-[#313237] rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
              <p className="mb-[10px] text-[20px] text-[#F4F4F4] leading-[24px]">Design</p>
              <p className="text-[14px] text-[#F0F1F3] opacity-60">
                Senior Ui/UX, Figma, Adobe Photoshop, Adobe Illustrator, Adobe After Effects
              </p>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="relative max-w-[360px] w-full">
            <Image
              className="absolute bottom-[90px] left-0 z-0"
              src="/effect/BlurShapes8.webp"
              width={310}
              height={420}
              alt="affect"
            />
            <div className="relative z-10 pr-[20px] pl-[30px] pt-[20px] h-[155px] border border-[#fff]/10 bg-[#313237] rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
              <p className="mb-[10px] text-[20px] text-[#F4F4F4] leading-[24px]">FrontEnd</p>
              <p className="text-[14px] text-[#F0F1F3] opacity-60">
                React, React Native, Next.js, TypeScript, RTK, TanStack Query, Redux Toolkit,
                Zustand, TailwindCSS, SCSS, Framer Motion.
              </p>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="relative max-w-[360px] w-full">
            <Image
              className="absolute bottom-[150px] -right-0 z-0"
              src="/effect/BlurShapes9.webp"
              width={310}
              height={420}
              alt="affect"
            />
            <div className="relative z-10 pr-[20px] pl-[30px] pt-[20px] h-[155px] border border-[#fff]/10 bg-[#313237] rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
              <p className="mb-[10px] text-[20px] text-[#F4F4F4] leading-[24px]">BackEnd</p>
              <p className="text-[14px] text-[#F0F1F3] opacity-60">
                FastApi, sqlalchemy, alembic, Taskiq, httpx, pytest, redis, nginx, rabbitmq, kafka,
                prometheus, grafana, grafana-loki, victoria-metrics, s3, docker, docker-compose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
