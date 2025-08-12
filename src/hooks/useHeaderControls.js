import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export function useHeaderControls() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return {
    theme,
    toggleTheme,
    language,
    toggleLanguage,
  };
}