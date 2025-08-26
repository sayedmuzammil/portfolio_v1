import Image from 'next/image';
import React from 'react';
import { TrustedVoices } from '../../../data/trusted-voice-data';

const TrustedBySection = () => {
  const testimony1 = TrustedVoices.find((item) => item.id === 1);
  const testimony2 = TrustedVoices.find((item) => item.id === 2);
  const testimony3 = TrustedVoices.find((item) => item.id === 3);
  const testimony4 = TrustedVoices.find((item) => item.id === 4);

  const rating1 = testimony1?.rating ?? 0;
  const rating2 = testimony2?.rating ?? 0;
  const rating3 = testimony3?.rating ?? 0;
  const rating4 = testimony4?.rating ?? 0;

  return (
    <section className=" w-full py-10 md:py-20">
      {/* background */}

      <div className=" w-full h-full px-4 md:px-35  ">
        <div className="flex w-full justify-center mb-13 ">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Trusted Voices
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              Here’s what people say about working with me — across
              projects, teams, and timelines.
            </div>
          </div>
        </div>
        <div className=" p-3 md:p-6 w-full">
          <div className="flex flex-col md:flex-row text-white w-full h-full gap-5  ">
            <div className="relative w-full md:max-w-[448px] ">
              <div className=" absolute -z-10 w-full h-full  ">
                <div
                  className="absolute -z-10 w-full h-full
                           bg-radial-[at_0%_0%] from-[#149BB0]/25 to-[#149BB0]/0 to-[50%]"
                />
              </div>
              <div className="p-5 h-full flex flex-col justify-between items-between gap-6  border-2 border-neutral-900 ">
                <div className="flex flex-col gap-2 justify-start items-start">
                  <div className="text-display-lg font-bold">
                    {testimony1?.highlight}
                  </div>
                  <div className="text-display-xs font-bold">
                    {testimony1?.title}
                  </div>
                  <div>
                    <div className="flex flex-row gap-2">
                      {Array.from({ length: rating1 }).map((_, i) => (
                        <Image
                          key={i}
                          src="/icons/icon-star.svg"
                          alt="star"
                          width={24}
                          height={24}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-md text-neutral-400">
                    {' '}
                    {testimony1?.desc}
                  </div>
                </div>

                <div className="w-full flex flex-row justify-between">
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-row items-start">
                      <Image
                        src={
                          testimony1?.icon ??
                          '/icons/icon-avatar1.svg'
                        }
                        alt="avatar-icon"
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <div className="h-[30px]">
                        {' '}
                        {testimony1?.name}
                      </div>
                      <div className="h-[30px]">
                        {' '}
                        {testimony1?.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end">
                    {' '}
                    <Image
                      src="/icons/icon-quote.svg"
                      alt="quote-icon"
                      width={38}
                      height={28}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-6">
                <div className="border-2 border-neutral-900 p-5 ">
                  <div className="flex flex-grow flex-basis  mb-11 gap-3 ">
                    <div className="flex flex-col gap-2 justify-start items-start ">
                      <div className="text-display-lg font-bold">
                        {testimony2?.highlight}
                      </div>
                      <div className="text-display-xs font-bold">
                        {testimony2?.title}
                      </div>
                      <div>
                        <div className="flex flex-row gap">
                          {Array.from({ length: rating2 }).map(
                            (_, i) => (
                              <Image
                                key={i}
                                src="/icons/icon-star.svg"
                                alt="star"
                                width={24}
                                height={24}
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="text-md text-neutral-400">
                        {' '}
                        {testimony2?.desc}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-row items-start">
                        <Image
                          src={
                            testimony2?.icon ??
                            '/icons/icon-avatar1.svg'
                          }
                          alt="avatar-icon"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <div className="h-[30px]">
                          {' '}
                          {testimony2?.name}
                        </div>
                        <div className="h-[30px]">
                          {' '}
                          {testimony2?.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end">
                      {' '}
                      <Image
                        src="/icons/icon-quote.svg"
                        alt="quote-icon"
                        width={38}
                        height={28}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row flex-grow flex-basis gap-5 ">
                  <div className="w-full h-auto border-2 border-neutral-900 p-5 flex flex-col justify-between">
                    <div className="flex flex-col justify-start items-start  mb-11 gap-3">
                      <div>
                        <div className="flex flex-row gap">
                          {Array.from({ length: rating3 }).map(
                            (_, i) => (
                              <Image
                                key={i}
                                src="/icons/icon-star.svg"
                                alt="star"
                                width={24}
                                height={24}
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="text-md text-neutral-400">
                        {' '}
                        {testimony3?.desc}
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-start">
                          <Image
                            src={
                              testimony3?.icon ??
                              '/icons/icon-avatar1.svg'
                            }
                            alt="avatar-icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <div className="h-[30px]">
                            {' '}
                            {testimony3?.name}
                          </div>
                          <div className="h-[30px]">
                            {' '}
                            {testimony3?.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end">
                        {' '}
                        <Image
                          src="/icons/icon-quote.svg"
                          alt="quote-icon"
                          width={38}
                          height={28}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-auto flex-grow flex-basis border-2 border-neutral-900 p-5 flex flex-col justify-between">
                    <div className="flex flex-col justify-start items-start mb-11 gap-3">
                      <div>
                        <div className="flex flex-row gap">
                          {Array.from({ length: rating4 }).map(
                            (_, i) => (
                              <Image
                                key={i}
                                src="/icons/icon-star.svg"
                                alt="star"
                                width={24}
                                height={24}
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="text-md text-neutral-400">
                        {' '}
                        {testimony4?.desc}
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between ">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row items-start">
                          <Image
                            src={
                              testimony4?.icon ??
                              '/icons/icon-avatar1.svg'
                            }
                            alt="avatar-icon"
                            width={48}
                            height={48}
                          />
                        </div>
                        <div>
                          <div className="h-[30px]">
                            {' '}
                            {testimony4?.name}
                          </div>
                          <div className="h-[30px]">
                            {' '}
                            {testimony4?.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end">
                        {' '}
                        <Image
                          src="/icons/icon-quote.svg"
                          alt="quote-icon"
                          width={38}
                          height={28}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
