'use client';

import * as React from 'react';
// import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import { ErrorDialog } from '@/components/ui/ErrorDialog';
// import { SuccessDialog } from '@/components/ui/SuccessDialog';

const services = [
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile App Development' },
  { id: 'uiux', label: 'UI/UX Design' },
  { id: 'cloud', label: 'Cloud Solutions' },
  { id: 'soft', label: 'Software Development' },
  { id: 'other', label: 'Other' },
];

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
      services: fd.getAll('services').map(String),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());

      // ✅ sukses
      setSuccessOpen(true);
      form.reset();

      toast.success('Message sent', {
        description: 'Thanks! We’ll be in touch shortly.',
      });
    } catch (err: any) {
      // ❌ gagal
      setErrorOpen(true);
      toast.error('Send failed', {
        description: 'We couldn’t send your message. Please try again.',
        action: {
          label: 'Retry',
          onClick: () => formRef.current?.requestSubmit(),
        },
      });
      console.error(err?.message || err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact-us" className="relative w-full  px-20 ">
      {/* background */}
      <div className=" absolute -z-10 w-full h-full  -translate-x-20 ">
        <div
          className="absolute -z-10 w-full h-full
                   bg-radial-[at_0%_0%] from-[#149BB0]/60 to-[#149BB0]/0 to-[50%]"
        />
        <Image
          src="/images/glassBoard.svg"
          alt="Edwin"
          width={1074}
          height={488}
          className="top-0 absolute -z-10 md:ml-36"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-12  pb-12 w-full">
        <div className="flex flex-col justify-between">
          <div className=" flex flex-col gap-4 bg-black py-10 px-6">
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
        </div>
      </div>

      {/* Portals */}
      {/* <SuccessDialog open={successOpen} onOpenChange={setSuccessOpen} />
      <ErrorDialog
        open={errorOpen}
        onOpenChange={setErrorOpen}
        onRetry={() => formRef.current?.requestSubmit()}
      /> */}
    </section>
  );
}

/* ---------- subcomponents ---------- */

// function FormHeader() {
//   return (
//     <header className="text-center">
//       <h2 className="text-display-sm md:text-display-lg font-semibold">
//         Ready to Start? Let’s Talk.
//       </h2>
//       <p className="mt-2 text-sm md:text-base text-white/70">
//         Tell us what you need, and we’ll get back to you soon.
//       </p>
//     </header>
//   );
// }

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
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-neutral-600"
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
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-neutral-600"
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
          className="w-full rounded-md border border-white/15 bg-transparent px-3 py-2 text-neutral-600"
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
