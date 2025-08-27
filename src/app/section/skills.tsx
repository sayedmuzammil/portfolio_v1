import Image from 'next/image';
import React from 'react';
import { SkillsData } from '../../../data/skills-data';

const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full py-10 md:py-20 ">
      {/* background */}
      <div className=" absolute -z-10 w-full h-full -translate-y-[40px] md:-translate-y-[80px]">
        <div
          className="absolute -z-10 w-full h-full
           bg-radial-[at_0%_100%] from-[#149BB0]/60 to-[#149BB0]/0 to-[50%]"
        />
        <Image
          src="/images/bg-hero.png"
          alt="Edwin"
          width={1074}
          height={488}
          className="bottom-0 absolute -z-10 md:ml-36"
        />
      </div>

      <div className=" w-full h-full px-4 md:px-35  ">
        <div className="flex w-full justify-center mb-13 ">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Not Your Typical Frontend Developer
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              I care about how it looks, how it works, and how it feels — all at
              once.
            </div>
          </div>
        </div>
        <div className="bg-black p-3 md:p-6">
          <table className="w-full ">
            <thead>
              <tr className=" text-white">
                <th className="w-full md:max-w-1/3 text-md md:text-display-xs">
                  Skill
                </th>
                <th className="w-[66px]  md:max-w-1/3 bg-table-highlight text-sm md:text-display-xs">
                  With Me
                </th>
                <th className="w-[66px] md:max-w-1/3 text-sm md:text-display-xs">
                  Others
                </th>
              </tr>
            </thead>
            <tbody>
              {SkillsData.map((row) => (
                <tr
                  key={row.id}
                  className="h-[72px] w-full border-b-2 border-neutral-800"
                >
                  <td className=" text-lg md:text-sm text-neutral-300">
                    {row.skill}
                  </td>
                  <td className="px-4 py-4 bg-table-highlight">
                    <div className="mx-auto bg-white w-8 h-8 rounded-full flex items-center justify-center">
                      <Image
                        src="/icons/icon-checked.svg"
                        alt="check-icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4 ">
                    <div className=" mx-auto bg-neutral-700 w-8 h-8 rounded-full flex items-center justify-center">
                      <Image
                        src="/icons/icon-close.svg"
                        alt="check-icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
