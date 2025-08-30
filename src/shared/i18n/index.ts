import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 预加载默认语言（中文）的 common 命名空间，确保应用启动时有基本翻译
import zhCommon from './locales/zh/common.json';
import enCommon from './locales/en/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'zh',
    debug: true,
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
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    // 预加载两种语言的基本翻译
    resources: {
      zh: {
        common: zhCommon,
      },
      en: {
        common: enCommon,
      },
    },
  });

// 动态加载其他语言和命名空间
export const loadLanguageResource = async (lng: string, ns: string) => {
  try {
    const module = await import(`./locales/${lng}/${ns}.json`);
    i18n.addResourceBundle(lng, ns, module.default, true, true);
    return module.default;
  } catch (error) {
    console.warn(`Failed to load language resource: ${lng}/${ns}`, error);
    return {};
  }
};

// 预加载当前语言的所有命名空间
export const preloadCurrentLanguage = async () => {
  const currentLng = i18n.language || 'zh';
  const namespaces = [
    'navigation',
    'library',
    'reader',
    'upload',
    'settings',
    'book',
    'themes',
  ];

  for (const ns of namespaces) {
    await loadLanguageResource(currentLng, ns);
  }
};

// 切换语言并加载所需资源
export const changeLanguageWithResources = async (language: string) => {
  // 先加载新语言的所有命名空间
  const namespaces = [
    'navigation',
    'library',
    'reader',
    'upload',
    'settings',
    'book',
    'themes',
  ];

  for (const ns of namespaces) {
    await loadLanguageResource(language, ns);
  }

  // 然后切换语言
  await i18n.changeLanguage(language);
};

export default i18n;
