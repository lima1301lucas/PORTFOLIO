import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import dados from "../../assets/data/experiencias.json";
import "../Experiencias/Experiencias.scss";

function Experiencias() {
  const { language } = useLanguage();
  const [selected, setSelected] = useState("formacoes");
  const listaAtual = selected === "formacoes" ? dados.formacoes : dados.trabalhos;

  return (
    <section id="experiencias" className="experiencias">
      <div className="container">
        <div className="experiencias-content">
          <div className="title">
            <h1>{language === "pt" ? "Experiências" : "Experiences"}</h1>
          </div>
          <div className="toggle-buttons">
            <button className={selected === "formacoes" ? "active" : ""} onClick={() => setSelected("formacoes")}>
              <span className={`icon cap ${selected === "formacoes" ? "white" : ""}`}></span>
              {language === "pt" ? "Formações" : "Education"}
            </button>
            <button className={selected === "trabalhos" ? "active" : ""} onClick={() => setSelected("trabalhos")}>
              <span className={`icon briefcase ${selected === "trabalhos" ? "white" : ""}`}></span>
              {language === "pt" ? "Trabalho" : "Work"}
            </button>
          </div>
          <div className="timeline">
            <div className="line"></div>
            {listaAtual.map((item, index) => (
              <div className="timeline-wrapper" key={index}>
                <div className="dot"></div>
                <div className={`timeline-item ${index % 2 === 0 ? "right" : "left"}`}>
                  <div className="content">
                    <h2>{item.titulo[language]}</h2>
                    <p className="empresa">{item.empresa[language]}</p>
                    <p className="data">{item.data}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencias;