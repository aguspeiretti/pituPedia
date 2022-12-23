import "./cars.css";
import React from "react";
import rayo from "../../assets/sonidos/cars/rayo.png";
import saly from "../../assets/sonidos/cars/saly.png";
import mate from "../../assets/sonidos/cars/mate.png";
import ramon from "../../assets/sonidos/cars/ramon.png";
import general from "../../assets/sonidos/cars/general.png";
import sherif from "../../assets/sonidos/cars/sherif.png";
import guido from "../../assets/sonidos/cars/guido.png";
import luigi from "../../assets/sonidos/cars/luigi.png";
import bartolito from "../../assets/sonidos/colores/colores.png";
import srayo from "../../assets/sonidos/cars/rayo.mp3";
import ssaly from "../../assets/sonidos/cars/saly.mp3";
import sramon from "../../assets/sonidos/cars/ramon.mp3";
import smate from "../../assets/sonidos/cars/mate.mp3";
import sgeneral from "../../assets/sonidos/cars/general.mp3";
import ssherif from "../../assets/sonidos/cars/sherif.mp3";
import sguido from "../../assets/sonidos/cars/guido.mp3";
import sluigi from "../../assets/sonidos/cars/luigi.mp3";

import "animate.css";
import Grilla2 from "../../components/Grilla2/Grilla2";

const img = [
  { img: rayo, id: "rayo", sonido: srayo },
  { img: ramon, id: "ramon", sonido: sramon },
  { img: saly, id: "saly", sonido: ssaly },
  { img: mate, id: "mate", sonido: smate },
  { img: general, id: "general", sonido: sgeneral },
  { img: sherif, id: "sherif", sonido: ssherif },
  { img: guido, id: "guido", sonido: sguido },
  { img: luigi, id: "luigi", sonido: sluigi },
];

const toy = [bartolito];
const Cars = () => {
  return (
    <div className="cars-container">
      <div className="blur">
        <Grilla2 img={img} info={toy} />
      </div>
    </div>
  );
};

export default Cars;
