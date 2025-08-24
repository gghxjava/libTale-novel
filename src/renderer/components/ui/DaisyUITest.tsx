import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface DaisyUITestProps {
  onBack?: () => void;
}

export const DaisyUITest = ({ onBack }: DaisyUITestProps) => {
  const { currentTheme, setTheme } = useTheme();
  const themes = ['light', 'dark', 'sepia'];

  const changeTheme = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">DaisyUI 测试页面</h1>
        {onBack && (
          <button className="btn btn-ghost" onClick={onBack}>
            返回主页
          </button>
        )}
      </div>

      {/* 主题切换 */}
      <div className="flex justify-center mb-8">
        <div className="join">
          {themes.map(theme => (
            <button
              key={theme}
              className={`join-item btn ${currentTheme.id === theme ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => changeTheme(theme)}
            >
              {theme}
            </button>
          ))}
        </div>
      </div>

      {/* 组件展示 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 按钮 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">按钮组件</h2>
            <div className="space-y-2">
              <button className="btn btn-primary w-full">Primary</button>
              <button className="btn btn-secondary w-full">Secondary</button>
              <button className="btn btn-accent w-full">Accent</button>
              <button className="btn btn-ghost w-full">Ghost</button>
            </div>
          </div>
        </div>

        {/* 输入框 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">输入框组件</h2>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="普通输入框"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                placeholder="带标签"
                className="input input-bordered w-full"
              />
              <textarea
                placeholder="文本域"
                className="textarea textarea-bordered w-full"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        {/* 选择器 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">选择器组件</h2>
            <div className="space-y-2">
              <select className="select select-bordered w-full">
                <option>选项 1</option>
                <option>选项 2</option>
                <option>选项 3</option>
              </select>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">开关</span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 进度条 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">进度条</h2>
            <progress
              className="progress progress-primary w-full"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress progress-secondary w-full"
              value="50"
              max="100"
            ></progress>
            <progress
              className="progress progress-accent w-full"
              value="30"
              max="100"
            ></progress>
          </div>
        </div>

        {/* 徽章 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">徽章</h2>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-secondary">Secondary</span>
              <span className="badge badge-accent">Accent</span>
              <span className="badge badge-outline">Outline</span>
            </div>
          </div>
        </div>

        {/* 警告框 */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">警告框</h2>
            <div className="space-y-2">
              <div className="alert alert-info">
                <span>这是一个信息提示</span>
              </div>
              <div className="alert alert-success">
                <span>这是一个成功提示</span>
              </div>
              <div className="alert alert-warning">
                <span>这是一个警告提示</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 当前主题信息 */}
      <div className="mt-8 text-center">
        <p className="text-base-content/70">
          当前主题: <span className="font-bold">{currentTheme.name}</span>
        </p>
        <p className="text-sm text-base-content/50 mt-2">
          HTML data-theme 属性:{' '}
          {document.documentElement.getAttribute('data-theme')}
        </p>
      </div>
    </div>
  );
};
