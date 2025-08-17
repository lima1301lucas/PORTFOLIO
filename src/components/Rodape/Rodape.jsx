import '../Rodape/Rodape.scss';

function Rodape() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-content">
          <p>Todos os direitos reservados. &copy; {anoAtual} - Lucas</p>
      </div>
    </footer>
  );
}

export default Rodape;