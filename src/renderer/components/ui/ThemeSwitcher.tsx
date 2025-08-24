import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import {
  SunIcon,
  MoonIcon,
  EyeIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

export const ThemeSwitcher = () => {
  const { currentTheme, themes, setTheme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const getThemeIcon = (themeId: string) => {
    switch (themeId) {
      case 'light':
        return <SunIcon className="w-4 h-4" />;
      case 'dark':
        return <MoonIcon className="w-4 h-4" />;
      case 'sepia':
        return <EyeIcon className="w-4 h-4" />;
      default:
        return <SwatchIcon className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">{t('settings.theme')}:</span>

      {/* 快速切换按钮 */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        title={t('settings.theme')}
      >
        {getThemeIcon(currentTheme.id)}
      </button>

      {/* 主题选择器 */}
      <select
        value={currentTheme.id}
        onChange={e => setTheme(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
      >
        {themes.map(theme => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </div>
  );
};
