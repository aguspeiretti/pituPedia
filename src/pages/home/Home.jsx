import React from "react";
import "./home.css";
import aprendemos from "../../assets/fondos/aprendemos.png";
import im1 from "../../assets/fondos/granja.jpg";
import im2 from "../../assets/fondos/cocina.jpg";
import im3 from "../../assets/fondos/cielo.jpg";
import im4 from "../../assets/fondos/parque.jpg";
import im5 from "../../assets/fondos/colores.jpg";
import im6 from "../../assets/fondos/cars.jpg";
import vaca from "../../assets/sonidos/animales/vaca.png";
import banana from "../../assets/sonidos/comidas/banana.png";
import tres from "../../assets/sonidos/numeros/tres.png";
import avion from "../../assets/sonidos/transporte/avion.png";
import rojo from "../../assets/sonidos/colores/rojo.png";
import guido from "../../assets/sonidos/cars/luigi.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="blur">
        <div className="aprendemos">
          <div className="aprendemos-img-container">
            <img src={aprendemos} alt="" />
          </div>
          <div className="enlaces">
            <ul>
              <li className="cont-enlaces-img">
                <img className="absolut" src={vaca} alt="" />
                <img className="im1" src={im1} alt="" />
              </li>

              <li className="cont-enlaces-img">
                <img className="absolut" src={banana} alt="" />
                <img className="im1" src={im2} alt="" />
              </li>

              <li className="cont-enlaces-img">
                <img className="absolut" src={tres} alt="" />
                <img className="im1" src={im3} alt="" />
              </li>

              <li className="cont-enlaces-img">
                <img className="absolut" src={avion} alt="" />
                <img className="im1" src={im4} alt="" />
              </li>

              <li className="cont-enlaces-img">
                <img className="absolut" src={rojo} alt="" />
                <img className="im1" src={im5} alt="" />
              </li>

              <li className="cont-enlaces-img">
                <img className="absolut" src={guido} alt="" />
                <img className="im1" src={im6} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
