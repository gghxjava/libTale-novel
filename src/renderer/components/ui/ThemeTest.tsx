import { useTheme } from '../../hooks/useTheme';

export const ThemeTest = () => {
  const { currentTheme, setTheme, themes } = useTheme();

  const handleThemeChange = (themeId: string) => {
    console.log('Changing theme to:', themeId);

    // 直接设置 HTML 属性
    document.documentElement.setAttribute('data-theme', themeId);

    // 然后更新状态
    setTheme(themeId);

    // 检查 HTML 属性是否更新
    setTimeout(() => {
      const htmlTheme = document.documentElement.getAttribute('data-theme');
      console.log('HTML data-theme after change:', htmlTheme);

      // 检查 CSS 变量
      const computedStyle = getComputedStyle(document.documentElement);
      console.log('CSS variables:', {
        '--p': computedStyle.getPropertyValue('--p'),
        '--s': computedStyle.getPropertyValue('--s'),
        '--a': computedStyle.getPropertyValue('--a'),
        '--b1': computedStyle.getPropertyValue('--b1'),
        '--b2': computedStyle.getPropertyValue('--b2'),
        '--bc': computedStyle.getPropertyValue('--bc'),
      });
    }, 100);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">主题切换测试</h2>
        <div className="space-y-4">
          <div className="flex gap-2">
            {themes.map(theme => (
              <button
                key={theme.id}
                className={`btn ${currentTheme.id === theme.id ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                {theme.name}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              className="btn btn-sm btn-outline"
              onClick={() => {
                document.documentElement.setAttribute('data-theme', 'light');
                console.log('Direct light theme set');
              }}
            >
              直接设置浅色
            </button>
            <button
              className="btn btn-sm btn-outline"
              onClick={() => {
                document.documentElement.setAttribute('data-theme', 'dark');
                console.log('Direct dark theme set');
              }}
            >
              直接设置深色
            </button>
            <button
              className="btn btn-sm btn-outline"
              onClick={() => {
                document.documentElement.setAttribute('data-theme', 'cupcake');
                console.log('Direct cupcake theme set');
              }}
            >
              直接设置护眼
            </button>
          </div>

          <div className="text-sm space-y-1">
            <p>
              <strong>当前主题:</strong> {currentTheme.name} ({currentTheme.id})
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
        </div>
      </div>
    </div>
  );
};
