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

const Navbar = () => {
  const name = 'Edwin';

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-transparent">
      <div className="flex justify-end md:justify-center md:items-center top-0  ">
        <div className="hidden md:block ">
          {/* Desktop nav */}
          <nav className="hidden md:block pt-5">
            <ul className="flex items-center gap-6 justify-center px-4 h-11 rounded-2xl bg-black/40 backdrop-blur-md">
              <li className="text-white not-visited:text-xl font-bold">
                {name}
              </li>
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
            </ul>
          </nav>
        </div>

        {/* Mobile sheet */}
        <div className="flex items-center justify-between md:hidden h-12 rounded-full bg-black/40 backdrop-blur-md text-white w-full m-2 md:m-8 px-4 z-10 md:z-0">
          <div className="text-xl font-bold">{name}</div>
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
                      <div className=" text-white">{name} </div>
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
    </header>
  );
};

export default Navbar;
