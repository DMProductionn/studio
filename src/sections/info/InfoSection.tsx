'use client';

import Image from 'next/image';
import { TypedExperience } from '@/assets/TypedExperience';

export const InfoSection: React.FC = () => {
  return (
    <section className="bg-[#18181C] z-[99] pt-[90px] pb-[140px] max-sm:pb-[70px]">
      <div className="max-w-[1220px] w-full mx-auto px-[20px]">
        <TypedExperience />

        <div className="flex justify-between gap-[60px] max-xl:flex-col max-sm:gap-0 max-xl:items-center max-sm:items-start">
          <div className="max-w-[625px] w-full h-[400px] max-sm:h-[330px] max-cus:h-[250px] rounded-[30px] relative -top-[40px] max-xl:-top-[30px] max-md:-top-[20px] max-sm:-top-[30px]">
            <Image className="absolute" width={625} height={400} src="/Info.webp" alt="info" />
          </div>
          <div className=''>
            <div className="flex items-center mb-[40px] gap-[15px]">
              <p className="text-[40px] leading-[48px] max-sm:text-[20px] max-sm:leading-[30px]">
                Мы гарантируем <br /> полную{' '}
                <span className="opacity-60">
                  прозрачность <br />
                </span>{' '}
                разработки проекта
              </p>
              <div>
                <Image className="max-sm:w-[40px] max-sm:h-[40px]" width={60} height={60} src="/effect/shape.png" alt="effect" />
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
