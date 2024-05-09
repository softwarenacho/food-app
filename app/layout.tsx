import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { ReactNode } from 'react';
import './globals.css';

import type { Metadata, Viewport } from 'next';

const APP_NAME = 'Food App';
const APP_DEFAULT_TITLE = 'Food App';
const APP_TITLE_TEMPLATE = '%s';
const APP_DESCRIPTION = 'Food ordering app';

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  description: APP_DESCRIPTION,
  manifest: '/manifest.json'
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF'
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
