import Apresentacao from '../Apresentacao/Apresentacao';
import Sobre from '../Sobre/Sobre';
import Experiencias from '../Experiencias/Experiencias';
import Habilidades from '../Habilidades/Habilidades';
import Rodape from '../Rodape/Rodape';

function Home() {
  return (
    <>
      <Apresentacao />
      <Sobre />
      <Experiencias />
      <Habilidades />
      <Rodape />
    </>
  );
}

export default Home;