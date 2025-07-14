import './Cabecalho.scss';

const Cabecalho = () => {
  return (
    <header>
      <nav className="cabecalho">
        <div className="container">
          <div className="logo"></div>
          <div className="cabecalho-nav">
            <button className="btn-en">EN</button>
            <button className="btn-theme" aria-label="Alternar tema"></button>
            <button className="btn-close" aria-label="Fechar menu"></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Cabecalho;