'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const reduce = useReducedMotion();

  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -30]); // slowest
  // const decoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]); // medium
  // const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]); // fastest / front-most

  return (
    <section id="about" className=" top-0 w-full h-[910px] md:h-[756px] ">
      <div className="relative w-full h-full">
        {/* background */}
        <div className=" absolute -z-10 w-full h-full -translate-y-[112px]">
          <div
            className="absolute -z-10 w-full h-full
           bg-radial-[at_0%_0%] from-[#149BB0]/60 to-[#149BB0]/0 to-[50%]"
          />
          <Image
            src="/images/bg-hero.png"
            alt="Edwin"
            width={1074}
            height={488}
            className="top-0 absolute -z-10 md:ml-36"
          />
        </div>

        <div className=" w-full h-full px-4 md:px-35  ">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-6 md:gap-36 h-full">
            {/* left side */}
            <div className="  text-white flex flex-col justify-center gap-8 items-start">
              <div className="text-md md:text-xl text-neutral-25">
                Hello, I&lsquo;m Edwin Anderson
              </div>
              <div className="font-bold text-6xl md:text-8xl tracking-tight">
                <p className="tracking-in-expand ">
                  FRONT
                  <span
                    className="font-charm whitespace-nowrap text-5xl md:text-8xl text-primary"
                    style={{ fontWeight: '400' }}
                  >
                    END
                  </span>
                </p>
                <p className="tracking-in-expand">DEVELOPER</p>
              </div>
              <div className="text-sm md:text-lg text-neutral-400">
                Passionate about frontend development, I focus on crafting
                digital products that are visually polished,
                performance-optimized, and deliver a consistent experience
                across all platforms.
              </div>

              <Button
                variant="flood"
                size="lg"
                className="h-13 w-full md:w-[257px] text-sm md:text-md font-semibold"
              >
                <Link
                  href="#contact"
                  className="flex flex-row items-center gap-2"
                >
                  <Mail className="mr-2" />
                  <span>Hire Me</span>
                </Link>
              </Button>
            </div>
            <div ref={ref} className="mx-auto h-auto ">
              {/* right side */}
              <motion.div
                style={{ y: cardY }}
                className="relative w-[252px] md:w-[341px] h-[430px] md:h-[671px]"
              >
                <Image
                  src="/images/idCard.svg"
                  alt="Id Card"
                  width={341}
                  height={671}
                  className=" absolute object-cover -translate-y-[68px] md:-translate-y-[112px]"
                />
                <motion.div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/decoration-idcard.svg"
                    alt="decoation"
                    width={341}
                    height={671}
                    className="absolute h-full"
                  />
                  <Image
                    src="/images/photo-profile.png"
                    alt="photo profile"
                    width={341}
                    height={671}
                    className="absolute w-full bottom-0 -translate-y-0 md:-translate-y-[112px]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
