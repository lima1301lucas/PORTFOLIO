import './Menu.css';

const Menu = () => {
  return (
    <section className="">
        <nav className="menu">
          <div className="menu-header">
            <button className="btn-en">EN</button>
            <button className="btn-theme" aria-label="Alternar tema"></button>
            <button className="btn-close" aria-label="Fechar menu"></button>
          </div>

          <ul className="menu-nav">
              <li><span>HOME</span></li>
              <li><span>SOBRE MIM</span></li>
              <li><span>EXPERIÊNCIAS</span></li>
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
};

export default Menu;