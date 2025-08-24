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
  {
    id: 'sepia',
    name: '护眼主题',
    mode: 'sepia',
    colors: {
      primary: '#8B4513',
      secondary: '#A0522D',
      background: '#FDF8F3',
      surface: '#F5F1EB',
      text: '#2C1810',
      textSecondary: '#5D4037',
      border: '#D7CCC8',
      accent: '#795548',
      error: '#D32F2F',
      success: '#388E3C',
      warning: '#F57C00',
    },
    fonts: {
      body: 'Noto Sans SC, system-ui, sans-serif',
      heading: 'Noto Sans SC, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
  {
    id: 'blue',
    name: '蓝色主题',
    mode: 'light',
    colors: {
      primary: '#1E40AF',
      secondary: '#3B82F6',
      background: '#EFF6FF',
      surface: '#FFFFFF',
      text: '#1E293B',
      textSecondary: '#475569',
      border: '#BFDBFE',
      accent: '#0EA5E9',
      error: '#DC2626',
      success: '#059669',
      warning: '#D97706',
    },
    fonts: {
      body: 'Noto Sans SC, system-ui, sans-serif',
      heading: 'Noto Sans SC, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
  },
  {
    id: 'green',
    name: '绿色主题',
    mode: 'light',
    colors: {
      primary: '#059669',
      secondary: '#10B981',
      background: '#F0FDF4',
      surface: '#FFFFFF',
      text: '#064E3B',
      textSecondary: '#065F46',
      border: '#BBF7D0',
      accent: '#22C55E',
      error: '#DC2626',
      success: '#059669',
      warning: '#D97706',
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
