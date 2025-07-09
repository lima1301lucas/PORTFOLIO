import React, { useState, useEffect } from "react";
import './Menu.css';

const Menu = () => {
  const getInitialTheme = () => {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <section>
      <nav className="menu">
        <div className="menu-header">
          <button className="btn-en">EN</button>
          <button className="btn-theme" aria-label="Alternar tema" onClick={toggleTheme} data-theme={theme}></button>
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