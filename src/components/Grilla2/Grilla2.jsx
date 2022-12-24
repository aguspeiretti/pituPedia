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
  const rep2 = (e) => {
    const sonido = img.filter((el) => el.id === e.target.id);
    sound.play();
  };

  return (
    <div className="cars-cont">
      <div className="button-container">
        {img.map((image) => (
          <div className="buttons">
            <button onClick={rep}>
              <img id={image.id} src={image.img} alt="" />
            </button>
          </div>
        ))}
      </div>
      <div className="zoom">
        <div className="imagen-grande">
          <img onClick={rep2} src={imagenGrande} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Grilla2;
