import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { LanguageSwitcher } from './components/ui/LanguageSwitcher';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { useTheme } from './hooks/useTheme';
import { preloadCurrentLanguage } from '../shared/i18n';
import '../shared/i18n'; // 确保i18n初始化

function App() {
  const { t, i18n } = useTranslation();
  const { currentTheme } = useTheme();

  // 预加载当前语言的所有命名空间
  useEffect(() => {
    console.log('App mounted, current language:', i18n.language);
    preloadCurrentLanguage();
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        {/* 顶部控制栏 */}
        <div className="navbar bg-base-100 rounded-box shadow-lg mb-6">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-primary">
              {t('description', { ns: 'book' })} (当前语言: {i18n.language})
            </h1>
          </div>
          <div className="flex-none">
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
