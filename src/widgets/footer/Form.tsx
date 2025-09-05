'use client';

import { useForm } from 'react-hook-form';
import styles from './ButtonEffect.module.css';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  project: string;
};

export const Form: React.FC = () => {
  const updatePosition = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();

    target.style.setProperty('--x', `${e.clientX - rect.left}px`);
    target.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Форма отправлена:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[640px] max-md:max-w-full">
      <p className="mb-[20px] font-[700] text-[20px] leading-[24px]">
        Оставьте заявку и мы свяжемся с вами:
      </p>

      <div className="flex flex-col gap-[10px] max-md:grid max-md:grid-cols-1 max-md:w-full">
        <div className="flex gap-[10px] max-md:flex-col max-md:w-full">
          <div className="max-md:w-full">
            {errors.name && (
              <p className="text-red-400 mb-[2px] text-[14px]">{errors.name.message}</p>
            )}
            <input
              {...register('name', { required: 'Укажите ваше имя' })}
              className="w-[315px] h-[50px] pl-[20px] rounded-[15px] bg-[#18181C] border border-[#fff]/10 outline-none text-[#fff] text-[14px] leading-[20px] placeholder:text-[#F4F4F480]/50 placeholder:leading-[20px] placeholder:text-[14px] max-md:w-full"
              type="text"
              placeholder="Как к вам обращаться"
            />
          </div>
          <div className="max-md:w-full">
            {errors.email && (
              <p className="text-red-400 mb-[2px] text-[14px]">{errors.email.message}</p>
            )}
            <input
              {...register('email', {
                required: 'Укажите вашу почту',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Введите корректный email',
                },
              })}
              className="w-[315px] h-[50px] pl-[20px] rounded-[15px] bg-[#18181C] border border-[#fff]/10 outline-none text-[#fff] text-[14px] leading-[20px] placeholder:text-[#F4F4F480]/50 placeholder:leading-[20px] placeholder:text-[14px] max-md:w-full"
              type="email"
              placeholder="Ваша почта"
            />
          </div>
        </div>
        <div className="flex gap-[10px] max-md:flex-col max-md:w-full">
          <div className="max-md:w-full">
            {errors.phone && (
              <p className="text-red-400 mb-[2px] text-[14px]">{errors.phone.message}</p>
            )}
            <input
              {...register('phone', {
                required: 'Укажите ваш телефон',
                pattern: {
                  value: /^\+?[0-9\s\-()]{7,20}$/,
                  message: 'Введите корректный номер',
                },
              })}
              className="w-[315px] h-[50px] pl-[20px] rounded-[15px] bg-[#18181C] border border-[#fff]/10 outline-none text-[#fff] text-[14px] leading-[20px] placeholder:text-[#F4F4F480]/50 placeholder:leading-[20px] placeholder:text-[14px] max-md:w-full"
              type="text"
              placeholder="Ваш номер телефона"
            />
          </div>
          <div className="max-md:w-full">
            {errors.project && (
              <p className="text-red-400 mb-[2px] text-[14px]">{errors.project.message}</p>
            )}
            <input
              {...register('project', { required: 'Опишите ваш проект' })}
              className="w-[315px] h-[50px] pl-[20px] rounded-[15px] bg-[#18181C] border border-[#fff]/10 outline-none text-[#fff] text-[14px] leading-[20px] placeholder:text-[#F4F4F480]/50 placeholder:leading-[20px] placeholder:text-[14px] max-md:w-full"
              type="text"
              placeholder="Ваш проект"
            />
          </div>
        </div>
      </div>

      <button
        className={styles.button}
        onMouseMove={updatePosition}
        onMouseOut={updatePosition}
        type="submit">
        Отправить
      </button>

      <p className="text-[14px] leading-[20px] text-[#F4F4F4] mt-[20px] max-sm:text-center">
        <span className="opacity-60">
          Нажимая кнопку ”Отправить”, вы даете согласие на обработку{' '}
        </span>
        <span className="underline">персональных данных</span>.
      </p>
    </form>
  );
};
