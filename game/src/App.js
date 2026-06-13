import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Imports paginas
import Home from "./pages/Home";
import Game from "./pages/Game";
import Desenvolvedores from "./pages/Desenvolvedores";
import Sobre from "./pages/Sobre";
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
            <Route path="/devs" element={<Desenvolvedores/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
