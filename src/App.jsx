import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Animals from "./pages/animals/Animals";
import Cars from "./pages/Cars/Cars";
import Colors from "./pages/colors/Colors";
import Food from "./pages/food/Food";
import Home from "./pages/home/Home";
import Numbers from "./pages/numbers/Numbers";
import Vehicles from "./pages/vehicles/Vehicles";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Animales" element={<Animals />} />
        <Route path="Colores" element={<Colors />} />
        <Route path="Alimentos" element={<Food />} />
        <Route path="Numeros" element={<Numbers />} />
        <Route path="Vehiculos" element={<Vehicles />} />
        <Route path="Cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App;
