'use client';

import React from 'react';
import Image from 'next/image';
import { useModeContext } from '@/context/mode';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';

// Easing presets (cubic-bezier)
const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN: [number, number, number, number] = [0.4, 0, 1, 1];

export const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE_OUT } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: EASE_IN } },
};

const HeroSection = () => {
  const { mode, toggleMode } = useModeContext();

  const handleModeChange = (newMode: 'Leader' | 'Builder') => {
    if (mode !== newMode) {
      toggleMode();
    }
  };

  return (
    <section
      id="hero"
      className="h-svh w-full md:h-[100svh]  border-b border-border/10 top-0 "
    >
      <div className="relative w-full h-full">
        {/* background */}
        <div className="absolute -z-10 w-full h-full md:-translate-y-[112px]">
          <AnimatePresence mode="wait" initial={false}>
            {mode === 'Leader' && (
              <motion.div
                key="bg-leader"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.35, ease: EASE_OUT },
                }}
                exit={{
                  y: 0,
                  transition: { duration: 0.15, ease: EASE_IN },
                }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-radial-[at_0%_0%] from-mode1-300/60 to-mode1-300/0 to-[50%]" />
              </motion.div>
            )}
            {mode === 'Builder' && (
              <motion.div
                key="bg-builder"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.35, ease: EASE_OUT },
                }}
                exit={{
                  y: 0,
                  transition: { duration: 0.15, ease: EASE_IN },
                }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-radial-[at_0%_0%] from-mode2-300/60 to-mode2-300/0 to-[50%]" />
              </motion.div>
            )}
          </AnimatePresence>
          <Image
            src="/images/bg-hero.png"
            alt="Sayed"
            width={1074}
            height={488}
            className="top-0 absolute -z-10 md:ml-36 brightness-50"
          />
        </div>

        <div className="w-full h-full px-4 md:px-35 text-white justify-center flex flex-col gap-8 items-center">
          <div className="flex flex-row gap-3 border-2 border-neutral-800 bg-gray-700 md:mx-5 w-full md:w-70 py-2 px-4 justify-center items-center rounded-full">
            <div
              onClick={() => handleModeChange('Leader')}
              className={`border p-3 w-full text-center rounded-full ${
                mode === 'Leader'
                  ? 'bg-mode1-200 cursor-pointer border-border font-bold'
                  : 'bg-transparent text-muted-foreground border-muted-foreground'
              }`}
            >
              Leader
            </div>

            <div className="h-8 w-px bg-muted-foreground" />

            <div
              onClick={() => handleModeChange('Builder')}
              className={`border p-3 w-full text-center rounded-full ${
                mode === 'Builder'
                  ? 'bg-mode2-200 cursor-pointer border-border font-bold'
                  : 'bg-transparent text-muted-foreground border-muted-foreground'
              }`}
            >
              Builder
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center text-center">
            <div>Hello, i am</div>
            <div className="text-5xl md:text-7xl font-bold">Sayed Muzammil</div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mode}
                {...fadeSlide}
                className="text-lg md:text-2xl mb-5"
              >
                {mode === 'Leader'
                  ? 'Scrum Master & Project Manager'
                  : 'Front-End Developer'}
              </motion.div>
            </AnimatePresence>
            <div className="text-2xl md:text-3xl text-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`leader-build-${mode}`}
                  {...fadeSlide}
                  className={`font-bold text-4xl ${
                    mode === 'Leader' ? 'text-mode1-300' : 'text-mode2-300'
                  }`}
                >
                  {mode === 'Leader' ? ' LEAD ' : ' BUILD '}
                </motion.span>
              </AnimatePresence>
              with strategy and{' '}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`solve-ship-${mode}`}
                  {...fadeSlide}
                  className={`font-bold text-4xl ${
                    mode === 'Leader' ? 'text-mode1-300' : 'text-mode2-300'
                  }`}
                >
                  {mode === 'Leader' ? ' SOLVE ' : ' SHIP '}
                </motion.span>
              </AnimatePresence>
              impactful
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`problems-products-${mode}`}
                  {...fadeSlide}
                  className={`font-bold text-4xl ${
                    mode === 'Leader' ? 'text-mode1-300' : 'text-mode2-300'
                  }`}
                >
                  {mode === 'Leader' ? ' PROBLEMS ' : ' PRODUCTS '}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <Link href="#about">
          <Image
            src="/icons/scroll-down.gif"
            alt="Scroll to About"
            width={48}
            height={96}
            className=" absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 animate-bounce "
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
