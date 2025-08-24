# 国际化 (i18n) 使用指南

## 📁 文件结构

```
src/shared/i18n/
├── index.ts                    # i18n配置文件
└── locales/
    ├── en/                     # 英文翻译
    │   ├── common.json        # 通用翻译
    │   ├── navigation.json    # 导航翻译
    │   ├── library.json       # 书库翻译
    │   ├── reader.json        # 阅读器翻译
    │   ├── upload.json        # 上传翻译
    │   ├── settings.json      # 设置翻译
    │   ├── book.json          # 书籍翻译
    │   └── themes.json        # 主题翻译
    └── zh/                     # 中文翻译
        ├── common.json
        ├── navigation.json
        ├── library.json
        ├── reader.json
        ├── upload.json
        ├── settings.json
        ├── book.json
        └── themes.json
```

## 🚀 使用方法

### 1. 基本使用

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('common.appName')}</h1>
      <p>{t('library.noBooks')}</p>
    </div>
  );
}
```

### 2. 指定命名空间

```tsx
import { useTranslation } from 'react-i18next';

function LibraryComponent() {
  const { t } = useTranslation('library');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('noBooks')}</p>
    </div>
  );
}
```

### 3. 使用多个命名空间

```tsx
import { useTranslation } from 'react-i18next';

function ReaderComponent() {
  const { t } = useTranslation(['reader', 'common']);

  return (
    <div>
      <h1>{t('reader:title')}</h1>
      <button>{t('common:close')}</button>
    </div>
  );
}
```

### 4. 带参数的翻译

```tsx
function BookComponent() {
  const { t } = useTranslation('book');

  return (
    <div>
      <p>{t('readingProgress', { percent: 75 })}</p>
      <p>{t('pageInfo', { current: 5, total: 100 })}</p>
    </div>
  );
}
```

## 📝 添加新的翻译

### 1. 添加新的翻译键

在对应的json文件中添加新的键值对：

```json
// src/shared/i18n/locales/en/common.json
{
  "appName": "LibTale Novel Reader",
  "newKey": "New Translation"
}
```

```json
// src/shared/i18n/locales/zh/common.json
{
  "appName": "LibTale 小说阅读器",
  "newKey": "新翻译"
}
```

### 2. 添加新的模块

1. 创建新的json文件：

   ```
   src/shared/i18n/locales/en/newModule.json
   src/shared/i18n/locales/zh/newModule.json
   ```

2. 在 `src/shared/i18n/index.ts` 中导入：

   ```typescript
   import enNewModule from './locales/en/newModule.json';
   import zhNewModule from './locales/zh/newModule.json';
   ```

3. 添加到resources中：

   ```typescript
   const resources = {
     en: {
       // ... 其他模块
       newModule: enNewModule,
     },
     zh: {
       // ... 其他模块
       newModule: zhNewModule,
     },
   };
   ```

4. 添加到命名空间列表：
   ```typescript
   ns: ['common', 'navigation', 'library', 'reader', 'upload', 'settings', 'book', 'themes', 'newModule'],
   ```

## 🎯 最佳实践

### 1. 命名规范

- 使用小驼峰命名：`appName`, `readingProgress`
- 使用描述性名称：`uploadBook` 而不是 `upload`
- 保持键名简洁但清晰

### 2. 模块化组织

- 按功能模块组织翻译文件
- 通用翻译放在 `common.json`
- 特定功能的翻译放在对应的模块文件中

### 3. 参数使用

- 使用插值语法：`{{variable}}`
- 提供默认值：`{{variable, defaultValue}}`
- 使用复数形式：`{{count, one: 'book', other: 'books'}}`

### 4. 测试翻译

```tsx
// 在开发环境中测试翻译
const { t } = useTranslation();
console.log(t('common.appName')); // 检查翻译是否正确加载
```

## 🔧 故障排除

### 1. 翻译不显示

- 检查键名是否正确
- 确认命名空间是否正确
- 验证json文件语法

### 2. 参数不生效

- 检查插值语法：`{{variable}}`
- 确认参数对象格式正确

### 3. 新翻译不生效

- 重启开发服务器
- 检查浏览器缓存
- 验证文件路径正确

## 📚 相关资源

- [react-i18next 文档](https://react.i18next.com/)
- [i18next 文档](https://www.i18next.com/)
- [国际化最佳实践](https://www.i18next.com/overview/best-practices)
