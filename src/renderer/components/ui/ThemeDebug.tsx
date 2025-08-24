import { useTheme } from '../../hooks/useTheme';

export const ThemeDebug = () => {
  const { currentTheme, themes } = useTheme();

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <h3 className="card-title">主题调试信息</h3>
        <div className="space-y-2 text-sm">
          <p>
            <strong>当前主题 ID:</strong> {currentTheme.id}
          </p>
          <p>
            <strong>当前主题名称:</strong> {currentTheme.name}
          </p>
          <p>
            <strong>HTML data-theme:</strong>{' '}
            {document.documentElement.getAttribute('data-theme')}
          </p>
          <p>
            <strong>可用主题:</strong> {themes.map(t => t.id).join(', ')}
          </p>
          <p>
            <strong>CSS 变量检查:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              --color-primary:{' '}
              {getComputedStyle(document.documentElement).getPropertyValue(
                '--color-primary'
              )}
            </li>
            <li>
              --color-background:{' '}
              {getComputedStyle(document.documentElement).getPropertyValue(
                '--color-background'
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
