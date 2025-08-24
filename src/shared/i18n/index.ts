import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入模块化语言文件
import enCommon from './locales/en/common.json';
import enNavigation from './locales/en/navigation.json';
import enLibrary from './locales/en/library.json';
import enReader from './locales/en/reader.json';
import enUpload from './locales/en/upload.json';
import enSettings from './locales/en/settings.json';
import enBook from './locales/en/book.json';
import enThemes from './locales/en/themes.json';

import zhCommon from './locales/zh/common.json';
import zhNavigation from './locales/zh/navigation.json';
import zhLibrary from './locales/zh/library.json';
import zhReader from './locales/zh/reader.json';
import zhUpload from './locales/zh/upload.json';
import zhSettings from './locales/zh/settings.json';
import zhBook from './locales/zh/book.json';
import zhThemes from './locales/zh/themes.json';

// 使用命名空间避免键名冲突
const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    library: enLibrary,
    reader: enReader,
    upload: enUpload,
    settings: enSettings,
    book: enBook,
    themes: enThemes,
  },
  zh: {
    common: zhCommon,
    navigation: zhNavigation,
    library: zhLibrary,
    reader: zhReader,
    upload: zhUpload,
    settings: zhSettings,
    book: zhBook,
    themes: zhThemes,
  },
};

// 调试信息
console.log('i18n resources loaded:', {
  languages: Object.keys(resources),
  namespaces: Object.keys(resources.en),
  sampleData: {
    enCommon: resources.en.common,
    zhCommon: resources.zh.common,
  },
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    debug: true, // 强制开启调试
    defaultNS: 'common',
    ns: [
      'common',
      'navigation',
      'library',
      'reader',
      'upload',
      'settings',
      'book',
      'themes',
    ],
    interpolation: {
      escapeValue: false, // React 已经转义了
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// 调试信息
console.log('i18n initialized with resources:', Object.keys(resources));
console.log('Available namespaces:', i18n.options.ns);
console.log('Current language:', i18n.language);

export default i18n;
