import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inicio from "./pages/Inicio";

const App = () => {

  const [color] = useState("#ebddf4")
document.body.style.backgroundColor = color

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/inicio" element={<Inicio/>} />
    </Routes>
  )
}

export default App