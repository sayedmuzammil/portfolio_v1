import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import React from 'react';
import { ToolsData } from '../../../data/tools-data';
import Image from 'next/image';

const Tools = () => {
  return (
    <div className="mx-3 md:mx-30 my-10 md:my-20">
      <div className="flex flex-row justify-between mb-12  pb-12 w-full  ">
        <div className="w-[367px] flex flex-col justify-between">
          {/* kiri */}
          <div className=" flex flex-col gap-4">
            <div className="text-display-2xl font-bold text-white">
              Tools I Use to Build
            </div>
            <div className="text-md text-neutral-400">
              From code to design — here’s the tech that helps me turn
              ideas into real products.
            </div>
          </div>
          <Button
            variant={'default'}
            className="h-13 w-full text-sm md:text-md font-semibold mt-auto"
          >
            <Mail className="mr-2" />
            Send Message
          </Button>
        </div>
        <div className="w-[642px] h-full">
          {/* kanan */}
          <ul className="flex flex-col text-xl text-white ">
            {ToolsData.map((item: any) => (
              <li
                key={item.id}
                className="flex flex-row justify-between h-15 mb-4 first:border-b-2 first:border-neutral-900 border-b-2 border-neutral-900 last:border-b-0"
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

                <div className="text-xl font-bold">{item.score}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;
