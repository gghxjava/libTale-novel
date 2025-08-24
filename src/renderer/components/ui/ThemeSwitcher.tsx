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
      <span className="text-sm text-base-content">{t('settings.theme')}:</span>

      {/* 快速切换按钮 */}
      <button
        onClick={toggleTheme}
        className="btn btn-circle btn-sm btn-ghost"
        title={t('settings.theme')}
      >
        {getThemeIcon(currentTheme.id)}
      </button>

      {/* 主题选择器 */}
      <select
        value={currentTheme.id}
        onChange={e => setTheme(e.target.value)}
        className="select select-bordered select-sm w-full max-w-xs"
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
