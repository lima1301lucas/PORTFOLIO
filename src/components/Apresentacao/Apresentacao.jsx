import { useLanguage } from "../../context/LanguageContext";
import {scrollToSection} from '../../hooks/useHeaderControls';
import Header from '../Header/Header';
import '../Apresentacao/Apresentacao.scss';

function Apresentacao() {
  const { language } = useLanguage();

  return (
    <>
      <Header />
      <section id="apresentacao" className="apresentacao">
        <div className="container">
          <div className="apresentacao-content">
            <div className="apresentacao-left">
              <h1>
                {language === "pt" ? (
                  <>
                    Olá, meu nome é <span className="highlight">Lucas!</span> Sou<br />
                    desenvolvedor front-end...
                  </>
                ) : (
                  <>
                    Hi, my name is <span className="highlight">Lucas!</span> I'm a<br />
                    front-end developer...
                  </>
                )}
              </h1>

              <div className="botoes">
                <button className="btn-contato" onClick={() => scrollToSection('contato')}>
                  <span>{language === "pt" ? "Contato" : "Contact"}</span>
                  <span className="icon-arrow"></span>
                </button>
                <button className="btn-projetos" onClick={() => scrollToSection('projetos')}>
                  <span>{language === "pt" ? "Meus projetos" : "My projects"}</span>
                  <span className="icon-arrow"></span>
                </button>
              </div>
              <div className="redes-sociais">
                <a href="https://www.linkedin.com/in/lucas-lima-1301/" target="_blank" rel="noreferrer" className="icon-linkedin"></a>
                <a href="https://github.com/lima1301lucas" target="_blank" rel="noreferrer" className="icon-github"></a>
                <a href="https://www.behance.net/lucas-lima-1301" target="_blank" rel="noreferrer" className="icon-behance"></a>
                <a href="https://dev.to/lima1301lucas" target="_blank" rel="noreferrer" className="icon-devto"></a>
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