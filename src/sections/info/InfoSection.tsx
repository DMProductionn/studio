'use client';

import Image from 'next/image';
import { TypedExperience } from '@/assets/TypedExperience';

export const InfoSection: React.FC = () => {
  return (
    <section className="bg-[#18181C] z-[99] pt-[90px] pb-[140px]">
      <div className="max-w-[1220px] w-full mx-auto px-[20px]">
        <TypedExperience />

        <div className="flex justify-between gap-[60px]">
          <div className="max-w-[625px] w-full h-[330px] bg-[#fff]/60 rounded-[30px]"></div>
          <div>
            <div className="flex items-center mb-[40px] gap-[15px]">
              <p className="text-[40px] leading-[48px]">
                Мы гарантируем <br /> полную{' '}
                <span className="opacity-60">
                  прозрачность <br />
                </span>{' '}
                разработки проекта
              </p>
              <div>
                <Image className="" width={60} height={60} src="/effect/shape.png" alt="effect" />
              </div>
            </div>
            <p className="text-[14px] text-[#F0F1F3] opacity-60 max-w-[290px]">
              FastApi, sqlalchemy, alembic, Taskiq, httpx, pytest, redis, nginx, rabbitmq, kafka,
              prometheus, grafana, grafana-loki, victoria-metrics, s3, docker, docker-compose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
