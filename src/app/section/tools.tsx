'use client';

import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import React from 'react';
import { ToolsData, type ToolsProps } from '../../../data/tools-data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

const ToolsSection = () => {
  return (
    <section className="mx-3 md:mx-30 py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="flex flex-col md:flex-row justify-between  w-full  "
      >
        <div className="w-full md:w-[367px] flex flex-col justify-between">
          {/* kiri */}
          <div className=" flex flex-col gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Tools I Use to Build
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </div>
          </div>
          <Button
            variant={'flood'}
            size="lg"
            className="h-13 w-full text-sm md:text-md font-semibold mt-6 md:mt-auto"
          >
            <Link href="#contact" className="flex flex-row items-center gap-2">
              <Mail className="mr-2" />
              <span>Send Message</span>
            </Link>
          </Button>
        </div>
        <div className="w-full md:w-[642px] mt-6 md:mt-0 h-full ">
          {/* kanan */}
          <ul className="flex flex-col text-md md:text-xl text-white ">
            {ToolsData.map((item: ToolsProps) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + item.id * 0.1 }}
                className="w-full flex flex-col justify-between items-center  mb-4 first:border-b-2 first:border-neutral-900 border-b-2 border-neutral-900 last:border-b-0"
              >
                <div className="w-full flex flex-col ">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center ">
                      <div className="flex w-15 h-15 justify-center items-center bg-transparent">
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={36}
                          height={36}
                        />
                      </div>
                      <div>{item.label}</div>
                    </div>

                    <motion.div
                      animate={{
                        animationDuration: 2,
                        animationName: 'circOut',
                      }}
                      className="text-md md:text-xl font-bold"
                    >
                      {item.score}
                    </motion.div>
                  </div>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden outline-1">
                  <div
                    className="animate-progress h-full rounded-full bg-primary"
                    style={{ ['--target-width']: item.score } as CSSVars}
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default ToolsSection;
