import "./animals.css";
import React from "react";
import chancho from "../../assets/sonidos/animales/chancho.png";
import elefante from "../../assets/sonidos/animales/elefante.png";
import gallo from "../../assets/sonidos/animales/gallo.png";
import lobo from "../../assets/sonidos/animales/lobo.png";
import vaca from "../../assets/sonidos/animales/vaca.png";
import oveja from "../../assets/sonidos/animales/oveja.png";
import pato from "../../assets/sonidos/animales/pato.png";
import bartolito from "../../assets/sonidos/animales/animales.png";
import Grilla from "../../components/Grilla/Grilla";
import sVaca from "../../assets/sonidos/animales/vaca.mp3";
import sOveja from "../../assets/sonidos/animales/oveja.mp3";
import sChancho from "../../assets/sonidos/animales/chancho.mp3";
import sElefante from "../../assets/sonidos/animales/elefante.mp3";
import sGallo from "../../assets/sonidos/animales/gallo.mp3";
import sLobo from "../../assets/sonidos/animales/lobo.mp3";
import sPato from "../../assets/sonidos/animales/pato.mp3";
import "animate.css";

const img = [
  { img: vaca, id: "vaca", sonido: sVaca },
  { img: oveja, id: "oveja", sonido: sOveja },
  { img: chancho, id: "chancho", sonido: sChancho },
  { img: pato, id: "patoid", sonido: sPato },
  { img: gallo, id: "galloid", sonido: sGallo },
  { img: lobo, id: "loboid", sonido: sLobo },
  { img: elefante, id: "elefanteid", sonido: sElefante },
];

const toy = bartolito;

const Animals = () => {
  return (
    <div className="animals-container">
      <div className="blur">
        <Grilla img={img} info={toy} />
      </div>
    </div>
  );
};

export default Animals;
