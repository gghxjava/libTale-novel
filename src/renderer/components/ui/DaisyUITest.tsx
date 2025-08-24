import { useState } from 'react';

export const DaisyUITest = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themes = ['light', 'dark', 'cupcake'];

  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    setCurrentTheme(theme);
    console.log('Theme changed to:', theme);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">DaisyUI 主题测试</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            {themes.map(theme => (
              <button
                key={theme}
                className={`btn ${currentTheme === theme ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => changeTheme(theme)}
              >
                {theme}
              </button>
            ))}
          </div>

          <div className="text-sm space-y-1">
            <p>
              <strong>当前主题:</strong> {currentTheme}
            </p>
            <p>
              <strong>HTML data-theme:</strong>{' '}
              {document.documentElement.getAttribute('data-theme')}
            </p>
            <p>
              <strong>背景色:</strong>{' '}
              <span className="bg-base-100 px-2 py-1 rounded">base-100</span>
            </p>
            <p>
              <strong>文字色:</strong>{' '}
              <span className="text-base-content">base-content</span>
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
          </div>

          <div className="alert alert-info">
            <span>这是一个信息提示框</span>
          </div>

          <div className="alert alert-success">
            <span>这是一个成功提示框</span>
          </div>

          <div className="alert alert-warning">
            <span>这是一个警告提示框</span>
          </div>

          <div className="alert alert-error">
            <span>这是一个错误提示框</span>
          </div>
        </div>
      </div>
    </div>
  );
};
