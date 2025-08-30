import { useLanguage } from '../../hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, availableLanguages } = useLanguage();

  const handleLanguageChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLanguage = e.target.value;
    console.log('Changing language to:', newLanguage);
    try {
      await changeLanguage(newLanguage);
      console.log('Language changed successfully to:', newLanguage);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-base-content">语言:</span>
      <select
        value={currentLanguage}
        onChange={handleLanguageChange}
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
