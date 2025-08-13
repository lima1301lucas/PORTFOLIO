import {useLanguage} from '../../context/LanguageContext';
import { useHeaderControls } from '../../hooks/useHeaderControls';
import '../Header/Header.scss';

function Header({}) {
  const { language, toggleLanguage, toggleTheme } = useHeaderControls();

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo"><img src="/src/assets/logo.svg" alt="Logo"/></div>
          <div className="buttons">
            <button onClick={toggleLanguage} className="lang-btn"><p>{language}</p></button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-btn" />
            <button aria-label="Open menu" className="menu-btn" />
            <button aria-label="Close menu" className="close-btn" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header