'use client';

import React from 'react';
import {
  BuilderCapabilitiesData,
  LeaderCapabilitiesData,
} from '../../../data/capabilities-data';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { useModeContext } from '@/context/mode';
import { AnimatePresence, motion } from 'motion/react';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN: [number, number, number, number] = [0.4, 0, 1, 1];

export const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE_OUT } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: EASE_IN } },
};

const CapabilitiesSection = () => {
  const { mode } = useModeContext();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={mode} {...fadeSlide} className="w-full mt-20 md:mt-0">
        <div
          className={`relative h-15.5 md:h-[80px] overflow-hidden 
        ${mode === 'Leader' ? 'bg-mode1-300' : 'bg-mode2-100'}
        
        `}
        >
          <div className="w-full h-full overflow-hidden mix-blend-luminosity">
            <Marquee className="py-4 h-full">
              {mode === 'Leader'
                ? LeaderCapabilitiesData.map((item) => (
                    <li
                      key={`${item.capability}`}
                      className="flex items-center justify-center"
                    >
                      <span className="text-white text-xl md:text-3xl font-bold">
                        {item.capability}
                      </span>
                      <Image
                        src="/icons/icon-capabilities.svg"
                        alt="icon-capabilities"
                        width={40}
                        height={40}
                        className="ml-[3rem] inline-block h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
                      />
                    </li>
                  ))
                : BuilderCapabilitiesData.map((item) => (
                    <li
                      key={`${item.capability}`}
                      className="flex items-center justify-center"
                    >
                      <span className="text-white text-xl md:text-3xl font-bold">
                        {item.capability}
                      </span>
                      <Image
                        src="/icons/icon-capabilities.svg"
                        alt="icon-capabilities"
                        width={40}
                        height={40}
                        className="ml-[3rem] inline-block h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
                      />
                    </li>
                  ))}
            </Marquee>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CapabilitiesSection;
