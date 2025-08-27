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

const Navbar = () => {
  const name = 'Edwin';

  return (
    <header className="flex justify-end md:justify-center md:items-center top-0 bg-transparent w-full">
      <div className="hidden md:block m-8">
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 justify-center px-4 h-11 rounded-full bg-black/40 backdrop-blur-md">
            {navigationData.map((item: NavigationDataProps) => (
              <li key={item.label} className="inline-block">
                <Link
                  href={item.href}
                  className="text-white hover:text-gray-300 transition-colors"
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
                  <div className=" text-white">{name} </div>
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
    </header>
  );
};

export default Navbar;
