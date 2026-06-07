import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imports paginas
import Home from "./pages/Home";
import Game from "./pages/Game";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/game" element={<Game/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
