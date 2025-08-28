import Image from 'next/image';
import React from 'react';
import {
  PortfoliosData,
  type PortfolioProps,
} from '../../../data/portfolio-data';

const PortfoliosSection = () => {
  return (
<<<<<<< HEAD:src/app/section/portofolios.tsx
    <section className="relative w-full py-10 md:py-20 bg-black -z-50">
=======
    <section id="projects" className="relative w-full my-10 md:my-20">
>>>>>>> b52aca2d1eb127fa4df89eb2f4f14d110856efc7:src/app/section/portfolios.tsx
      {/* background */}

      <div className=" w-full h-full px-4 md:px-35  ">
        <div className="flex w-full justify-center mb-13 ">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Bridging Design and Development
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              These are real projects where I implemented frontend interfaces
              with precision and attention to detail.
            </div>
          </div>
        </div>
        <div className=" p-3 md:p-6 ">
          <div className="flex flex-col md:flex-row gap-5">
            {PortfoliosData.map((item: PortfolioProps) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={373}
                    height={373}
                    className="rounded-md w-full md:w-[373px] md:h-[373px] object-cover"
                  />
                </div>
                <div>
                  <div className="h-auto md:h-[32px] text-lg md:text-xl text-white font-semibold">
                    {item.title}
                  </div>
                  <div className="text-sm md:text-md text-neutral-400">
                    {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfoliosSection;
