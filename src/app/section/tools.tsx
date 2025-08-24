import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import React from 'react';
import { ToolsData } from '../../../data/tools-data';
import Image from 'next/image';

const ToolsSection = () => {
  return (
    <section className="mx-3 md:mx-30 py-10 md:py-20">
      <div className="flex flex-col md:flex-row justify-between  w-full  ">
        <div className="w-[367px] flex flex-col justify-between">
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
            variant={'default'}
            className="h-13 w-full text-sm md:text-md font-semibold mt-6 md:mt-auto"
          >
            <Mail className="mr-2" />
            Send Message
          </Button>
        </div>
        <div className="w-full md:w-[642px] mt-6 md:mt-0 h-full ">
          {/* kanan */}
          <ul className="flex flex-col text-md md:text-xl text-white ">
            {ToolsData.map((item: any) => (
              <li
                key={item.id}
                className="flex flex-row justify-between items-center h-15 mb-4 first:border-b-2 first:border-neutral-900 border-b-2 border-neutral-900 last:border-b-0"
              >
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

                <div className="text-md md:text-xl font-bold">
                  {item.score}%
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
