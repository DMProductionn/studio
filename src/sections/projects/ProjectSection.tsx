'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ButtonEffect.module.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const ProjectSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const updatePosition = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Сброс начального состояния
    gsap.set(cardRefs.current, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
    });

    // Анимация раскрытия карточек
    gsap.to(cardRefs.current, {
      x: (i) => {
        if (i === 0) return -360; // первая влево
        if (i === 1) return 0; // вторая остаётся
        if (i === 2) return 360; // третья вправо
        return 0;
      },
      y: (i) => {
        if (i === 0) return 120; // первая ещё и вверх
        if (i === 1) return 0; // вторая по центру
        if (i === 2) return -120; // третья вверх
        return 0;
      },
      scale: (i) => 1 - i * 0.05,
      rotation: (i) => (i === 0 ? -6 : i === 2 ? 6 : 0), // лёгкий наклон в разные стороны
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=800',
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <>
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
      <section ref={sectionRef} className="max-h-[635px] pt-[40px]">
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
          <button
            className={styles.button}
            onMouseMove={updatePosition}
            onMouseOut={updatePosition}>
            Смотреть все проекты
          </button>
        </div>

        {/* Проекты */}
        <div className="relative w-full h-[700px] max-xs:h-auto flex justify-center">
          <div className="relative w-[600px] h-[400px]">
            {['/img/project1.webp', '/img/project2.webp', '/img/project3.webp'].map((src, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-2xl"
                style={{ backgroundImage: `url(${src})`, zIndex: 3 - i }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
