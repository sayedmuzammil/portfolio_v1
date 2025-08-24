'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { journeyData } from '../../../data/journey-data';
import { Button } from '@/components/ui/button';
import { QuestionList } from '../../../data/questions-data';

const QuestionsSection = () => {
  const [active, setActive] = useState();

  return (
    <section className="relative w-full py-10 md:py-20 flex flex-col gap-12 px-4 md:px-35">
      {/* background */}

      <div className=" w-full h-full">
        <div className="flex w-full justify-start mb-10 md:mb-13 ">
          <div className="w-full flex flex-col items-start gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Still Got Questions?{' '}
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              I’ve listed answers to questions I often get as a frontend
              developer.
            </div>
          </div>
        </div>
        <div className="h-[356px] md:h-[466px] flex flex-col md:flex-row gap-4 overflow-visible">
          {QuestionList.map((item: any) => (
            <div
              key={item.id}
              className="group relative h-full w-full md:w-[252px] hover:w-[379px] border-2 border-neutral-900 p-6 hover:bg-question-background
        hover:z-10
      "
            >
              <div className="h-full flex flex-col justify-between">
                <div
                  className="flex justify-start gap-2
                      group-hover:justify-between items-start"
                >
                  <div className="relative rounded-full w-[80px] h-[80px] bg-photo-background overflow-hidden hidden group-hover:block">
                    <Image
                      src="/images/image-avatar-profile.svg"
                      alt="avatar1"
                      width={80}
                      height={80}
                      className="absolute "
                    />
                  </div>
                  <Image
                    src="/icons/icon-info.svg"
                    alt="info"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="text-white flex flex-col gap-3 justify-start items-start">
                  <div className="text-display-sm font-semibold text-white">
                    {item.question}
                  </div>
                  <div className="text-md text-white hidden group-hover:block">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* {QuestionList.map((item: any) => (
                <div>aaa </div>;

))} */}

          {/* <div className="group flex flex-row h-full w-[252px] border-2 border-neutral-900 p-6 hover:bg-question-background ">
            <div className="h-full flex flex-col justify-between">
              <div
                className="flex  justify-start gap-2
                      group-hover:justify-between items-start"
              >
                <div className="relative rounded-full w-[80px] h-[80px] bg-photo-background overflow-hidden hidden group-hover:block">
                  <Image
                    src="/images/image-avatar-profile.svg"
                    alt="avatar1"
                    width={80}
                    height={80}
                    className="absolute "
                  />
                </div>
                <Image
                  src="/icons/icon-info.svg"
                  alt="info"
                  width={30}
                  height={30}
                />
              </div>

              <div className="text-white flex flex-col gap-3 justify-start items-start">
                <div className="text-display-sm font-semibold text-white">
                  question
                </div>
                <div className="text-md text-white hidden group-hover:block">
                  answer
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-full border border-neutral-900" />
    </section>
  );
};

export default QuestionsSection;
