'use client';

import * as React from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ErrorDialog } from '@/components/ui/ErrorDialog';
import { SuccessDialog } from '@/components/ui/SuccessDialog';

export default function ContactUsSection() {
  const [successOpen, setSuccessOpen] = React.useState(false);
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const { error } = await res
          .json()
          .catch(() => ({ error: 'Send failed' }));
        throw new Error(error);
      }

      setSuccessOpen(true);
      form.reset();
      toast.success('Message sent', {
        description: 'Thanks! We’ll be in touch shortly.',
      });
    } catch (err: unknown) {
      console.error(
        'Contact route error:',
        err instanceof Error ? err.message : 'Unknown error'
      );

      setErrorOpen(true);
      toast.error('Send failed', {
        description:
          (err as Error)?.message ||
          'We couldn’t send your message. Please try again.',
        action: {
          label: 'Retry',
          onClick: () => formRef.current?.requestSubmit(),
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative w-full px-5 md:px-20 ">
      {/* background */}

      <div className=" absolute -z-10 w-full h-full -translate-x-5 md:-translate-x-20 ">
        <div className="absolute w-full h-full bg-linear-to-t from-white/0  to-black/100" />
        <div
          className="absolute -z-10 w-full h-full
                   bg-linear-0 from-[#149BB0]/60 to-[#149BB0]/0 to-[80%] "
        />

        <Image
          src="/images/glassBoard.svg"
          alt="Edwin"
          width={1074}
          height={488}
          className="bottom-0 absolute -z-10 w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between pb-12 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className=" flex flex-col gap-4 bg-black border-2 border-neutral-900 rounded-2xl py-10 px-6 ">
            <div className="text-display-md md:text-display-2xl font-bold text-white">
              Let’s{' '}
              <span className="text-contact-highlight">Build Something</span>{' '}
              Great
            </div>
            <div className="tex-sm md:text-md text-neutral-400">
              From code to design — here’s the tech that helps me turn ideas
              into real products.
            </div>
            <div className="w-full ">
              <div className="mx-auto mt-8 max-w-3xl ">
                <ContactForm
                  ref={formRef}
                  onSubmit={onSubmit}
                  loading={loading}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-between py-10 ">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col ">
                {/* address */}
                <div className="text-xl font-semibold text-white">Address</div>
                <div className="text-md text-neutral-400">
                  Jakarta, Indonesia
                </div>
              </div>
              <div className="w-full border-b-2 border-neutral-900" />
              <div className="flex flex-col">
                {/* Contact */}
                <div className="text-xl font-semibold text-white">Contact</div>
                <div className="text-md text-neutral-400">(+62) 1234567890</div>
              </div>
              <div className="w-full border-b-2 border-neutral-900" />

              <div className="flex flex-col gap-5">
                {/* Social Media */}
                <div className="text-xl font-semibold text-white">
                  Social Media
                </div>
                <div className="flex flex-row gap-3">
                  <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
                    <Image
                      src="/icons/icon-facebook.svg"
                      alt="facebook-icon"
                      width={10}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
                    <Image
                      src="/icons/icon-instagram.svg"
                      alt="instagram-icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
                    <Image
                      src="/icons/icon-linkedIn.svg"
                      alt="linkedIn-icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 bg-transparentx border border-neutral-800 rounded-full">
                    <Image
                      src="/icons/icon-tiktok.svg"
                      alt="tiktok-icon"
                      width={17}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-display-md md:text-display-3xl text-white font-bold">
              GET IN TOUCH
            </div>
          </div>
        </div>
      </div>

      {/* Portals */}
      <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
      <ErrorDialog
        open={errorOpen}
        onOpenChange={setErrorOpen}
        onRetry={() => formRef.current?.requestSubmit()}
      />
    </section>
  );
}

const ContactForm = React.forwardRef<
  HTMLFormElement,
  { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; loading: boolean }
>(function ContactForm({ onSubmit, loading }, ref) {
  return (
    <form ref={ref} onSubmit={onSubmit} className="mx-auto mt-8  space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm text-white" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2  focus:bg-white   [&:not(:placeholder-shown)]:bg-white
focus:text-black [:not(:placeholder-shown)]-text-black"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm text-white" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2  focus:bg-white   [&:not(:placeholder-shown)]:bg-white
focus:text-black [:not(:placeholder-shown)]-text-black"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm text-white" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Enter your message"
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2  focus:bg-white   [&:not(:placeholder-shown)]:bg-white
focus:text-black [:not(:placeholder-shown)]-text-black"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-14 rounded-full bg-white font-semibold text-md text-neutral-950 hover:bg-primary-200 disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
});
