'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const TeamSection: React.FC = () => {
  return (
    <section className="bg-[#18181C] z-[99] pt-[90px]">
      <div className="max-w-[1220px] w-full mx-auto px-[20px]">
        <div className="flex justify-between ">
          <motion.h3 className="font-[600] text-[#F4F4F4] text-[70px] leading-[100%] z-[99] max-sm:text-[40px] text-start">
          
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="block">
              Команда
            </motion.span>

            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              className="text-[#9898A6] opacity-60 block">
              разработчиков
            </motion.span>
          </motion.h3>

          <button className="bg-[#FF4718] z-[99] relative border-[2px] mt-[10px] border-[#fff]/30 rounded-[15px] max-w-[220px] w-full h-[50px] rounded-tl-[0px]">
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

        <div className="relative flex justify-between items-center gap-[40px] mt-[60px] z-[10]">
          {/* Фоновые картинки */}
          <Image
            className="absolute bottom-[80px] right-[440px] z-0"
            src="/effect/BlurShapes8.webp"
            width={310}
            height={420}
            alt="affect"
          />
          <Image
            className="absolute bottom-[125px] left-[60px] z-0"
            src="/effect/BlurShapes7.webp"
            width={310}
            height={420}
            alt="affect"
          />
          <Image
            className="absolute bottom-[125px] right-[30px] z-0"
            src="/effect/BlurShapes9.webp"
            width={310}
            height={420}
            alt="affect"
          />

          {/* Карточки */}
          <div className="max-w-[360px] relative z-[2] pr-[20px] pl-[30px] pt-[20px] w-full h-[155px] border border-[#fff]/10 bg-[#313237] rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
            <p className="mb-[10px] text-[20px] text-[#F4F4F4] leading-[24px]">Design</p>
            <p className="text-[14px] text-[#F0F1F3] opacity-60">
              Senior Ui/UX, Figma, Adobe Photoshop, Adobe Illustrator, Adobe After Effects
            </p>
          </div>

          <div className="max-w-[360px] relative pr-[20px] z-[2] pl-[30px] pt-[20px] w-full h-[155px] border border-[#fff]/10 bg-[#313237] rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
            <p className="mb-[10px] text-[20px] text-[#F4F4F4] leading-[24px]">FrontEnd</p>
            <p className="text-[14px] text-[#F0F1F3] opacity-60">
              React, React Native, Next.js, TypeScript, RTK, TanStack Query, Redux Toolkit, Zustand,
              TailwindCSS, SCSS, Framer Motion.
            </p>
          </div>

          <div className="max-w-[360px] relative z-[2] pr-[20px] overflow-hidden pl-[30px] pt-[20px] w-full h-[155px] border border-[#fff]/10 bg-[#313237] rounded-[30px] shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
            <p className="mb-[10px] text-[20px] text-[#F4F4F4] leading-[24px]">BackEnd</p>
            <p className="text-[14px] text-[#F0F1F3] opacity-60">
              FastApi, sqlalchemy, alembic, Taskiq, httpx, pytest, redis, nginx, rabbitmq, kafka,
              prometheus, grafana, grafana-loki, victoria-metrics, s3, docker, docker-compose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
