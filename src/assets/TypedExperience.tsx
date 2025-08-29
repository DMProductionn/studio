'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export const TypedExperience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [start, setStart] = useState(false);
  const [showGray, setShowGray] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    if (isInView) setStart(true);
  }, [isInView]);

  return (
    <div className='h-[110px] mb-[20px]'>
      <motion.h3
        ref={ref}
        className="font-[600] text-[#F4F4F4] text-[50px] leading-[100%] z-[99] max-sm:text-[40px] text-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {start && (
          <motion.div
            className="inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
        
            <span className="block">
              <TypeAnimation
                sequence={[
                  'Более 5 лет опыта ',
                  0,
                  () => setShowGray(true),
                ]}
                speed={80}
                wrapper="span"
                cursor={false}
                repeat={0}
              />
              {showGray && (
                <TypeAnimation
                  sequence={[
                    'в разработке',
                    () => setShowSecondLine(true),
                  ]}
                  speed={80}
                  wrapper="span"
                  cursor={false}
                  repeat={0}
                  className="text-[#9898A6] opacity-60"
                />
              )}
            </span>

       
            {showSecondLine && (
              <motion.div
                className="block mt-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <TypeAnimation
                  sequence={['сайтов и приложений.']}
                  wrapper="span"
                  speed={80}
                  cursor={false}
                  repeat={0}
                  className="block text-[#9898A6] opacity-60"
                />
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.h3>
    </div>
  );
};
