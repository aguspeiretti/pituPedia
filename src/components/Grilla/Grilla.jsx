import React, { useState } from "react";
import "./grilla.css";

const Grilla = ({ img, info }) => {
  const [audio, setAudio] = useState();
  const [activo, setActivo] = useState(true);

  let sound = new Audio(audio);

  sound.play();

  const rep = (e) => {
    const sonido = img.filter((el) => el.id === e.target.id);

    setAudio(sonido[0].sonido);
  };

  setTimeout(function () {
    setActivo(false);
  }, 3000);

  return (
    <div className="grilla-container">
      <div
        className={
          activo
            ? "animate__animated animate__bounceInLeft img-bartolito"
            : "animate__animated animate__bounceOutLeft img-bartolito-hide"
        }
      >
        <img src={info} alt="" />
      </div>
      <div className="img-container">
        <>
          {img.map((image) => (
            <div className="img-container">
              <button onClick={rep}>
                <img id={image.id} src={image.img} alt="" />
              </button>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Grilla;
