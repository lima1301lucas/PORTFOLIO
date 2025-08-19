import { useLanguage } from "../../context/LanguageContext";
import '../Rodape/Rodape.scss';

function Rodape() {
  const { language } = useLanguage();
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
          <p>{language === "pt" ? "Todos os direitos reservados." : "All rights reserved"} &copy; {anoAtual} - Lucas</p>
      </div>
    </footer>
  );
}

export default Rodape;