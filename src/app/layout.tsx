import './globals.css';
import { ReactNode } from 'react';
import { Noto_Kufi_Arabic } from 'next/font/google';
import I18nProvider from '../components/I18nProvider';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Botanic',
  description: 'Botanic Landscape Construction Company',
  icons: {
    icon: '/botanic1.ico',
    
    shortcut: '/botanic1.ico',
    apple: '/botanic1.png',
  },
};

const notoKufi = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={notoKufi.className} dir="ltr">
      <body>
        <I18nProvider>{children}</I18nProvider>
        <Footer />
      </body>
    </html>
  );
}