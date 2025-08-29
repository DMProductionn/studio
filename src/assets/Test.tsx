import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinScrollAnimation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = section.querySelector(".text");

    // Приклеиваем секцию на время анимации
    gsap.to(text, {
      y: -200,          // анимация текста вверх
      scale: 1.2,       // немного увеличиваем
      rotation: 5,      // лёгкий поворот для динамики
      scrollTrigger: {
        trigger: section,
        start: "top top",  // секция достигла верха экрана
        end: "+=1000",      // на сколько пикселей "заморозить" скролл
        scrub: true,       // плавная привязка к скроллу
        pin: true,         // фиксируем секцию на экране
      },
    });
  }, []);

  return (
    <div className="space-y-32 p-10">
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white text-4xl font-bold relative overflow-hidden"
      >
        <div className="text">Эффект замороженного скролла</div>
      </section>
    </div>
  );
}
