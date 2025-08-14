import '../Sobre/Sobre.scss';

function Sobre() {
  return (
    <>
      <section id="sobre" className="sobre">
        <div className="container">
          <div className="sobre-content">
            <div className="title">
              <h1>Sobre mim</h1>
            </div>
            <div className="sobre-left">
              <div className="polaroid">
              </div>
            </div>
            <div className="sobre-right">
              <p>👋🏻 Olá, meu nome é Lucas Lima. Tenho 22 anos, moro em São Paulo.</p>
              <p>Meu primeiro contato com programação foi em 2019, quando iniciei um curso técnico de Desenvolvimento de Sistemas e me apaixonei logo de cara pelo desenvolvimento front-end e design de interfaces. A curiosidade virou motivação e aos poucos fui me especializando.</p>
              <p>Sou uma pessoa detalhista com a criação de interfaces. Gosto de testar, planejar, buscar referências e pensar em cada detalhe antes de colocar a mão no código. Para mim, criar é tanto sobre organização quanto sobre criatividade. Valorizo muito o trabalho em equipe, pois acredito que boas ideias surgem da colaboração. O que mais me motiva na área é ver uma interface ganhando vida, resolver problemas e estar em constante evolução e aprendizado.</p>
              <p>Fora do código, sou apaixonado por arte, música, gastronomia, séries, filmes e tecnologia. Também tenho grande interesse por mobilidade urbana e meios de transporte.</p>
              <p>Meu objetivo com este portfólio é despertar seu interesse pelo que posso criar e mostrar meu trabalho como desenvolvedor, sempre em evolução.</p>
              <div className="acoes">
                <button className="btn-instagram">Instagram</button>
                <button className="btn-download">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;