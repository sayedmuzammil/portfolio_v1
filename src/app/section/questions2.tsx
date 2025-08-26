'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuestionList } from '../../../data/questions-data';
import { motion, Transition, useReducedMotion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const QuestionsSection2 = () => {
  // ✅ All hooks stay inside the component body
  const [activeCard, setActivCard] = React.useState(0);
  const [openId, setOpenId] = React.useState<number | null>(null);
  const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    api?.reInit(); // re-measure snaps when a slide changes size
  }, [expandedIdx, api]);

  const visible = 4;
  const maxIndex = Math.max(0, QuestionList.length - visible);

  const prev = () => setActivCard((prev) => Math.max(0, prev - 1));
  const next = () => setActivCard((prev) => Math.min(maxIndex, prev + 1));

  const reduce = useReducedMotion();
  const SPRING: Transition = {
    type: 'spring',
    stiffness: 500,
    damping: 40,
    mass: 0.9,
  };
  const INSTANT: Transition = { type: 'tween', duration: 0 };
  const trackTransition: Transition = reduce ? INSTANT : SPRING;

  return (
    <section className="relative w-full py-10 md:py-20 flex flex-col gap-12 px-4 md:px-35">
      <div className="w-full h-full">
        <div className="flex w-full justify-start mb-10 md:mb-13">
          <div className="w-full flex flex-col md:flex-row gap-6">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="text-display-md md:text-display-2xl font-bold text-white">
                Still Got Questions?
              </div>
              <div className="tex-sm md:text-md text-neutral-400">
                I’ve listed answers to questions I often get as a frontend
                developer.
              </div>
            </div>

            <div className="w-full flex flex-row md:justify-end items-center gap-3">
              <Button
                asChild
                variant="default"
                className="h-12 md:max-w-[118px] text-sm md:text-md font-semibold"
              >
                <motion.button
                  type="button"
                  onClick={prev}
                  disabled={activeCard === 0}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'tween', duration: 0.15 }}
                >
                  PREV
                </motion.button>
              </Button>

              <Button
                asChild
                variant="default"
                className="h-12 md:max-w-[118px] text-sm md:text-md font-semibold"
              >
                <motion.button
                  type="button"
                  onClick={next}
                  disabled={activeCard === maxIndex}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'tween', duration: 0.15 }}
                >
                  NEXT
                </motion.button>
              </Button>
            </div>
          </div>
        </div>

        <div className="h-[356px] md:h-[466px] text-white">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              containScroll: 'trimSnaps',
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent>
              {QuestionList.map((item, idx) => {
                const expanded = expandedIdx === idx;

                return (
                  <CarouselItem
                    key={item.id}
                    // Keep both responsive class tokens so Tailwind sees them at build-time:
                    className={`pl-4 flex-none transition-[flex-basis] duration-300 ease-out ${
                      expanded
                        ? 'basis-[379px] md:basis-[379px]'
                        : 'basis-[252px] md:basis-[252px]'
                    }`}
                    onMouseEnter={() => setExpandedIdx(idx)}
                    onMouseLeave={() => setExpandedIdx(null)}
                    onClick={() => setExpandedIdx(expanded ? null : idx)}
                  >
                    <div
                      className="group relative min-h-[356px] md:h-[466px] w-full
                      border-2 border-neutral-900 p-6 rounded-2xl
                      bg-transparent hover:bg-question-background hover:z-10
                      active:bg-question-background active:z-10
                      transition-colors duration-300 cursor-pointer"
                    >
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex justify-start gap-2 group-hover:justify-between items-start">
                          <div className="relative rounded-full w-[80px] h-[80px] bg-photo-background overflow-hidden hidden group-hover:block">
                            <Image
                              src="/images/image-avatar-profile.svg"
                              alt="avatar1"
                              width={80}
                              height={80}
                              className="absolute"
                            />
                          </div>
                          <Image
                            src="/icons/icon-info.svg"
                            alt="info"
                            width={30}
                            height={30}
                          />
                        </div>

                        <div className="text-white flex flex-col gap-3">
                          <div className="text-display-sm font-semibold text-white">
                            {item.question}
                          </div>
                          {/* Show answer only when expanded (desktop); always on mobile */}
                          <div
                            className={`text-md ${
                              expanded ? 'block' : 'hidden'
                            } md:hidden`}
                          >
                            {item.answer}
                          </div>
                          <div className="text-md hidden md:block">
                            {expanded ? item.answer : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="w-full border border-neutral-900" />
    </section>
  );
};

export default QuestionsSection2;
