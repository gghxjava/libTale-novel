import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language);
    },
    [i18n]
  );

  const currentLanguage = i18n.language;

  const availableLanguages = [
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages,
  };
};
