import '../Habilidades/Habilidades.scss';
import habilidades from "../../assets/data/skills.json";
import { useLanguage } from '../../context/LanguageContext';

function Habilidades() {
  const { language } = useLanguage();
  const habilidadesData = habilidades;

  return (
    <section id="habilidades" className="habilidades">
      <div className="container">
        <div className="habilidades-content">
          <div className="title">
            <h1>{language === 'pt' ? 'Habilidades' : 'Skills'}</h1>
          </div>
          <div className="cards-container">
            {habilidadesData.map((area, index) => (
              <div className="card" key={index}>
                <h2>{area.titulo[language]}</h2>
                <div className="tech-list">
                  {area.tecnologias.map((tech, idx) => (
                    <div className="tech-card" key={idx}>
                      <div className="icon-box">
                        <img src={tech.icone} alt={tech.nome[language]} />
                      </div>
                      <p>{tech.nome[language]}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;