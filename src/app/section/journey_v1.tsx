'use client';

import Image from 'next/image';
import React from 'react';
import { JourneyData, type JourneyProps } from '../../../data/journey-data_v1';
import { motion } from 'framer-motion';

const JourneySection = () => {
  return (
    <section className="relative w-full py-10 md:py-20 flex flex-col gap-12 px-4 md:px-35">
      {/* background */}

      <div className=" w-full h-full   ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex w-full justify-start mb-10 md:mb-13 "
        >
          <div className="w-full flex flex-col items-start gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              My Journey in Tech
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              From small gigs to real-world challenges — each experience helped
              me grow as a builder and problem-solver.{' '}
            </div>
          </div>
        </motion.div>
        <div className=" flex flex-col md:flex-row gap-4">
          {JourneyData.map((item: JourneyProps) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 + item.id * 0.1 }}
              className="relative w-full md:max-w-[366px] flex flex-col gap-5 border border-neutral-900 p-5 rounded-2xl"
            >
              <div
                className="absolute left-0 top-6 h-16 w-[3px] rounded-full
                      bg-journey-highlight"
              />

              <div className="w-full flex flex-row justify-between items-center text-white">
                <div className="flex flex-col justify-start">
                  <div className="text-xl  font-bold">{item.role}</div>
                  <div className="text-md ">
                    {item.durationStart} - {item.durationEnd}
                  </div>
                </div>
                <div>
                  <Image
                    src="/icons/icon-work.svg"
                    alt="work"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="border border-neutral-900" />
              <div className="w-full flex flex-col gap-5  text-white">
                <div className="text-md text-neutral-400">{item.desc}</div>
                <div className="w-full flex justify-start">
                  <Image src={item.icon} alt="icon" width={128} height={40} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full border border-neutral-900" />
    </section>
  );
};

export default JourneySection;
