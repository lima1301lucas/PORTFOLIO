import Apresentacao from '../Apresentacao/Apresentacao';
import Sobre from '../Sobre/Sobre';
import Experiencias from '../Experiencias/Experiencias';
import Habilidades from '../Habilidades/Habilidades';
import Projetos from '../Projetos/Projetos';
import Contato from '../Contato/Contato';
import Rodape from '../Rodape/Rodape';

function Home() {
  return (
    <>
      <Apresentacao />
      <Sobre />
      <Experiencias />
      <Habilidades />
      <Projetos />
      <Contato />
      <Rodape />
    </>
  );
}

export default Home;