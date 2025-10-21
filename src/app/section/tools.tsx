'use client';

import React from 'react';
import {
  BuilderToolsData,
  LeaderToolsData,
  type ToolsProps,
} from '../../../data/tools-data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModeContext } from '@/context/mode';

const ToolsSection = () => {
  const mode = useModeContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {mode.mode === 'Leader'
        ? LeaderToolsData.map((tool: ToolsProps) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: tool.id * 0.1 }}
              className="group flex flex-row flex-grow border h-10 md:h-15 w-full px-3 gap-2 md:gap-3 rounded-md md:font-bold bg-gray-950 text-white justify-center items-center hover:scale-105  duration-300 ease-in-out hover:-translate-y-1 transition delay-150 shadow-md md:shadow-lg shadow-mode1-accent/50 hover:bg-mode1-accent/60 border-mode1-accent "
            >
              <div className="max-w-10 md:h-10 md:max-w-15 bg-transparent flex flex-row justify-center items-center">
                <Image
                  src={tool.icon}
                  alt={tool.label}
                  width={30}
                  height={30}
                  className="rounded-full h-5 w-5 md:max-h-10 object-cover"
                />
              </div>

              <div>{tool.label}</div>
            </motion.div>
          ))
        : BuilderToolsData.map((tool: ToolsProps) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: tool.id * 0.1 }}
              className="group flex flex-row flex-grow border h-10 md:h-15 w-full px-3 gap-2 md:gap-3 rounded-md md:font-bold bg-gray-950 text-white justify-center items-center hover:scale-105  duration-300 ease-in-out hover:-translate-y-1 transition delay-150 shadow-md md:shadow-lg shadow-mode2-accent/50 hover:bg-mode2-accent/60 border-mode2-accent"
            >
              <div className="max-w-10 md:h-10 md:max-w-15 bg-transparent flex flex-row justify-center items-center">
                <Image
                  src={tool.icon}
                  alt={tool.label}
                  width={30}
                  height={30}
                  className="rounded-full h-5 w-5 md:max-h-10 object-cover"
                />
              </div>

              <div>{tool.label}</div>
            </motion.div>
          ))}
    </div>
  );
};

export default ToolsSection;
