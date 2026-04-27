import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Axe Tech · Cutting Edge',
  description: 'Software and hardware at the cutting edge. Blockchain infrastructure, developer tooling, and a perpetual motion energy device.',
  metadataBase: new URL('https://www.axetech.io'),
  openGraph: {
    title: 'Axe Tech · Cutting Edge',
    description: 'Software and hardware at the cutting edge.',
    url: 'https://www.axetech.io',
    siteName: 'Axe Tech',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
