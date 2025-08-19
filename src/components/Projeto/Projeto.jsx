import { button } from "framer-motion/client";
import "./Projeto.scss";

function Projeto({ projeto, onClose }) {
  return (
    <section className="modal-overlay">
      <div className="modal-area">
        <div className="modal-functions">
          <button className="close-modal-btn" onClick={onClose}></button>
        </div>
        <div className="modal-content">
          <div className="left">
            <img src={projeto.foto} alt={projeto.titulo} />
          </div>
          <div className="right">
            <div className="modal-main">
              <div className="modal-titulo">
                <h1>{projeto.titulo}</h1>
              </div>
              <div className="modal-descricao">
                <p className="descricao">{projeto.descricao}</p>
              </div>
              <div className="modal-funcionalidades">
                <h2>Funcionalidades</h2>
                <ul>
                  {projeto.funcionalidades.map((func, index) => (
                    <li key={index}>{func}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-tags">
                <h2>Tecnologias</h2>
                <div className="tags">
                  {projeto.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-links">
              {projeto.links.map((link, index) => (
                <button key={index} className="modal-button" onClick={() => window.open(link.url, "_blank")}>{link.nome}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projeto;
