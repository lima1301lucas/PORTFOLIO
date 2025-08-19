import { useLanguage } from "../../context/LanguageContext";
import '../Contato/Contato.scss';

function Contato() {
  const { language } = useLanguage();

  return (
    <>
      <section id="contato" className="contato">
        <div className="container">
          <div className="contato-content">
            <div className="title">
              <h1>{language === "pt" ? "Contato" : "Contact"}</h1>
            </div>
          </div>
          <div className="cards-contato-container" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5511998242744&text=Olá!%20Vim%20do%20seu%20portfólio', '_blank')}>
            <div className="contato-card whatsapp-card">
              <div className="card-left"></div>
              <div className="card-right">
                <h2>Whatsapp</h2>
                <div className="card-footer">
                  <p>{language === "pt" ? "Entre em contato" : "Contact me"}</p>
                  <div className="arrow"></div>
                </div>
              </div>
            </div>

            <div className="contato-card email-card" onClick={() => window.location.href = 'mailto:lima1301lucas@gmail.com'}>
              <div className="card-left"></div>
              <div className="card-right">
                <h2>E-mail</h2>
                <div className="card-footer">
                  <p>{language === "pt" ? "Entre em contato" : "Contact me"}</p>
                  <div className="arrow"></div>
                </div>
              </div>
            </div>

            <div className="contato-card linkedin-card" onClick={() => window.open('https://www.linkedin.com/in/lucas-lima-1301/', '_blank')}>
              <div className="card-left"></div>
              <div className="card-right">
                <h2>Linkedin</h2>
                <div className="card-footer">
                  <p>{language === "pt" ? "Entre em contato" : "Contact me"}</p>
                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contato;