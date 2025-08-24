/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 启用 class 策略的深色模式
  theme: {
    extend: {
      colors: {
        // 自定义颜色变量
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        textSecondary: 'var(--color-textSecondary)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
      },
      fontFamily: {
        body: 'var(--font-body)',
        heading: 'var(--font-heading)',
        mono: 'var(--font-mono)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
