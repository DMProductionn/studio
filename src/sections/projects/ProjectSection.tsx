import Image from "next/image";

export const ProjectSection: React.FC = () => {
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
      <div className="flex flex-col gap-[30px] relative z-[10] px-6">
        <h2 className="text-[70px] font-[600] leading-[100%] text-[#F4F4F4]">
          Наши проекты
        </h2>
        <button className="bg-[#FF4718] border-[2px] border-[#fff]/30 rounded-[15px] max-w-[220px] w-full h-[50px] rounded-tl-[0px]">
          Смотреть все проекты
        </button>
      </div>

      {/* Проекты */}
      <div className="relative mt-[60px] px-6 min-h-[600px]">
        <div className="relative w-full h-[700px]">
          <Image
            className="absolute left-[60px] top-[30px] z-[3]"
            alt="project1"
            width={658}
            height={467}
            src="/img/project1.webp"
          />
          <Image
            className="absolute left-[350px] top-[-100px] z-[2]"
            alt="project2"
            width={658}
            height={467}
            src="/img/project2.webp"
          />
          <Image
            className="absolute left-[570px] top-[-200px]"
            alt="project3"
            width={658}
            height={467}
            src="/img/project3.webp"
          />
        </div>
      </div>
    </section>
  );
};
