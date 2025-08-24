/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/renderer/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 启用 class 策略的深色模式
  theme: {
    extend: {
      fontFamily: {
        body: 'Noto Sans SC, system-ui, sans-serif',
        heading: 'Noto Sans SC, system-ui, sans-serif',
        mono: 'JetBrains Mono, monospace',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};
