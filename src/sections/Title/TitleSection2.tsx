import Image from 'next/image';

export const TitleSection2: React.FC = () => {
  return (
    <section className="mb-[80px] max-sm:mb-[25px]">
      <Image
        className="pointer-events-none absolute left-0 -z-10"
        src="/effect/BlurShapes2.webp"
        width={672}
        height={908}
        alt="img"
      />
      <Image
        className="pointer-events-none absolute right-0 -z-10"
        src="/effect/BlurShapes1.webp"
        width={672}
        height={908}
        alt="img"
      />
      <h1 className="text-center text-gray text-[90px] leading-[90px] font-[600] mt-[100px] max-sm:mt-[30px] max-sm:text-[30px] max-sm:leading-[36px]">
        Делаем брендинги
        <br />
        <span className="text-[#fff]">
          <span className="text-gray">и</span> IT-продукты
        </span>
      </h1>

      <div className="max-w-[632px] max-sm:max-w-[300px] w-full mx-auto mt-[30px]">
        <p className="text-center text-[14px] leading-[20px] text-[#F0F1F3] opacity-60 max-sm:hidden">
          “Мы помогаем брендам создавать содержательные истории и привлекательные визуальные
          эффекты, которые находят глубокий отклик у их аудитории, укрепляют связи, повышают
          лояльность и способствуют устойчивому долгосрочному росту”
        </p>
        <p className="text-center text-[14px] leading-[20px] text-[#F0F1F3] opacity-60 hidden max-sm:block">
          Мы помогаем брендам создавать содержательные истории и привлекательные визуальные эффекты
        </p>
      </div>
    </section>
  );
};
