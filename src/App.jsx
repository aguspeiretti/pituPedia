import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Animals from "./pages/animals/Animals";
import Colors from "./pages/colors/Colors";
import Food from "./pages/food/Food";
import Numbers from "./pages/numbers/Numbers";
import Vehicles from "./pages/vehicles/Vehicles";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Animals />} />
        <Route path="Colores" element={<Colors />} />
        <Route path="Alimentos" element={<Food />} />
        <Route path="Numeros" element={<Numbers />} />
        <Route path="Vehiculos" element={<Vehicles />} />
      </Routes>
    </>
  );
}

export default App;
