import { React } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Propriete from './pages/Propriete';
import DetailProp from './pages/DetailProp';
import Quartier from './pages/Quartier';
import Dashboard from './pages/Dashboard';
import ProprieteQuartier from './pages/ProprieteQuartier'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AjoutMaison from './pages/AjoutMaison';
// import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState} from 'react'

const App = () => {
  // const [IDProp,setIDProp]= useState("")
  // console.log(IDProp);
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/acceuil' element={<About/>}/>
          <Route path='/propriete' element={<Propriete/>}/>
          <Route path='/detail-propriete/:id' element={<DetailProp/>}/>
          <Route path='/quartiers' element={<Quartier/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/propriete-quartier/:id' element={<ProprieteQuartier/>}/>
          <Route path='/se-connecter' element={<SignIn/>}/>
          <Route path='/inscription' element={<SignUp/>}/>
          <Route path='/ajouter-une-maison' element={<AjoutMaison/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
