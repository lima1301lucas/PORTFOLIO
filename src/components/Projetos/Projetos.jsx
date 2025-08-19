import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import projetosData from "../../assets/data/projetos.json";
import Projeto from "../Projeto/Projeto";
import "../Projetos/Projetos.scss";

function Projetos() {
  const { language } = useLanguage();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos"); // valor interno PT
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const categorias = [
    { pt: "Todos", en: "All" },
    { pt: "UI/UX Design", en: "UI/UX Design" },
    { pt: "Front-End", en: "Front-End" }
  ];

  const projetosFiltrados =
    categoriaSelecionada === "Todos"
      ? projetosData
      : projetosData.filter(
          (projeto) =>
            projeto.categoria.pt === categoriaSelecionada ||
            projeto.categoria.en === categoriaSelecionada
        );

  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="projetos-content">
          <div className="title">
            <h1>{language === "pt" ? "Projetos" : "Projects"}</h1>
          </div>

          <div className="filter-buttons">
            {categorias.map((cat) => (
              <button
                key={cat.pt}
                className={cat.pt === categoriaSelecionada ? "active" : ""}
                onClick={() => setCategoriaSelecionada(cat.pt)}
              >
                {language === "pt" ? cat.pt : cat.en}
              </button>
            ))}
          </div>

          <div className="cards-projeto-container">
            {projetosFiltrados.map((projeto) => (
              <div className="projeto-card" key={projeto.id}>
                <div className="projeto-image">
                  <img src={projeto.foto} alt={projeto.titulo[language]} />
                </div>
                <div className="projeto-info">
                  <div className="projeto-titulo">
                    <h2>{projeto.titulo[language]}</h2>
                  </div>
                  <div className="projeto-resumo">
                    <p className="resumo">{projeto.resumo[language]}</p>
                  </div>
                  <div className="tags">
                    {projeto.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <button
                    className="ver-projeto"
                    onClick={() => setProjetoSelecionado(projeto)}
                  >
                    {language === "pt" ? "Ver projeto" : "See project"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {projetoSelecionado && (
        <Projeto projeto={projetoSelecionado} onClose={() => setProjetoSelecionado(null)} language={language}/>
      )}
    </section>
  );
}

export default Projetos;