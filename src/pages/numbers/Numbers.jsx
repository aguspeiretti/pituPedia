import "./numbers.css";
import React from "react";
import uno from "../../assets/sonidos/numeros/uno.png";
import dos from "../../assets/sonidos/numeros/dos.png";
import tres from "../../assets/sonidos/numeros/tres.png";
import cuatro from "../../assets/sonidos/numeros/cuatro.png";
import cinco from "../../assets/sonidos/numeros/cinco.png";
import seis from "../../assets/sonidos/numeros/seis.png";
import siete from "../../assets/sonidos/numeros/siete.png";
import ocho from "../../assets/sonidos/numeros/ocho.png";
import nueve from "../../assets/sonidos/numeros/nueve.png";
import diez from "../../assets/sonidos/numeros/diez.png";
import Grilla2 from "../../components/Grilla2/Grilla2";
import bartolito from "../../assets/sonidos/numeros/numeros.png";
import suno from "../../assets/sonidos/numeros/1.mp3";
import sdos from "../../assets/sonidos/numeros/2.mp3";
import stres from "../../assets/sonidos/numeros/3.mp3";
import scuatro from "../../assets/sonidos/numeros/4.mp3";
import scinco from "../../assets/sonidos/numeros/5.mp3";
import sseis from "../../assets/sonidos/numeros/6.mp3";
import ssiete from "../../assets/sonidos/numeros/7.mp3";
import socho from "../../assets/sonidos/numeros/8.mp3";
import snueve from "../../assets/sonidos/numeros/9.mp3";
import sdiez from "../../assets/sonidos/numeros/10.mp3";

const img = [
  { img: uno, id: "uno", sonido: suno },
  { img: dos, id: "dos", sonido: sdos },
  { img: tres, id: "tres", sonido: stres },
  { img: cuatro, id: "cuatro", sonido: scuatro },
  { img: cinco, id: "cinco", sonido: scinco },
  { img: seis, id: "seis", sonido: sseis },
  { img: siete, id: "siete", sonido: ssiete },
  { img: ocho, id: "ocho", sonido: socho },
  { img: nueve, id: "nueve", sonido: snueve },
  { img: diez, id: "diez", sonido: sdiez },
];

const toy = [bartolito];

const Numbers = () => {
  return (
    <div className="numbers-container">
      <div className="blur">
        <Grilla2 img={img} info={toy} />
      </div>
    </div>
  );
};

export default Numbers;
