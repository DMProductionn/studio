import Image from 'next/image';


export const MainSection: React.FC = () => {
  return (
    <section className="relative z-10 mb-[150px]">
      <div className="flex max-xl:flex-wrap justify-center gap-[10px] relative">
        <div className="relative w-[594px] h-[574px] max-w-[90vw] max-h-[90vw] rounded-[30px] border border-[#fff]/10 overflow-hidden bg-[#101010] pl-[23px] pt-[20px] max-sm:pl-[13px] max-sm:pt-[13px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/img/view1.webp"
              fill
              alt="Собственное приложение"
              className="object-cover pointer-events-none"
            />
          </div>

          <p className="absolute z-[99] font-[600] leading-[clamp(24px,4vw,36px)] text-[clamp(20px,3vw,30px)] text-[#F4F4F4] max-sm:text-[20px] max-sm:leading-[120%]">
            Собственное <br /> приложение
          </p>

          <div className="absolute max-w-[200px] w-full bottom-[13px] z-[99] w-[50%] h-[clamp(30px,4vw,40px)] text-[clamp(12px,2vw,14px)] leading-[20px] font-[700] backdrop-blur-[4px] bg-[#fff]/15 rounded-[14px] flex justify-center items-center">
            1 000+ пользователей
          </div>
        </div>
        <div className="flex gap-[10px]">
          <div className="flex flex-col gap-[10px]">
            <div className="relative w-[282px] h-[282px] max-w-[45vw] max-h-[45vw] pl-[23px] pt-[20px] max-sm:pt-[13px] max-sm:pl-[13px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
              <div className="absolute z-[99] font-[600] text-[#F4F4F4]">
                <p className="text-[62px] leading-[100%] max-sm:text-[35px]">
                  50+
                  <br />
                </p>
                <span className="leading-[36px] text-[30px] max-sm:text-[17px] max-sm:leading-[120%]">
                  проектов
                </span>
              </div>
              <Image src="/img/view2.webp" fill alt="img" />
              <p className="absolute bottom-[20px] text-[14px] max-sm:text-[12px] max-sm:leading-[18px] leading-[20px] text-[#F0F1F3] opacity-70">
                Нам доверяют крупные <br />
                организации
              </p>
            </div>
            <div className="relative flex justify-center items-center w-[282px] px-[8px] h-[282px] max-w-[45vw] max-h-[45vw] pt-[20px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
              <Image src="/img/view3.webp" fill alt="img" />
              <div className="relative max-w-[235px] w-full h-[71px]">
                <Image
                  className="absolute z-[99]"
                  src="/img/view3-3.webp"
                  width={235}
                  height={71}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="relative w-[282px] h-[282px] max-w-[45vw] max-h-[45vw] pl-[23px] pt-[20px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
              <Image src="/img/view4.webp" fill alt="img" />
            </div>
            <div className="relative w-[282px] h-[282px] max-w-[45vw] max-h-[45vw] pl-[23px] pr-[23px] pt-[20px] pb-[10px] bg-[#2F3035] rounded-[30px] border border-[#fff]/10 overflow-hidden">
              <p className="font-[600] leading-[36px] mb-[15px] text-[30px] text-[#F4F4F4] max-sm:text-[18px] max-sm:leading-[120%]">
                Мобильные <br /> приложения
              </p>

              <div className="relative w-[260px] max-w-full mx-auto rounded-[20px] aspect-[260/156]">
                <Image src="/img/view5.webp" alt="img" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        <button className="absolute p-[20px] max-sm:p-[13px] items-end -bottom-[70px] max-sm:-bottom-[40px] z-[9] bg-[#1D1E1C59]/35 backdrop-blur-[12px] max-w-[350px] max-sm:max-w-[200px] w-full h-[150px] max-sm:h-[86px] rounded-[20px] border border-[#fff]/20 flex justify-between">
          <p className="text-[20px] leading-[24px] text-start max-sm:text-[12px] max-sm:leading-[14px]">
            Оставить заявку <br /> на проект
          </p>
          <div className="relative w-full max-w-[120px] max-sm:max-w-[60px] h-full">
            <Image fill className="absolute top-[20px] right-[20px]" src="/arrow.webp" alt="img" />
          </div>
        </button>
      </div>

      <div className="mt-[120px] max-sm:mt-[75px]">
        <p className="leading-[20px] text-[14px] text-[#F0F1F3] opacity-60 max-sm:text-[12px] max-sm:leading-[18px]">
          Все, что вам нужно для продуктивной командной работы:
        </p>
        <p className="text-[#F4F4F4] text-[20px] leading-[24px] mt-[8px] max-sm:text-[16px] max-sm:leading-[24px]">
          Workspace · Diprofiles · Telegram · Inbox
        </p>
      </div>
    </section>
  );
};
