import type { Metadata } from 'next';
import { Inter, Charm } from 'next/font/google';
import './globals.css';
import { ModeProvider } from '@/context/mode';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

const charm = Charm({
  subsets: ['latin'],
  variable: '--font-charm',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Personal Portofolio',
  description: 'created by Me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply Inter directly */}
      <body
        className={`${inter.variable} ${charm.variable} font-sans antialiased`}
      >
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
