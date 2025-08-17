import '../Habilidades/Habilidades.scss';
import habilidades from "../../assets/data/skills.json";

const habilidadesData = habilidades;

function Habilidades() {
  return (
    <>
      <section id="habilidades" className="habilidades">
        <div className="container">
          <div className="habilidades-content">
            <div className="title">
              <h1>Habilidades</h1>
            </div>
            <div className="cards-container">
              {habilidadesData.map((area, index) => (
                <div className="card" key={index}>
                  <h2>{area.titulo}</h2>
                  <div className="tech-list">
                    {area.tecnologias.map((tech, idx) => (
                      <div className="tech-card" key={idx}>
                        <div className="icon-box">
                          <img src={tech.icone} alt={tech.nome} />
                        </div>
                        <p>{tech.nome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Habilidades;