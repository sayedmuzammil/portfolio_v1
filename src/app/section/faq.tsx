'use client';

import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuestionList } from '../../../data/questions-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { motion } from 'motion/react';

const FaqSection = () => {
  const [activeCard, setActivCard] = React.useState(0);
  const [expandedIdx, setExpandedIdx] = React.useState<number | null>(null);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  // Re-measure snaps when slide width changes (desktop hover expand)
  React.useEffect(() => {
    api?.reInit();
  }, [expandedIdx, api]);

  // Keep button states & index in sync with Embla
  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setActivCard(api.selectedScrollSnap());
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    api.on('select', onSelect);
    api.on('reInit', onSelect);
    onSelect();
    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  // On mobile, when slide changes, collapse any open card (default closed)
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setExpandedIdx(null);
    }
  }, [activeCard]);

  const prev = () => api?.scrollPrev();
  const next = () => api?.scrollNext();

  // Helper: click to toggle ONLY on mobile; desktop sticks to hover behavior
  const handleCardClick = (idx: number) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setExpandedIdx((curr) => (curr === idx ? null : idx));
      api?.scrollTo(idx);
    }
  };

  return (
    <section
      id="faq"
      className="relative w-full py-10 md:py-20 flex flex-col gap-12 px-4 md:px-35"
    >
      <div className="w-full h-full">
        {/* Header + controls */}
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
                className="h-12 md:max-w-[118px] text-sm md:text-md font-semibold cursor-pointer
               group disabled:bg-transparent disabled:border-2 disabled:border-neutral-600 disabled:cursor-not-allowed "
              >
                <motion.button
                  type="button"
                  onClick={prev}
                  disabled={!canPrev}
                  whileHover={canPrev ? { y: -2 } : {}}
                  whileTap={canPrev ? { scale: 0.96 } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    mass: 0.6,
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:-translate-x-1"
                    >
                      ‹
                    </span>
                    PREV
                  </span>
                </motion.button>
              </Button>
              <Button
                asChild
                variant="default"
                className="h-12 md:max-w-[118px] text-sm md:text-md font-semibold cursor-pointer
               group disabled:bg-transparent disabled:border-2 disabled:border-neutral-600 disabled:cursor-not-allowed"
              >
                <motion.button
                  type="button"
                  onClick={next}
                  disabled={!canNext}
                  whileHover={canNext ? { y: -2 } : {}}
                  whileTap={canNext ? { scale: 0.96 } : {}}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    mass: 0.6,
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    NEXT
                    <span
                      aria-hidden
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      ›
                    </span>
                  </span>
                </motion.button>
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel */}
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
                // Desktop basis animates; Mobile is always 1-per-view (basis-full)
                const desktopBasis = expanded
                  ? 'md:basis-[379px]'
                  : 'md:basis-[252px]';

                return (
                  <CarouselItem
                    key={item.id}
                    className={`pl-4 flex-none basis-full ${desktopBasis} transition-[flex-basis] duration-300 ease-out`}
                    onMouseEnter={() => setExpandedIdx(idx)} // desktop hover expand
                    onMouseLeave={() => setExpandedIdx(null)} // desktop collapse on hover-out
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => handleCardClick(idx)} // mobile toggle open/close
                      className={`group relative min-h-[356px] md:h-[466px] w-full border-2 border-neutral-900 p-6 rounded-2xl transition-colors duration-500 cursor-pointer

                      /* Mobile: background when open, transparent when closed */
                      ${expanded ? 'bg-question-background' : 'bg-transparent'}

                      /* Desktop: ignore mobile bg; use hover to show background */
                      md:bg-transparent md:hover:bg-question-background
                      `}
                    >
                      <div className="min-h-[356px] md:h-full flex flex-col justify-between ">
                        {/* Top row */}
                        <div className="flex justify-between items-start gap-2 ">
                          <div
                            className={`relative rounded-full w-[80px] h-[80px] bg-photo-background overflow-hidden
                              ${expanded ? 'block' : 'hidden'} `}
                          >
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

                        {/* Text */}
                        <div className="text-white flex flex-col gap-3">
                          <div className="text-display-sm font-semibold text-white">
                            {item.question}
                          </div>

                          {/* Mobile & Desktop: show answer only when expanded */}
                          <div
                            className={`${
                              expanded ? 'block' : 'hidden'
                            } text-md`}
                          >
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="w-full border border-neutral-900" />
    </section>
  );
};

export default FaqSection;
