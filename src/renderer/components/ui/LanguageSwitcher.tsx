import { useLanguage } from '../../hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">语言:</span>
      <select
        value={currentLanguage}
        onChange={e => changeLanguage(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {availableLanguages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};
