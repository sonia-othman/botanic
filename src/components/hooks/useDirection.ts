'use client';
import { useTranslation } from 'react-i18next';

export function useDirection() {
  const { i18n } = useTranslation();
  
  const isRTL = i18n.language === 'ku'; // Kurdish is RTL
  const direction = isRTL ? 'rtl' : 'ltr';
  
  return {
    isRTL,
    direction,
    textAlign: isRTL ? 'right' : 'left',
    flexDirection: isRTL ? 'row-reverse' : 'row',
  };
}