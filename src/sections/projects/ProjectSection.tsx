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

    ScrollTrigger.matchMedia({
      // ПК
      "(min-width: 1024px)": () => {
        gsap.set(cardRefs.current, {
          x: 0,
          y: 0,
          scale: 0.8, 
          rotation: 0,
        });
      },
  
      // Мобильные
      "(max-width: 1023px)": () => {
        gsap.set(cardRefs.current, {
          x: 0,
          y: 0,
          scale: 1, 
          rotation: 0,
        });
      },
    });

    ScrollTrigger.matchMedia({
      // Десктоп (от 768px и выше)
      '(min-width: 768px)': () => {
        gsap.to(cardRefs.current, {
          x: (i) => {
            if (i === 0) return -300; // первая влево
            if (i === 1) return 0; // вторая остаётся
            if (i === 2) return 300; // третья вправо
            return 0;
          },
          y: (i) => {
            if (i === 0) return 80;
            if (i === 1) return 0;
            if (i === 2) return -80;
            return 0;
          },
          scale: (i) => 0.8 - i * 0.02,
          rotation: (i) => (i === 0 ? -6 : i === 2 ? 6 : 0),
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
      },

      // Мобильные (до 767px)
      '(max-width: 767px)': () => {
        gsap.to(cardRefs.current, {
          x: 0, // все остаются по центру
          y: (i) => {
            if (i === 0) return 180; // первая вниз
            if (i === 1) return 0; // вторая остаётся
            if (i === 2) return 360; // третья ещё дальше вниз
            return 0;
          },
          scale: (i) => 1 - i * 0.02,
          rotation: 0, // без наклона на мобилках
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
      <section ref={sectionRef} className="max-h-[635px] pt-[40px] max-sm:pt-0">
        {/* Заголовок и кнопка */}
        <div className="flex flex-col gap-[30px] max-sm:gap-[20px] relative z-[10] mb-[20px]">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[70px] font-[600] leading-[100%] text-[#F4F4F4] max-sm:text-[30px] max-sm:leading-[36px]">
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
        <div className="relative w-full flex justify-center px-4">
          <div className="relative w-full max-w-[800px] max-xl:max-w-[600px] max-md:max-w-[400px] aspect-[3/2]">
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
