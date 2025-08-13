import { useNavigate, useLocation } from 'react-router-dom'
import { useHeaderControls } from '../../hooks/useHeaderControls';
import '../Header/Header.scss';

function Header() {
  const { language, toggleLanguage, toggleTheme } = useHeaderControls();
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuOpen = location.pathname === '/menu';

  const toggleMenu = () => {
    if (isMenuOpen) {
      navigate('/'); 
    } else {
      navigate('/menu');
    }
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/src/assets/logo.svg" alt="Logo" />
          </div>
          <div className="buttons">
            <button onClick={toggleLanguage} className="lang-btn"><p>{language}</p></button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-btn" />
            <button onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"} className={isMenuOpen ? "close-btn" : "menu-btn"} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;