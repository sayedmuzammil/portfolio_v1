'use client';

import Image from 'next/image';
import React from 'react';
import { HighlightsData } from '../../../data/highlights-data';
import { motion } from 'framer-motion';

const HighlightsSection = () => {
  return (
    <div className="mx-3 md:mx-30 my-10 md:my-20  ">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-6 mb-6 md:mb-12  pb-6 md:pb-12 border-b border-neutral-800 w-full h-full ">
        {/* atas */}
        <div className="text-white text-display-md md:text-display-xl font-bold max-w-[756px]">
          I turn ideas and designs into functional, accessible, and performant
          websites{' '}
          <span className="text-primary">
            using modern frontend technologies
          </span>{' '}
          .
        </div>
        <div className="flex flex-col md:min-h-[150px] justify-between items-start ">
          <div className="text-neutral-400 text-lg ">About Me</div>
          <div className="flex flex-row gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
              <Image
                src="/icons/icon-facebook.svg"
                alt="facebook-icon"
                width={10}
                height={20}
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
              <Image
                src="/icons/icon-instagram.svg"
                alt="instagram-icon"
                width={20}
                height={20}
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
              <Image
                src="/icons/icon-linkedIn.svg"
                alt="linkedIn-icon"
                width={16}
                height={16}
              />
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
              <Image
                src="/icons/icon-tiktok.svg"
                alt="tiktok-icon"
                width={17}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* bawah */}
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center ">
          <Image
            src="/images/photo-highlight.svg"
            alt="photo-highlight"
            width={453}
            height={513}
            className=""
          />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 divide-y-2 md:divide-y-0 divide-neutral-800">
            {/* HighlightsSection */}
            {HighlightsData.map((item, id) => (
              <div
                key={id}
                className="flex flex-col gap-6 justify-between py-6 md:py-0 "
              >
                <div className="w-10 h-10">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-fit-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="text-xl font-bold text-white">
                    {item.title}
                  </div>
                  <div className="text-md text-neutral-400">{item.desc}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
