import "./food.css";
import React from "react";
import banana from "../../assets/sonidos/comidas/banana.png";
import durazno from "../../assets/sonidos/comidas/dur.png";
import lechuga from "../../assets/sonidos/comidas/lechuga.png";
import manzana from "../../assets/sonidos/comidas/manzana.png";
import naranja from "../../assets/sonidos/comidas/naranja.png";
import uva from "../../assets/sonidos/comidas/uva.png";
import tomate from "../../assets/sonidos/comidas/tomate.png";
import zanahoria from "../../assets/sonidos/comidas/zanahoria.png";
import queso from "../../assets/sonidos/comidas/queso.png";
import Grilla from "../../components/Grilla/Grilla";
import bartolito from "../../assets/sonidos/comidas/alimentos.png";
import sbanana from "../../assets/sonidos/comidas/banana.mp3";
import sdurazno from "../../assets/sonidos/comidas/durazno.mp3";
import slechuga from "../../assets/sonidos/comidas/lechuga.mp3";
import smanzana from "../../assets/sonidos/comidas/manzana.mp3";
import snaranja from "../../assets/sonidos/comidas/nr.mp3";
import suva from "../../assets/sonidos/comidas/uva.mp3";
import stomate from "../../assets/sonidos/comidas/tomate.mp3";
import szanahoria from "../../assets/sonidos/comidas/zanahoria.mp3";
import squeso from "../../assets/sonidos/comidas/queso.mp3";
import Grilla2 from "../../components/Grilla2/Grilla2";

const img = [
  { img: banana, id: "banana", sonido: sbanana },
  { img: durazno, id: "durazno", sonido: sdurazno },
  { img: lechuga, id: "lechuga", sonido: slechuga },
  { img: manzana, id: "manzana", sonido: smanzana },
  { img: naranja, id: "naranja", sonido: snaranja },
  { img: uva, id: "uva", sonido: suva },
  { img: tomate, id: "tomate", sonido: stomate },
  { img: zanahoria, id: "zanahoria", sonido: szanahoria },
  { img: queso, id: "queso", sonido: squeso },
];

const toy = [bartolito];

const Food = () => {
  return (
    <div className="food-container">
      <div className="blur">
        <Grilla2 img={img} info={toy} />
      </div>
    </div>
  );
};

export default Food;
