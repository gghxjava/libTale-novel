import { useState } from 'react';

export const SimpleThemeTest = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const themes = ['light', 'dark', 'sepia'];

  const changeTheme = (theme: string) => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    setCurrentTheme(theme);
    console.log('Theme changed to:', theme);
    console.log('HTML data-theme:', html.getAttribute('data-theme'));
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">简单主题测试</h2>
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
            <p><strong>当前主题:</strong> {currentTheme}</p>
            <p><strong>HTML data-theme:</strong> {document.documentElement.getAttribute('data-theme')}</p>
            <p><strong>背景色:</strong> <span className="bg-base-100 px-2 py-1 rounded">base-100</span></p>
            <p><strong>文字色:</strong> <span className="text-base-content">base-content</span></p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
          </div>
        </div>
      </div>
    </div>
  );
};
