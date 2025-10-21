'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import {
  navigationData,
  type NavigationDataProps,
} from '../../../data/navigation-data';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';
import { useModeContext } from '@/context/mode';

const Navbar = () => {
  const { mode, toggleMode } = useModeContext();

  const isBuilder = mode === 'Builder';

  const handleModeChange = (checked: boolean) => {
    const newMode = checked ? 'Builder' : 'Leader';
    if (mode !== newMode) {
      toggleMode();
    }
  };

  return (
    <header className="sticky top-0 inset-x-0 z-50 ">
      <div className="relative flex flex-col items-center w-full">
        <div className="absolute top-4 w-full">
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center w-full p-5">
            <ul className="w-full flex justify-between items-center gap-6  px-4 h-11 rounded-2xl bg-black/40 backdrop-blur-md text-white">
              <li
                className={`flex items-center gap-3 border border-border px-3 py-1 rounded-full ${
                  mode === 'Leader' ? ' bg-mode1-300' : ' bg-mode2-300'
                }`}
              >
                <span className="font-bold">
                  {isBuilder ? 'Builder' : 'Leader'}
                </span>
                <Switch
                  checked={isBuilder}
                  onCheckedChange={handleModeChange}
                />
              </li>
              <div className="flex gap-5">
                {navigationData.map((item: NavigationDataProps) => (
                  <li key={item.label} className="inline-block">
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-300 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </div>
              <div
                className={`flex items-center gap-3 border border-border px-3 py-1 rounded-full ${
                  mode === 'Leader'
                    ? ' border-mode1-300 shadow-lg shadow-mode1-300 hover:shadow-mode1-300/50 hover:scale-[1.03] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-mode1-300'
                    : ' border-mode2-300 shadow-lg shadow-mode2-300 hover:shadow-mode2-300/50 hover:scale-[1.03] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-mode2-300'
                }`}
              >
                Download My CV
              </div>
            </ul>
          </nav>

          {/* Mobile sheet */}
          <div className="md:hidden flex items-center justify-between h-12 rounded-full bg-black/40 backdrop-blur-md text-white w-full m-2 px-4 z-10 ">
            <div
              className={`flex items-center gap-3 border border-border px-3 rounded-full ${
                mode === 'Leader' ? ' bg-mode1-300' : ' bg-mode2-300'
              }`}
            >
              <span className="font-bold">
                {isBuilder ? 'Builder' : 'Leader'}
              </span>
              <Switch checked={isBuilder} onCheckedChange={handleModeChange} />
            </div>
            <div
              className={`flex items-center gap-3 border border-border px-3 py-1 rounded-full ${
                mode === 'Leader'
                  ? ' border-mode1-300 shadow-lg shadow-mode1-300 hover:shadow-mode1-300/50 hover:scale-[1.03] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-mode1-300'
                  : ' border-mode2-300 shadow-lg shadow-mode2-300 hover:shadow-mode2-300/50 hover:scale-[1.03] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-mode2-300'
              }`}
            >
              My CV
            </div>
            <div className=" rounded-full bg-transparent flex items-center justify-between md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    aria-label="Open main menu"
                    className="p-2 text-white "
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="text-white bg-black/50 backdrop-blur-lg p-4"
                >
                  <SheetHeader>
                    <SheetTitle asChild>
                      <div className="flex flex-row items-center gap-2">
                        <div className="rounded-full w-[40px] h-[40px] bg-photo-background overflow-hidden">
                          <Image
                            src="/images/image-avatar-profile.svg"
                            alt="avatar1"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className=" text-white">Sayed </div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="mt-2">
                    <ul>
                      {navigationData.map((item: NavigationDataProps) => (
                        <li key={item.label} className="flex flex-col">
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className="flex text-white hover:text-gray-300 transition-colors h-[46px] w-full items-center justify-start"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
