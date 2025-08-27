'use client';

import * as React from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  navigationData,
  type NavigationDataProps,
} from '../../../data/navigation-data';

const MIN = 56; // px
const MAX = 72; // px

export default function Navbar() {
  const name = 'Edwin';
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setExpanded((window.scrollY || 0) > 8);
    onScroll(); // set initial state on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const height = expanded ? MAX : MIN;

  return (
    <header
      className="sticky top-0 inset-x-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/20"
      style={{ height, transition: 'height 250ms ease' }}
    >
      <div className="h-full flex items-center justify-end md:justify-center">
        {/* Desktop */}
        <nav className="hidden md:block w-full">
          <ul className="h-full mx-auto flex items-center gap-6 justify-center px-4 rounded-full bg-black/40">
            {navigationData.map((item: NavigationDataProps) => (
              <li key={item.label}>
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

        {/* Mobile */}
        <div className="md:hidden w-full px-2">
          <div className="h-full flex items-center justify-between rounded-full bg-black/40 text-white px-4">
            <div className="text-xl font-bold">{name}</div>
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open main menu"
                  className="p-2 text-white"
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
                    <div className="flex items-center gap-2">
                      <div className="rounded-full w-[40px] h-[40px] bg-photo-background overflow-hidden">
                        <Image
                          src="/images/image-avatar-profile.svg"
                          alt="avatar1"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="text-white">{name}</div>
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
}
