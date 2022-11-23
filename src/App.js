import { React } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Propriete from './pages/Propriete';
import DetailProp from './pages/DetailProp';
import Quartier from './pages/Quartier';
import Dashboard from './pages/Dashboard';
import ProprieteQuartier from './pages/ProprieteQuartier'
// import './styles/index.scss'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/acceuil' element={<About/>}/>
          <Route path='/propriete' element={<Propriete/>}/>
          <Route path='/detail-propriete/:id' element={<DetailProp/>}/>
          <Route path='/quartiers' element={<Quartier/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/propriete-quartier' element={<ProprieteQuartier/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
