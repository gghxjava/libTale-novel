export type ThemeMode = 'light' | 'dark' | 'sepia' | 'auto';

export interface Theme {
  id: string;
  name: string;
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
    error: string;
    success: string;
    warning: string;
  };
  fonts: {
    body: string;
    heading: string;
    mono: string;
  };
}

export interface ThemeConfig {
  currentTheme: string;
  autoSwitch: boolean;
  systemPreference: boolean;
}
