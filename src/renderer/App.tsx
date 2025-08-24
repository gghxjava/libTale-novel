import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/ui/LanguageSwitcher';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { useTheme } from './hooks/useTheme';
import '../shared/i18n';

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();
  const { currentTheme } = useTheme();

  // 调试信息
  console.log('Current language:', i18n.language);
  console.log('Available languages:', i18n.languages);
  console.log('Translation test:', t('appName', { ns: 'common' }));

  // 测试翻译
  const testTranslations = {
    appName: t('appName', { ns: 'common' }),
    noBooks: t('noBooks', { ns: 'library' }),
    readerTitle: t('title', { ns: 'reader' }),
  };
  console.log('Test translations:', testTranslations);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        {/* 顶部控制栏 */}
        <div className="flex justify-between items-center mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            当前主题123: {currentTheme.name}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {t('appName', { ns: 'common' }) || 'LibTale Novel Reader'}
        </h1>

        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <button
              className="btn-primary"
              onClick={() => setCount(count => count + 1)}
            >
              {t('loading', { ns: 'common' }) || 'Loading...'}: {count}
            </button>
          </div>

          <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
            <p>{t('noBooks', { ns: 'library' }) || 'No books yet'}</p>
            <p className="text-sm mt-2">基于 React + TypeScript + Electron</p>
          </div>
        </div>

        {/* 主题预览 */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="font-semibold mb-2">浅色主题</h3>
            <div className="h-20 bg-gray-100 rounded"></div>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">深色主题</h3>
            <div className="h-20 bg-gray-800 rounded"></div>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">护眼主题</h3>
            <div className="h-20 bg-amber-50 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
