import { React } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/acceuil' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
