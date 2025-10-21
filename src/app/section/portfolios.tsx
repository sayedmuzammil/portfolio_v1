'use client';

import Image from 'next/image';
import React from 'react';
import {
  BuilderPortfoliosData,
  LeaderPortfoliosData,
  type PortfolioProps,
} from '../../../data/portfolio-data';
import { AnimatePresence, motion } from 'framer-motion';

import { Check } from 'lucide-react';
import { useModeContext } from '@/context/mode';
import Link from 'next/link';

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_IN: [number, number, number, number] = [0.4, 0, 1, 1];

export const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: EASE_OUT } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.16, ease: EASE_IN } },
};

const PortfoliosSection = () => {
  const mode = useModeContext();
  const [selectedProject, setSelectedProject] = React.useState<number | null>(
    1
  );
  const [selectedProject2, setSelectedProject2] =
    React.useState<PortfolioProps>(LeaderPortfoliosData[0]);
  return (
    <section
      id="projects"
      className="h-svh w-full md:h-[100svh]  border-b border-border/10 top-0 "
    >
      <div className="relative w-full h-full">
        <div className="flex flex-col gap-8 mx-4 md:mx-30 min-h-svh justify-center items-center ">
          {' '}
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
                    Key Projects
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="hidden md:flex w-full justify-center items-center">
            <div className="h-100 flex flex-nowrap justify-start">
              {mode.mode === 'Leader'
                ? LeaderPortfoliosData.map((item: PortfolioProps) => (
                    <div
                      key={item.id}
                      className=" h-full mx-4 "
                      onClick={() => setSelectedProject(item.id)}
                    >
                      <div className=" cursor-pointer flex flex-col items-end ">
                        <input
                          name="portfolio"
                          type="radio"
                          id={item.id.toString()}
                          checked={selectedProject === item.id}
                          onChange={() => setSelectedProject(item.id)}
                          className="hidden"
                        />
                      </div>
                      {selectedProject === item.id ? (
                        <div className="h-full w-200 p-4 border  rounded-md  flex bg-gray-950 text-white justify-center items-center hover:scale-105  duration-500 transition-all shadow-lg shadow-mode1-100/50 border-mode1-300">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="flex flex-col gap-5"
                          >
                            <div className="flex justify-between items-center mb-5 font-bold">
                              <div className="text-2xl"> {item.title} </div>
                              <div className="bg-mode1-200 border-border px-2 py-1 rounded-md text-sm m-1">
                                {' '}
                                {item.role}{' '}
                              </div>
                            </div>

                            <div className="text-md"> {item.desc} </div>

                            <ul className="list-disc list-inside">
                              {item.impact.map((impact) => (
                                <li
                                  key={impact}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check className="w-4 h-4 text-mode1-100 mt-[2px]" />
                                  <span>{impact}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap mt-2">
                              {item.tags.map((tag) => (
                                <div
                                  key={tag}
                                  className="bg-mode1-200 border-border px-2 py-1 rounded-md text-sm m-1"
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      ) : (
                        <div className="h-full w-20 border rounded-md  flex font-bold bg-gray-950  justify-center items-center hover:scale-105  duration-500 hover:-translate-y-1 transition-all shadow-lg shadow-mode1-100/50 hover:bg-mode1-300/60 border-mode1-300">
                          <div className="text-white h-10 w-10 rounded-full border border-mode1-300 flex justify-center items-center bg-mode1-200 ">
                            {item.id}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                : BuilderPortfoliosData.map((item: PortfolioProps) => (
                    <div
                      key={item.id}
                      className=" h-full mx-4 "
                      onClick={() => setSelectedProject(item.id)}
                    >
                      <div className=" cursor-pointer flex flex-col items-end ">
                        <input
                          name="portfolio"
                          type="radio"
                          id={item.id.toString()}
                          checked={selectedProject === item.id}
                          onChange={() => setSelectedProject(item.id)}
                          className="hidden"
                        />
                      </div>
                      {selectedProject === item.id ? (
                        <div className="h-full w-200 p-4 border  rounded-md  flex bg-gray-950 text-white justify-center items-center hover:scale-105  duration-500 transition-all shadow-lg shadow-mode2-100/50 border-mode2-300">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="flex flex-col gap-5"
                          >
                            <div className="flex justify-between items-center mb-5 font-bold">
                              <div className="text-2xl"> {item.title} </div>
                              <div className="bg-mode2-200 border-border px-2 py-1 rounded-md text-sm m-1">
                                {' '}
                                {item.role}{' '}
                              </div>
                            </div>

                            <div className="text-md"> {item.desc} </div>

                            <ul className="list-disc list-inside">
                              {item.impact.map((impact) => (
                                <li
                                  key={impact}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <Check className="w-4 h-4 text-mode2-100 mt-[2px]" />
                                  <span>{impact}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap mt-2">
                              {item.tags.map((tag) => (
                                <div
                                  key={tag}
                                  className="bg-mode2-200 border-border px-2 py-1 rounded-md text-sm m-1"
                                >
                                  {tag}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      ) : (
                        <div className="h-full w-20 border rounded-md  flex font-bold bg-gray-950 text-white justify-center items-center hover:scale-105  duration-500 hover:-translate-y-1 transition-all shadow-lg shadow-mode2-100/50 hover:bg-mode2-300/60 border-mode2-300">
                          <div className="text-white h-10 w-10 rounded-full border border-mode2-300 flex justify-center items-center bg-mode2-200 ">
                            {item.id}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
            </div>
          </div>
          <div className="md:hidden w-full ">
            {mode.mode === 'Leader' ? (
              <div className="flex flex-col gap-5">
                <div className=" flex flex-row justify-start ">
                  {LeaderPortfoliosData.map((item: PortfolioProps) => (
                    <div
                      key={item.id}
                      className="flex gap-4"
                      onClick={() => setSelectedProject2(item)}
                    >
                      <div className=" cursor-pointer flex flex-row items-end ">
                        <input
                          name="portfolio"
                          type="radio"
                          id={item.id.toString()}
                          checked={selectedProject2.id === item.id}
                          onChange={() => setSelectedProject2(item)}
                          className="hidden"
                        />
                      </div>

                      {selectedProject2.id === item.id ? (
                        <div className="h-12 w-12 border flex font-bold rounded-lg  text-white justify-center items-center hover:scale-105  duration-500 hover:-translate-y-1 transition-all shadow-lg  hover:bg-mode1-300/60 border-mode1-300 bg-mode1-200 shadow-mode1-100/50">
                          <div className=" h-10 w-10 flex justify-center items-center text-white">
                            {item.id}
                          </div>
                        </div>
                      ) : (
                        <div className="h-10 w-10  rounded-md  flex font-bold bg-gray-950 text-white justify-center items-center hover:scale-105  duration-500 hover:-translate-y-1 transition-all  hover:bg-mode1-300/60 border-mode1-300">
                          <div className=" h-8 w-8 rounded-full border  flex justify-center items-center text-background bg-mode1-200 border-mode1-300 ">
                            {item.id}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={selectedProject2.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.28, ease: EASE_OUT },
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                      transition: { duration: 0.18, ease: EASE_IN },
                    }}
                    className="min-h-90 w-full border-2 border-white text-white "
                  >
                    <motion.div className="flex flex-col h-full gap-5 p-4">
                      <div className="flex justify-between items-center font-bold">
                        <div className="text-2xl">
                          {' '}
                          {selectedProject2.title}{' '}
                        </div>
                        <div className="bg-mode1-200 border-border px-2 py-1 rounded-md text-sm m-1">
                          {' '}
                          {selectedProject2.role}{' '}
                        </div>
                      </div>

                      <div className="text-md"> {selectedProject2.desc} </div>

                      <ul className="list-disc list-inside">
                        {selectedProject2.impact.map((impact) => (
                          <li
                            key={impact}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-mode1-100 mt-[2px]" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap mt-2">
                        {selectedProject2.tags.map((tag) => (
                          <div
                            key={tag}
                            className="bg-mode1-200 border-border px-2 py-1 rounded-md text-sm m-1"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className=" flex flex-row justify-start ">
                  {BuilderPortfoliosData.map((item: PortfolioProps) => (
                    <div
                      key={item.id}
                      className="flex gap-3"
                      onClick={() => setSelectedProject2(item)}
                    >
                      <div className=" cursor-pointer flex flex-row items-end ">
                        <input
                          name="portfolio"
                          type="radio"
                          id={item.id.toString()}
                          checked={selectedProject2.id === item.id}
                          onChange={() => setSelectedProject2(item)}
                          className="hidden"
                        />
                      </div>

                      {selectedProject2.id === item.id ? (
                        <div className="h-12 w-12 border flex font-bold rounded-lg  text-white justify-center items-center hover:scale-105  duration-500 hover:-translate-y-1 transition-all shadow-lg  hover:bg-mode2-300/60 border-mode2-300 bg-mode2-200 shadow-mode2-100/50">
                          <div className=" h-10 w-10 flex justify-center items-center text-white">
                            {item.id}
                          </div>
                        </div>
                      ) : (
                        <div className="h-10 w-10  rounded-md  flex font-bold bg-gray-950 text-white justify-center items-center hover:scale-105  duration-500 hover:-translate-y-1 transition-all  hover:bg-mode2-300/60 border-mode2-300">
                          <div className=" h-8 w-8 rounded-full border  flex justify-center items-center text-background bg-mode2-200 border-mode2-300 ">
                            {item.id}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={selectedProject2.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.28, ease: EASE_OUT },
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                      transition: { duration: 0.18, ease: EASE_IN },
                    }}
                    className="min-h-90 w-full border-2 border-white text-white "
                  >
                    <motion.div className="flex flex-col h-full gap-5 p-4">
                      <div className="flex justify-between items-center font-bold">
                        <div className="text-2xl">
                          {' '}
                          {selectedProject2.title}{' '}
                        </div>
                        <div className="bg-mode2-200 border-border px-2 py-1 rounded-md text-sm m-1">
                          {' '}
                          {selectedProject2.role}{' '}
                        </div>
                      </div>

                      <div className="text-md"> {selectedProject2.desc} </div>

                      <ul className="list-disc list-inside">
                        {selectedProject2.impact.map((impact) => (
                          <li
                            key={impact}
                            className="flex items-start gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-mode2-100 mt-[2px]" />
                            <span>{impact}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap mt-2">
                        {selectedProject2.tags.map((tag) => (
                          <div
                            key={tag}
                            className="bg-mode2-200 border-border px-2 py-1 rounded-md text-sm m-1"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
        <Link href="#journey">
          <Image
            src="/icons/scroll-down.gif"
            alt="Scroll to journey"
            width={48}
            height={96}
            className=" absolute bottom-2 md:bottom-5 left-1/2 -translate-x-1/2 animate-bounce "
          />
        </Link>
      </div>
    </section>
  );
};

export default PortfoliosSection;
