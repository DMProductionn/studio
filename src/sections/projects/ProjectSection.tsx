'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ButtonEffect.module.css';

export const ProjectSection: React.FC = () => {
  const updatePosition = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="max-h-[635px]">
      {/* Фоновые эффекты */}
      <Image
        className="absolute left-0"
        alt="effect"
        src="/effect/BlurShapes5.webp"
        width={672}
        height={908}
      />
      <Image
        className="absolute right-0"
        alt="effect"
        src="/effect/BlurShapes6.webp"
        width={672}
        height={908}
      />

      {/* Заголовок и кнопка */}
      <div className="flex flex-col gap-[30px] relative z-[10]">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[70px] font-[600] leading-[100%] text-[#F4F4F4]">
          Наши проекты
        </motion.h2>
        <button className={styles.button} onMouseMove={updatePosition} onMouseOut={updatePosition}>
          Смотреть все проекты
        </button>
      </div>

      {/* Проекты */}
      <div className="relative w-full h-[700px] max-xs:h-auto flex justify-center">
        <div
          className="relative w-[1200px] scale-100 max-xl:scale-90 max-lg:scale-80 max-md:scale-70 max-sm:scale-60
                  max-xs:flex max-xs:flex-col max-xs:items-center max-xs:gap-[-120px]">
          {/* Абсолютные карточки */}
          <div
            className="absolute left-[60px] top-[30px] z-[3] w-[658px] h-[467px] bg-[url('/img/project1.webp')] bg-contain bg-no-repeat
                    max-xs:static max-xs:w-[80%] max-xs:aspect-[658/467] max-xs:translate-y-0 max-xs:drop-shadow-lg"
          />
          <div
            className="absolute left-[350px] top-[-100px] z-[2] w-[658px] h-[467px] bg-[url('/img/project2.webp')] bg-contain bg-no-repeat
                    max-xs:static max-xs:w-[80%] max-xs:aspect-[658/467] max-xs:-translate-y-[80px] max-xs:drop-shadow-lg"
          />
          <div
            className="absolute left-[570px] top-[-200px] z-[1] w-[658px] h-[467px] bg-[url('/img/project3.webp')] bg-contain bg-no-repeat
                    max-xs:static max-xs:w-[80%] max-xs:aspect-[658/467] max-xs:-translate-y-[160px] max-xs:drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
