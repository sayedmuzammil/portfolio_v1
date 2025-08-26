import Image from 'next/image';
import React from 'react';
import { journeyData } from '../../../data/journey-data';
import { Button } from '@/components/ui/button';

const JourneySection = () => {
  return (
    <section className="relative w-full py-10 md:py-20 flex flex-col gap-12 px-4 md:px-35">
      {/* background */}

      <div className=" w-full h-full   ">
        <div className="flex w-full justify-start mb-10 md:mb-13 ">
          <div className="w-full flex flex-col items-start gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              My Journey in Tech
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              From small gigs to real-world challenges — each
              experience helped me grow as a builder and
              problem-solver.{' '}
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-4">
          {journeyData.map((item: any) => (
            <div
              key={item.id}
              className="relative w-full md:max-w-[366px] flex flex-col gap-5 border border-neutral-900 p-5 rounded-2xl"
            >
              <div
                className="absolute left-0 top-6 h-16 w-[3px] rounded-full
                      bg-journey-highlight"
              />

              <div className="w-full flex flex-row justify-between items-center text-white">
                <div className="flex flex-col justify-start">
                  <div className="text-xl  font-bold">
                    {item.role}
                  </div>
                  <div className="text-md ">
                    {item.durationStart} - {item.durationEnd}
                  </div>
                </div>
                <div>
                  <Image
                    src="/icons/icon-work.svg"
                    alt="dribble"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="border border-neutral-900" />
              <div className="w-full flex flex-col gap-5  text-white">
                <div className="text-md text-neutral-400">
                  {item.desc}
                </div>
                <div className="w-full flex justify-start">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={128}
                    height={40}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border border-neutral-900" />
      {/* <div>
        <Button
          variant={'default'}
          className="h-13 w-full text-sm md:text-md font-semibold mt-6 md:mt-auto"
        >
          {' '}
          test
        </Button>
      </div> */}
    </section>
  );
};

export default JourneySection;
