import { useLanguage } from '../../hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-base-content">语言:</span>
      <select
        value={currentLanguage}
        onChange={e => changeLanguage(e.target.value)}
        className="select select-bordered select-sm w-full max-w-xs"
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
