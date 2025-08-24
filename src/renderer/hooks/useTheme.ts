import { useEffect } from 'react';
import { useThemeStore } from '../stores/themeStore';
import { themes } from '../../shared/constants/themes';

export const useTheme = () => {
  const { currentTheme, config, setTheme, setConfig, toggleTheme, applyTheme } =
    useThemeStore();

  // 初始化主题
  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme, applyTheme]);

  // 监听系统主题变化
  useEffect(() => {
    if (!config.systemPreference) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const themeId = e.matches ? 'dark' : 'light';
      setTheme(themeId);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [config.systemPreference, setTheme]);

  return {
    currentTheme,
    config,
    themes,
    setTheme,
    setConfig,
    toggleTheme,
  };
};
