import { useLanguage } from "../../context/LanguageContext";
import '../Sobre/Sobre.scss';

function Sobre() {
  const { language } = useLanguage();
  return (
    <>
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="title">
              <h1>{language === "pt" ? "Sobre mim" : "About me"}</h1>
            </div>
            <div className="sobre-left">
              <div className="polaroid">
              </div>
            </div>
            <div className="sobre-right">
              <p>
                {language === "pt"
                  ? "👋🏻 Olá, meu nome é Lucas Lima. Tenho 22 anos, moro em São Paulo."
                  : "👋🏻 Hi, my name is Lucas Lima. I'm 22 years old and I live in São Paulo."}
              </p>
              <p>
                {language === "pt"
                  ? "Meu primeiro contato com programação foi em 2019, quando iniciei um curso técnico de Desenvolvimento de Sistemas e me apaixonei logo de cara pelo desenvolvimento front-end e design de interfaces. A curiosidade virou motivação e aos poucos fui me especializando."
                  : "My first contact with programming was in 2019, when I started a technical course in Systems Development and immediately fell in love with front-end development and interface design. Curiosity turned into motivation, and I gradually specialized myself."}
              </p>
              <p>
                {language === "pt"
                  ? "Sou uma pessoa detalhista com a criação de interfaces. Gosto de testar, planejar, buscar referências e pensar em cada detalhe antes de colocar a mão no código. Para mim, criar é tanto sobre organização quanto sobre criatividade. Valorizo muito o trabalho em equipe, pois acredito que boas ideias surgem da colaboração. O que mais me motiva na área é ver uma interface ganhando vida, resolver problemas e estar em constante evolução e aprendizado."
                  : "I am a detail-oriented person when creating interfaces. I like to test, plan, seek references, and think about every detail before coding. For me, creating is about both organization and creativity. I highly value teamwork because I believe good ideas come from collaboration. What motivates me most in this field is seeing an interface come to life, solving problems, and being in constant evolution and learning."}
              </p>
              <p>
                {language === "pt"
                  ? "Fora do código, sou apaixonado por arte, música, gastronomia, séries, filmes e tecnologia. Também tenho grande interesse por mobilidade urbana e meios de transporte."
                  : "Outside of coding, I am passionate about art, music, gastronomy, series, movies, and technology. I also have a strong interest in urban mobility and transportation."}
              </p>
              <p>
                {language === "pt"
                  ? "Meu objetivo com este portfólio é despertar seu interesse pelo que posso criar e mostrar meu trabalho como desenvolvedor, sempre em evolução."
                  : "My goal with this portfolio is to spark your interest in what I can create and showcase my work as a developer, always evolving."}
              </p>
              <div className="acoes">
                <button className="btn-instagram" onClick={() => window.open("https://www.instagram.com/luskaz/", "_blank")}>
                  {language === "pt" ? "Instagram" : "Instagram"}
                </button>
                <button className="btn-download">
                  {language === "pt" ? "Download CV" : "Download CV"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;