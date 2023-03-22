
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Bemutatkozas from './Pages/Bemutatkozas';
import Fooldal from './Pages/Fooldal';
import Kapcsolat from './Pages/Kapcsolat';

function App() {
  return (
    <div className="App">   
      <Navbar /> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Fooldal />} />
          <Route path='/bemutatkozas' element={<Bemutatkozas />} />
          <Route path='/kapcsolat' element={<Kapcsolat />} />
        </Routes>
      </BrowserRouter>    
      <Footer />
    </div>
  );
}

export default App;
