import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import Menu from './components/Menu/Menu';
import Apresentacao from './components/Apresentacao/Apresentacao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App