import React, { useState } from "react";
import "./grilla2.css";

const Grilla2 = ({ img }) => {
  const [audio, setAudio] = useState();
  const [imagenGrande, setImagenGrande] = useState();

  let sound = new Audio(audio);
  sound.play();
  const rep = (e) => {
    const sonido = img.filter((el) => el.id === e.target.id);
    setAudio(sonido[0].sonido);
    setImagenGrande(sonido[0].img);
  };

  return (
    <div className="cars-cont">
      <div className="img-container">
        {img.map((image) => (
          <div className="img-container">
            <button onClick={rep}>
              <img id={image.id} src={image.img} alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className="zoom">
        <div className="imagen-grande">
          <img src={imagenGrande} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Grilla2;
