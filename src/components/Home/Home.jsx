import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Apresentacao from '../Apresentacao/Apresentacao';
import Sobre from '../Sobre/Sobre';
import Experiencias from '../Experiencias/Experiencias';
import Habilidades from '../Habilidades/Habilidades';
import Projetos from '../Projetos/Projetos';
import Contato from '../Contato/Contato';
import Rodape from '../Rodape/Rodape';

function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem('hasLoaded') ? false : true;
  });

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

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