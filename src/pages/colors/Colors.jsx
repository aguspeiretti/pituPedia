import "./colors.css"
import React from 'react'
import rojo from "../../assets/sonidos/colores/rojo.png"
import verde from "../../assets/sonidos/colores/verde.png"
import amarillo from "../../assets/sonidos/colores/amarillo.png"
import azul from "../../assets/sonidos/colores/azul.png"
import naranja from "../../assets/sonidos/colores/naranja.png"
import Grilla from "../../components/Grilla/Grilla"
import bartolito from "./colores.png"

import srojo from "../../assets/sonidos/colores/rojo.mp3"
import sverde from "../../assets/sonidos/colores/amarillo.mp3"
import sazul from "../../assets/sonidos/colores/azul.mp3"
import samarillo from "../../assets/sonidos/colores/verde.mp3"
import snaranja from "../../assets/sonidos/colores/naranja.mp3"

import 'animate.css';

const img = [{img:rojo , "id":"rojo" , sonido:srojo } ,
             {img:azul , "id":"azul" , sonido:sazul } ,
             {img:verde , "id":"verde" , sonido:sverde },
             {img:amarillo , "id":"amarillo" , sonido:samarillo },
             {img:naranja , "id":"naranja" , sonido:snaranja },
              ]
const Colors = () => {
  return (
    <div className="colors-container">
         <div className="bartolito">
           <img src={bartolito} alt="" />
        </div>
      <Grilla img={img}/>
    </div>
  )
}

export default Colors