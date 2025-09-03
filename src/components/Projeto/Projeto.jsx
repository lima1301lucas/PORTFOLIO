import "./Projeto.scss";

function Projeto({ projeto, onClose, language }) {
  return (
    <section className="modal-overlay">
      <div className="modal-area">
        <div className="modal-functions">
          <button className="close-modal-btn" onClick={onClose}></button>
        </div>
        <div className="modal-content">
          <div className="modal-content-left">
            <img src={projeto.foto} alt={projeto.titulo[language]} />
          </div>
          <div className="modal-content-right">
            <div className="modal-main">
              <div className="modal-titulo">
                <h1>{projeto.titulo[language]}</h1>
              </div>
              <div className="modal-descricao">
                <p className="descricao">{projeto.descricao[language]}</p>
              </div>
              <div className="modal-funcionalidades">
                <h2>{language === "pt" ? "Funcionalidades" : "Features"}</h2>
                <ul>
                  {projeto.funcionalidades[language].map((func, index) => (
                    <li key={index}>{func}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-tags">
                <h2>{language === "pt" ? "Tecnologias" : "Technologies"}</h2>
                <div className="tags">
                  {projeto.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-links">
              {projeto.links.map((link, index) => (
                <button
                  key={index}
                  className="modal-button"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  {link.nome[language]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projeto;