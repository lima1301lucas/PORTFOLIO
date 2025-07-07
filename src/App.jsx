import './App.css'
import Loading from './components/Loading/Loading.jsx'
import MainContent from './components/MainContent/MainContent.jsx';
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timerStartFade = setTimeout(() => {
      setFadeOut(true); 
    }, 4000);

    const timerHideLoading = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timerStartFade);
      clearTimeout(timerHideLoading);
    };
  }, []);

  return (
    <>
      {loading ? (<Loading fadeOut={fadeOut} />) : (<MainContent />)}
    </>
  );
}

export default App