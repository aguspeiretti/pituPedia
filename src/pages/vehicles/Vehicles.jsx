import "./vehicles.css";
import React from "react";
import auto from "../../assets/sonidos/transporte/auto.png";
import avion from "../../assets/sonidos/transporte/avion.png";
import camion from "../../assets/sonidos/transporte/camion.png";
import colectivo from "../../assets/sonidos/transporte/colectivo.png";
import moto from "../../assets/sonidos/transporte/moto.png";
import tractor from "../../assets/sonidos/transporte/tractor.png";
import tren from "../../assets/sonidos/transporte/tren.png";
import Grilla from "../../components/Grilla2/Grilla2";
import bartolito from "../../assets/sonidos/transporte/transporte.png";

import sauto from "../../assets/sonidos/transporte/auto.mp3";
import savion from "../../assets/sonidos/transporte/avion.mp3";
import scamion from "../../assets/sonidos/transporte/camion.mp3";
import smoto from "../../assets/sonidos/transporte/moto.mp3";
import stractor from "../../assets/sonidos/transporte/tractor.mp3";
import stren from "../../assets/sonidos/transporte/tren.mp3";
import scoletivo from "../../assets/sonidos/transporte/colectivo.mp3";
import "animate.css";
import Grilla2 from "../../components/Grilla2/Grilla2";

const toy = [bartolito];

const img = [
  { img: auto, id: "auto", sonido: sauto },
  { img: avion, id: "avion", sonido: savion },
  { img: camion, id: "camion", sonido: scamion },
  { img: colectivo, id: "colectivo", sonido: scoletivo },
  { img: moto, id: "moto", sonido: smoto },
  { img: tractor, id: "tractor", sonido: stractor },
  { img: tren, id: "tren", sonido: stren },
];

const Vehicles = () => {
  return (
    <div className="vehicles-container">
      <div className="blur">
        <Grilla2 img={img} info={toy} />
      </div>
    </div>
  );
};

export default Vehicles;
