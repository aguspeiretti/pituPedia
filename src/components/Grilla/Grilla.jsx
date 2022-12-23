import React, { useState } from "react";
import "./grilla.css";

const Grilla = ({ img, info }) => {
  const [audio, setAudio] = useState();

  let sound = new Audio(audio);

  sound.play();

  const rep = (e) => {
    const sonido = img.filter((el) => el.id === e.target.id);

    setAudio(sonido[0].sonido);
  };

  return (
    <div className="grilla-container">
      <div className="img-bartolito">
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
