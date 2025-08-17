import '../Contato/Contato.scss';

function Contato() {
  return (
    <>
      <section id="contato" className="contato">
        <div className="container">
          <div className="contato-content">
            <div className="title">
              <h1>Contato</h1>
            </div>
          </div>
          <div className="cards-contato-container">
            <div className="contato-card whatsapp-card">
              <div className="card-left"></div>
              <div className="card-right">
                <h2>Whatsapp</h2>
                <div className="card-footer">
                  <p>Entre em contato</p>
                  <div className="arrow"></div>
                </div>
              </div>
            </div>

            <div className="contato-card email-card">
              <div className="card-left"></div>
              <div className="card-right">
                <h2>E-mail</h2>
                <div className="card-footer">
                  <p>Entre em contato</p>
                  <div className="arrow"></div>
                </div>
              </div>
            </div>

            <div className="contato-card linkedin-card">
              <div className="card-left"></div>
              <div className="card-right">
                <h2>Linkedin</h2>
                <div className="card-footer">
                  <p>Entre em contato</p>
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