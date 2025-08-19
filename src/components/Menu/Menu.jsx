import {useNavigate, useLocation} from 'react-router-dom';
import { useLanguage } from "../../context/LanguageContext";
import {scrollToSection} from '../../hooks/useHeaderControls';
import Header from '../Header/Header';
import './Menu.scss';

function Menu() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        scrollToSection(id);
      }, 100); 
    } else {
      scrollToSection(id);
    }
  };

  return (
    <section>
      <nav className="menu">
        <Header />
          <ul className="menu-nav">
            <li onClick={() => handleScroll('apresentacao')}><span>{language === "pt" ? "HOME" : "HOME"}</span></li>
            <li onClick={() => handleScroll('sobre')}><span>{language === "pt" ? "SOBRE MIM" : "ABOUT ME"}</span></li>
            <li onClick={() => handleScroll('experiencias')}><span>{language === "pt" ? "EXPERIÊNCIAS" : "EXPERIENCES"}</span></li>
            <li onClick={() => handleScroll('habilidades')}><span>{language === "pt" ? "HABILIDADES" : "SKILLS"}</span></li>
            <li onClick={() => handleScroll('projetos')}><span>{language === "pt" ? "PROJETOS" : "PROJECTS"}</span></li>
            <li onClick={() => handleScroll('contato')}><span>{language === "pt" ? "CONTATO" : "CONTACT"}</span></li>
          </ul>
          <div className="menu-social">
            <a className="icon linkedin" href="https://www.linkedin.com/in/lucas-lima-1301/" target="_blank" rel="noopener noreferrer"></a>
            <a className="icon github" href="https://github.com/lima1301lucas" target="_blank" rel="noopener noreferrer"></a>
            <a className="icon behance" href="https://www.behance.net/lucas-lima-1301" target="_blank" rel="noopener noreferrer"></a>
            <a className="icon devto" href="https://dev.to/lima1301lucas" target="_blank" rel="noopener noreferrer"></a>
          </div>
      </nav>
    </section>
  );
}

export default Menu;