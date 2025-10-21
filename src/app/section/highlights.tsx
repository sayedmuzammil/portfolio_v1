'use client';

import Image from 'next/image';
import React from 'react';
import {
  LeaderHighlightsData,
  BuilderHighlightsData,
} from '../../../data/highlights-data';
import { AnimatePresence, motion } from 'framer-motion';
import { useModeContext } from '@/context/mode';
import ToolsSection from './tools';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN: [number, number, number, number] = [0.4, 0, 1, 1];

export const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE_OUT } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: EASE_IN } },
};

const HighlightsSection = () => {
  const mode = useModeContext();

  return (
    <section
      id="about"
      className="h-svh w-full md:h-[100svh]  border-b border-border/10 top-0 "
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col gap-8 mx-4 md:mx-30 min-h-svh justify-center items-center ">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mode.mode}
              {...fadeSlide}
              className="flex flex-col justify-start md:justify-center items-start md:items-center w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex w-full justify-start mb-3 md:mb-10"
              >
                <div className="w-full flex flex-col items-start gap-4">
                  <div className="text-display-md md:text-[clamp(2.5rem,5vw,5rem)] font-bold text-white">
                    About Me
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-[clamp(1rem,2vw,2rem)] md:font-bold w-full"
              >
                {mode.mode === 'Leader' ? (
                  <div className="text-white">
                    With over a decade in IT and 5+ years guiding Agile teams, I
                    turn strategy into delivery. I help teams{' '}
                    <span className="text-mode1-300 font-bold">
                      collaborate, resolve challenges early, and deliver
                      outcomes that matter.
                    </span>
                    My leadership blends data-driven insight, empathy, and a
                    focus on continuous improvement.
                  </div>
                ) : (
                  <div className="text-white ">
                    I design and develop web experiences that are fast,
                    accessible, and visually consistent. I transform ideas into{' '}
                    <span className="text-mode2-300 font-bold">
                      clean, scalable interfaces{' '}
                    </span>
                    that users love to interact with.
                  </div>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="pb-6 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
                {mode.mode === 'Leader'
                  ? LeaderHighlightsData.map((item, id) => (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + id * 0.1 }}
                        className="flex flex-col gap-3 md:gap-6 justify-between py-0"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-transparent">
                          <item.icon className="text-mode1-200 w-10 h-10" />
                        </div>
                        <motion.div>
                          <div className="text-xl font-bold text-white">
                            {item.title}
                          </div>
                          <div className="text-md text-neutral-400">
                            {item.desc}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))
                  : BuilderHighlightsData.map((item, id) => (
                      <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + id * 0.1 }}
                        className="flex flex-col gap md:gap-6 justify-between py-0"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-transparent">
                          <item.icon className="text-mode2-300 w-7 h-7 md:w-10 md:h-10" />
                        </div>
                        <motion.div>
                          <div className="text-xl font-bold text-white">
                            {item.title}
                          </div>
                          <div className="text-md text-neutral-400">
                            {item.desc}
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
              </div>
              <div className="md:hidden flex justify-center w-full ">
                <Carousel className="max-w-[80%] ">
                  <CarouselContent>
                    {mode.mode === 'Leader'
                      ? LeaderHighlightsData.map((item, id) => (
                          <CarouselItem key={id}>
                            <motion.div
                              key={id}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: 0.3 + id * 0.1,
                              }}
                              className="flex flex-col gap-3 md:gap-6 justify-between py-0"
                            >
                              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-transparent">
                                <item.icon className="text-mode1-200 w-10 h-10" />
                              </div>
                              <motion.div>
                                <div className="text-xl font-bold text-white">
                                  {item.title}
                                </div>
                                <div className="text-md text-neutral-400">
                                  {item.desc}
                                </div>
                              </motion.div>
                            </motion.div>
                          </CarouselItem>
                        ))
                      : BuilderHighlightsData.map((item, id) => (
                          <CarouselItem key={id}>
                            <motion.div
                              key={id}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: 0.3 + id * 0.1,
                              }}
                              className="flex flex-col gap-3 md:gap-6 justify-between py-0"
                            >
                              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-transparent">
                                <item.icon className="text-mode2-300 w-10 h-10" />
                              </div>
                              <motion.div>
                                <div className="text-xl font-bold text-white">
                                  {item.title}
                                </div>
                                <div className="text-md text-neutral-400">
                                  {item.desc}
                                </div>
                              </motion.div>
                            </motion.div>
                          </CarouselItem>
                        ))}
                  </CarouselContent>
                  <CarouselPrevious
                    className={`w-7 h-7 
                    ${
                      mode.mode === 'Leader'
                        ? 'bg-mode1-200 hover:bg-mode1-200/90'
                        : 'bg-mode2-300 hover:bg-mode2-300/90 '
                    }`}
                  />
                  <CarouselNext
                    className={`w-7 h-7 
                    ${
                      mode.mode === 'Leader'
                        ? 'bg-mode1-200 hover:bg-mode1-200/90'
                        : 'bg-mode2-300 hover:bg-mode2-300/90 '
                    }`}
                  />
                </Carousel>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[80%]">
            <ToolsSection />
          </div>
        </div>
        <Link href="#projects">
          <Image
            src="/icons/scroll-down.gif"
            alt="Scroll to Projects"
            width={48}
            height={96}
            className=" absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 animate-bounce "
          />
        </Link>
      </div>
    </section>
  );
};

export default HighlightsSection;
