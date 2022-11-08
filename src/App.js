import { React } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Propriete from './pages/Propriete';
import DetailProp from './pages/DetailProp';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/acceuil' element={<About/>}/>
          <Route path='/propriete' element={<Propriete/>}/>
          <Route path='/detail-propriete' element={<DetailProp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
