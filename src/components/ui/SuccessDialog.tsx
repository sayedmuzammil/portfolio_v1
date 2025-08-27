'use client';

import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onBackHome?: () => void;
};

export function SuccessDialog({ open, onOpenChange, onBackHome }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" h-[485px] max-w-md border-white/10  text-white">
        <div className=" absolute -z-10 w-full h-full">
          <div
            className="absolute -z-10 w-full h-full
                 bg-radial-[at_50%_0%] from-[#149BB0]/60 to-[#149BB0]/0 to-[50%]"
          />
          <Image
            src="/images/bg-hero.png"
            alt="Edwin"
            width={448}
            height={485}
            className="top-0 absolute -z-10 md:ml-36"
          />
        </div>
        <DialogHeader>
          <div className="relative flex justify-center items-center w-full h-[230px] ">
            <div className="absolute -z-10 flex w-45 h-45  rounded-full ">
              <Image
                src="/images/decoration-success.svg"
                alt="Edwin"
                width={180}
                height={180}
                // className="mx-auto  -z-10 md:ml-36"
              />
            </div>
            <div className="mx-auto flex w-26 h-26 bg-success-background rounded-full justify-center items-center">
              <div className="flex justify-center items-center  h-50 w-50">
                <div className="  flex justify-center items-center  h-20 w-20">
                  <Image
                    src="/icons/icon-success-message.svg"
                    alt="Success"
                    width={64}
                    height={64}
                  />
                </div>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-6 ">
          <DialogTitle className="text-center text-display-xs">
            Thanks for Reaching Out!
          </DialogTitle>

          <p className="mx-auto max-w-sm text-center text-md text-neutral-400">
            I’ve received your message and will get back to you shortly.
          </p>
        </div>

        <Button
          variant={'default'}
          className="h-13 w-full mt-6 md:mt-8 text-sm md:text-md font-semibold rounded-full mx-auto"
          onClick={() => (onBackHome ? onBackHome() : onOpenChange(false))}
        >
          Back to Home
        </Button>
      </DialogContent>
    </Dialog>
  );
}
