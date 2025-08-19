import { useState } from "react";
import projetosData from "../../assets/data/projetos.json";
import Projeto from "../Projeto/Projeto";
import "../Projetos/Projetos.scss";

function Projetos() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const categorias = ["Todos", "UI/UX Design", "Front-End"];
  const projetosFiltrados = categoriaSelecionada === "Todos" ? projetosData : projetosData.filter((projeto) => projeto.categoria === categoriaSelecionada);

  return (
    <section id="projetos" className="projetos">
      <div className="container">
        <div className="projetos-content">
          <div className="title">
            <h1>Projetos</h1>
          </div>

          <div className="filter-buttons">
            {categorias.map((cat) => (
              <button key={cat} className={categoriaSelecionada === cat ? "active" : ""} onClick={() => setCategoriaSelecionada(cat)}>{cat}</button>
            ))}
          </div>

          <div className="cards-projeto-container">
            {projetosFiltrados.map((projeto) => (
              <div className="projeto-card" key={projeto.id}>
                <div className="projeto-image">
                  <img src={projeto.foto} alt={projeto.titulo} />
                </div>
                <div className="projeto-info">
                  <div className="projeto-titulo">
                    <h2>{projeto.titulo}</h2>
                  </div>
                  <div className="projeto-resumo">
                    <p className="resumo">{projeto.resumo}</p>
                  </div>
                  <div className="tags">
                    {projeto.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <button className="ver-projeto" onClick={() => setProjetoSelecionado(projeto)}>Ver projeto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {projetoSelecionado && (
        <Projeto projeto={projetoSelecionado} onClose={() => setProjetoSelecionado(null)}/>
      )}
    </section>
  );
}

export default Projetos;