import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// 禁用安全警告
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  // 创建浏览器窗口
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false, // 开发时关闭webSecurity
    },
    // icon: path.join(__dirname, '../assets/icon.png'), // 暂时注释掉图标
    show: false, // 先隐藏窗口
  });

  // 窗口准备好后显示
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show();
  });

  // 加载应用
  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;
  if (isDev) {
    // 开发模式：尝试加载本地开发服务器
    mainWindow.loadURL('http://localhost:5173').catch(() => {
      // 如果开发服务器不可用，显示一个简单的页面
      mainWindow?.loadURL(
        'data:text/html,<html><body><h1>LibTale Novel Reader</h1><p>请先运行 pnpm dev 启动开发服务器</p></body></html>'
      );
    });
    // 打开开发者工具
    mainWindow.webContents.openDevTools();
  } else {
    // 生产模式：加载打包后的文件
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // 处理外部链接
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  // 窗口关闭时清理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 应用准备就绪时创建窗口
app.whenReady().then(() => {
  createWindow();

  // 在 macOS 上，当点击 dock 图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 当所有窗口都关闭时退出应用
app.on('window-all-closed', () => {
  // 在 macOS 上，应用程序和菜单栏通常会保持活动状态，
  // 直到用户使用 Cmd + Q 明确退出
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 处理未捕获的异常
process.on('uncaughtException', error => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
