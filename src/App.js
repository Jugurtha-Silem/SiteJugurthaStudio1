import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Styles/index.scss';
import LogicPro from './pages/LogicPro';
import Protools from './pages/Protools';
import Accueil from './pages/Accueil';
import NousSetenir from './pages/NousSetenir';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route  path='/'   element={<Accueil />} />
          <Route  path='/LogicPro'   element={<LogicPro />} />
          <Route  path='/Protools'   element={<Protools />} />
          <Route  path='/noussetenir'   element={<NousSetenir/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
