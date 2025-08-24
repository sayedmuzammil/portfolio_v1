'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
  const form = useForm();

  return (
    <section className="mx-3 md:mx-30 py-10 md:py-20">
      <div className="flex flex-col md:flex-row justify-between mb-12  pb-12 w-full  ">
        <div className="flex flex-col justify-between">
          {/* kiri */}
          <div className=" flex flex-col gap-4">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Let’s{' '}
              <span className="text-contact-highlight">Build Something</span>{' '}
              Great
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </div>
            <form>
              <div>name</div>
              <div>email</div>
              <div>message</div>

              <div>
                {/* <FormField
                  control={form.control}
                  name="username"
                  render={({}) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl></FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-[642px] mt-6 md:mt-0 h-full ">
          {/* kanan */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
