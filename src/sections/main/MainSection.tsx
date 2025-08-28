import Image from 'next/image';

export const MainSection: React.FC = () => {
  return (
    <section className="relative z-10 mb-[150px]">
      <div className='flex justify-center gap-[10px]'>
        <div className="bg-[#101010] relative w-[594px] pl-[23px] pt-[20px] h-[574px] rounded-[30px] border border-[#fff]/10 overflow-hidden">
          <p className="absolute z-[99] font-[600] leading-[36px] text-[30px] text-[#F4F4F4]">
            Собственное <br /> приложение
          </p>
          <Image src="/img/view1.webp" fill alt="img" />
          <div className="h-[40px] z-[99] w-[200px] absolute bottom-[13px] text-[14px] leading-[20px] font-[700] backdrop-blur-[4px] bg-[#fff]/15 rounded-[14px] flex justify-center items-center">
            1 000+ пользователей
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="relative w-[282px] h-[282px] pl-[23px] pt-[20px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
            <div className="absolute z-[99] font-[600] text-[#F4F4F4]">
              <p className="text-[62px] leading-[100%]">
                50+
                <br />
              </p>
              <span className="leading-[36px] text-[30px]">проектов</span>
            </div>
            <Image src="/img/view2.webp" fill alt="img" />
            <p className="absolute bottom-[20px] text-[14px] leading-[20px] text-[#F0F1F3] opacity-70">
              Нам доверяют крупные <br />
              организации
            </p>
          </div>
          <div className="relative flex justify-center items-center w-[282px] h-[282px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
            <Image src="/img/view3.webp" fill alt="img" />
            <Image
              className="absolute z-[99]"
              src="/img/view3-3.webp"
              width={235}
              height={71}
              alt="img"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="relative w-[282px] h-[282px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
            <Image src="/img/view4.webp" fill alt="img" />
          </div>
          <div className="relative flex justify-center items-end w-[282px] pb-[11px] h-[282px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
            <p className="absolute top-[20px] left-[20px] font-[600] leading-[36px] text-[30px] text-[#F4F4F4]">
              Мобильные <br /> приложения
            </p>
            <div className="relative w-[260px] h-[156px] rounded-[20px]">
              <Image src="/img/view5.webp" fill alt="img" />
            </div>
          </div>
        </div>

        <button className="absolute pr-[20px] items-end bottom-[100px] z-[9] bg-[#1D1E1C59]/35 backdrop-blur-[12px] max-w-[350px] w-full h-[150px] rounded-[20px] border border-[#fff]/20 flex justify-between">
          <p className="text-[20px] leading-[24px] pb-[20px] pl-[20px] text-start">
            Оставить заявку <br /> на проект
          </p>
          <Image
            className="absolute top-[20px] right-[20px]"
            src="/arrow.webp"
            width={110}
            height={110}
            alt="img"
          />
        </button>
      </div>

      <div className='mt-[120px]'>
        <p className="leading-[20px] text-[14px] text-[#F0F1F3] opacity-60">
          Все, что вам нужно для продуктивной командной работы:
        </p>
        <p className="text-[#F4F4F4] text-[20px] leading-[24px] mt-[8px]">
          Workspace · Diprofiles · Telegram · Inbox
        </p>
      </div>
    </section>
  );
};
