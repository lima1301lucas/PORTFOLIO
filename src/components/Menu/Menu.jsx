import {useNavigate, useLocation} from 'react-router-dom';
import Header from '../Header/Header';
import {scrollToSection} from '../../hooks/useHeaderControls';
import './Menu.scss';

function Menu() {
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
            <li onClick={() => handleScroll('apresentacao')}><span>HOME</span></li>
            <li onClick={() => handleScroll('sobre')}><span>SOBRE MIM</span></li>
            <li onClick={() => handleScroll('experiencias')}><span>EXPERIÊNCIAS</span></li>
            <li><span>HABILIDADES</span></li>
            <li><span>PROJETOS</span></li>
            <li><span>CONTATO</span></li>
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