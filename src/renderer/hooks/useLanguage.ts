import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { changeLanguageWithResources } from '../../shared/i18n';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback(async (language: string) => {
    try {
      await changeLanguageWithResources(language);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  }, []);

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
