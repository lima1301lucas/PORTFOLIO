import Header from '../Header/Header';
import '../Apresentacao/Apresentacao.scss';

function Apresentacao() {
  return (
    <>
      <Header />
      <section id="apresentacao" className="apresentacao">
        <div className="container">
          <div className="apresentacao-content">
            <div className="apresentacao-left">
              <h1>Olá, meu nome é <span className="highlight">Lucas! </span>Sou<br/>desenvolvedor front-end...</h1>
              <div className="botoes">
                <button className="btn-contato">
                  <span>Contato</span>
                  <span className="icon-arrow"></span>
                </button>
                <button className="btn-projetos">
                  <span>Meus projetos</span>
                  <span className="icon-arrow"></span>
                </button>
              </div>
              <div className="redes-sociais">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-linkedin"></a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-github"></a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="icon-behance"></a>
                <a href="https://dev.to" target="_blank" rel="noreferrer" className="icon-devto"></a>
              </div>
            </div>
            <div className="apresentacao-right">
              <div className="foto-animada"></div>
            </div>
            <div className="scroll-indicator">
              <div className="icon-mouse"></div>
              <div className="icon-down"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apresentacao;