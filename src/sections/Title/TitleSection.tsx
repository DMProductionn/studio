'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TitleSection: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const textElements = gsap.utils.toArray<HTMLElement>('.text');

    textElements.forEach((text) => {
      gsap.fromTo(
        text,
        { backgroundSize: '1%' }, 
        {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            start: 'center 80%',
            end: 'center 20%',
            scrub: true,
          },
        },
      );
    });
  }, []);

  return (
    <>

      <div className="mt-[80px] mb-[500px]">
        <h1 className="text">
          Делаем брендинги 
        </h1>
        <h1 className="text">IT-продукты</h1>
      </div>

      <style jsx>{`
        .text {
          font-size: 10vw;
          letter-spacing: -0.01em;
          line-height: 100%;
          margin: 0;
          width: 100%;
          color: rgba(182, 182, 182, 0.2);
          background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
          border-bottom: 1px solid #2f2b28;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </>
  );
};
