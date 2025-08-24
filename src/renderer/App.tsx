import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/ui/LanguageSwitcher';
import { ThemeSwitcher } from './components/ui/ThemeSwitcher';
import { DaisyUITest } from './components/ui/DaisyUITest';
import { ThemeDebug } from './components/ui/ThemeDebug';
import { SimpleThemeTest } from './components/ui/SimpleThemeTest';
import { useTheme } from './hooks/useTheme';
import '../shared/i18n';

function App() {
  const [count, setCount] = useState(0);
  const [showTest, setShowTest] = useState(false);
  const { t, i18n } = useTranslation();
  const { currentTheme } = useTheme();

  // 调试信息
  console.log('Current language:', i18n.language);
  console.log('Available languages:', i18n.languages);
  console.log('Translation test:', t('appName', { ns: 'common' }));

  // 测试翻译
  const testTranslations = {
    appName: t('appName', { ns: 'common' }),
    noBooks: t('noBooks', { ns: 'library' }),
    readerTitle: t('title', { ns: 'reader' }),
  };
  console.log('Test translations:', testTranslations);

  return (
    <div className="min-h-screen bg-base-200">
      {showTest ? (
        <DaisyUITest onBack={() => setShowTest(false)} />
      ) : (
        <div className="container mx-auto px-4 py-8">
          {/* 顶部控制栏 */}
          <div className="navbar bg-base-100 rounded-box shadow-lg mb-6">
            <div className="flex-1">
              <h1 className="text-xl font-bold text-primary">
                {t('appName', { ns: 'common' }) || 'LibTale Novel Reader'}
              </h1>
            </div>
            <div className="flex-none">
              <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-base-content mb-4">
              {t('appName', { ns: 'common' }) || 'LibTale Novel Reader'}
            </h1>
            <p className="text-base-content/70">
              当前主题: {currentTheme.name}
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => setCount(count => count + 1)}
                >
                  {t('loading', { ns: 'common' }) || 'Loading...'}: {count}
                </button>

                <div className="mt-4">
                  <p className="text-base-content/70">
                    {t('noBooks', { ns: 'library' }) || 'No books yet'}
                  </p>
                  <p className="text-sm mt-2 text-base-content/50">
                    基于 React + TypeScript + Electron + DaisyUI
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    className="btn btn-secondary"
                    onClick={() => console.log('编辑器功能开发中...')}
                  >
                    打开小说编辑器
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 主题预览 */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-base-content">浅色主题</h3>
                <div className="h-20 bg-base-200 rounded-box"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-base-content">深色主题</h3>
                <div className="h-20 bg-base-200 rounded-box"></div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-base-content">护眼主题</h3>
                <div className="h-20 bg-base-200 rounded-box"></div>
              </div>
            </div>
          </div>

          {/* DaisyUI 组件展示 */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center text-base-content mb-6">
              DaisyUI 组件展示
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">按钮样式</h3>
                  <div className="flex flex-wrap gap-2">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-accent">Accent</button>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">输入框</h3>
                  <input
                    type="text"
                    placeholder="输入内容..."
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title">进度条</h3>
                  <progress
                    className="progress progress-primary w-full"
                    value="70"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>

          {/* 简单主题测试 */}
          <div className="mt-8">
            <SimpleThemeTest />
          </div>

          {/* 调试信息 */}
          <div className="mt-8">
            <ThemeDebug />
          </div>

          {/* 测试按钮 */}
          <div className="mt-8 text-center">
            <button
              className="btn btn-outline"
              onClick={() => setShowTest(true)}
            >
              打开 DaisyUI 测试页面
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
