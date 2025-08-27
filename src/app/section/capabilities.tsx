'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CapabilitiesData } from '../../../data/capabilities-data';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

const CapabilitiesSection = () => {
  return (
    <div className="w-full mt-20 md:mt-0">
      <div className="relative h-15.5 md:h-[108px] overflow-hidden bg-primary">
        <div className="w-full overflow-hidden mix-blend-luminosity">
          <Marquee className="py-4">
            {CapabilitiesData.map((item) => (
              <li
                key={`${item.capability}`}
                className="flex items-center justify-center"
              >
                <span className="text-white text-xl md:text-display-xl font-bold">
                  {item.capability}
                </span>
                <Image
                  src="/icons/icon-capabilities.svg"
                  alt="icon-capabilities"
                  width={60}
                  height={60}
                  className="ml-3.5 inline-block h-[32px] w-[32px] md:h-[60px] md:w-[60px]"
                />
              </li>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
