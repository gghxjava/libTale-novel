import type { Theme } from '../types/theme';

export const themes: Theme[] = [
  {
    id: 'light',
    name: '浅色主题',
    mode: 'light',
    colors: {
      primary: '#3B82F6',
      secondary: '#6B7280',
      background: '#F9FAFB',
      surface: '#FFFFFF',
      text: '#111827',
      textSecondary: '#6B7280',
      border: '#E5E7EB',
      accent: '#10B981',
      error: '#EF4444',
      success: '#10B981',
      warning: '#F59E0B',
    },
    fonts: {
      body: 'Noto Sans SC, system-ui, sans-serif',
      heading: 'Noto Sans SC, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
  {
    id: 'dark',
    name: '深色主题',
    mode: 'dark',
    colors: {
      primary: '#60A5FA',
      secondary: '#9CA3AF',
      background: '#111827',
      surface: '#1F2937',
      text: '#F9FAFB',
      textSecondary: '#D1D5DB',
      border: '#374151',
      accent: '#34D399',
      error: '#F87171',
      success: '#34D399',
      warning: '#FBBF24',
    },
    fonts: {
      body: 'Noto Sans SC, system-ui, sans-serif',
      heading: 'Noto Sans SC, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
];

export const getThemeById = (id: string): Theme => {
  return themes.find(theme => theme.id === id) || themes[0];
};

export const getDefaultTheme = (): Theme => {
  return themes[0];
};
