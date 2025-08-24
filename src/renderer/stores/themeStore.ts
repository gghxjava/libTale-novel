import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, ThemeConfig } from '../../shared/types/theme';
import {
  themes,
  getThemeById,
  getDefaultTheme,
} from '../../shared/constants/themes';

interface ThemeState {
  currentTheme: Theme;
  config: ThemeConfig;
  setTheme: (themeId: string) => void;
  setConfig: (config: Partial<ThemeConfig>) => void;
  toggleTheme: () => void;
  applyTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      currentTheme: getDefaultTheme(),
      config: {
        currentTheme: 'light',
        autoSwitch: false,
        systemPreference: true,
      },

      setTheme: (themeId: string) => {
        const theme = getThemeById(themeId);
        set({
          currentTheme: theme,
          config: { ...get().config, currentTheme: themeId },
        });
        get().applyTheme(theme);
      },

      setConfig: (newConfig: Partial<ThemeConfig>) => {
        set({ config: { ...get().config, ...newConfig } });
      },

      toggleTheme: () => {
        const { currentTheme } = get();
        const currentIndex = themes.findIndex(
          theme => theme.id === currentTheme.id
        );
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        get().setTheme(nextTheme.id);
      },

      applyTheme: (theme: Theme) => {
        const root = document.documentElement;
        
        // 直接设置 DaisyUI 主题
        root.setAttribute('data-theme', theme.id);
        
        // 更新 meta theme-color
        const metaThemeColor = document.querySelector(
          'meta[name="theme-color"]'
        );
        if (metaThemeColor) {
          metaThemeColor.setAttribute('content', theme.colors.primary);
        }
      },
    }),
    {
      name: 'theme-storage',
      partialize: state => ({
        config: state.config,
        currentTheme: state.currentTheme,
      }),
    }
  )
);
