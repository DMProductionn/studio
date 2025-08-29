'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProjectTest: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Сначала устанавливаем начальное состояние
    gsap.set(cardRefs.current, {
      y: 0,
      scale: 1,
      rotation: 0,
    });

    // Анимация раскрытия карточек
    gsap.to(cardRefs.current, {
      y: (i) => i * -60,       // смещение каждой карточки
      scale: (i) => 1 - i * 0.05,
      rotation: (i) => i * 2,  // лёгкий наклон
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=800',    // длина скролла для анимации
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-visible"
    >
      {/* Фоновые эффекты фиксированные относительно окна */}
      <Image
        className="fixed left-0 top-0 pointer-events-none"
        alt="effect"
        src="/effect/BlurShapes5.webp"
        width={672}
        height={908}
      />
      <Image
        className="fixed right-0 top-0 pointer-events-none"
        alt="effect"
        src="/effect/BlurShapes6.webp"
        width={672}
        height={908}
      />

      {/* Заголовок */}
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'power3.out' }}
        viewport={{ once: true }}
        className="text-[70px] font-bold text-white mb-12 z-10 relative"
      >
        Наши проекты
      </motion.h2>

      {/* Карточки */}
      <div className="relative w-[700px] h-[500px]">
        {['/img/project1.webp', '/img/project2.webp', '/img/project3.webp'].map((src, i) => (
          <div
            key={i}
            ref={(el) => { if (el) cardRefs.current[i] = el; }}
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-2xl shadow-xl"
            style={{ backgroundImage: `url(${src})`, zIndex: 3 - i }}
          />
        ))}
      </div>
    </section>
  );
};
