'use client';
import { ReactNode, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

type Props = {
  children: ReactNode;
};

export default function I18nProvider({ children }: Props) {
  useEffect(() => {
    // Set document direction when language changes
    const handleLanguageChanged = (lng: string) => {
      document.documentElement.dir = lng === 'ku' ? 'rtl' : 'ltr';
      document.documentElement.lang = lng;
    };

    // Set initial direction
    handleLanguageChanged(i18n.language);

    // Listen for language changes
    i18n.on('languageChanged', handleLanguageChanged);

    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}