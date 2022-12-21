import "./food.css"
import React from 'react'
import banana from "../../assets/sonidos/comidas/banana.png"
import durazno from "../../assets/sonidos/comidas/duranzno.png"
import lechuga from "../../assets/sonidos/comidas/lechuga.png"
import manzana from "../../assets/sonidos/comidas/manzana.png"
import naranja from "../../assets/sonidos/comidas/naranja.png"
import pera from "../../assets/sonidos/comidas/pera.png"
import uva from "../../assets/sonidos/comidas/uva.png"
import tomate from "../../assets/sonidos/comidas/tomate.png"
import zanahoria from "../../assets/sonidos/comidas/zanahoria.png"
import queso from "../../assets/sonidos/comidas/queso.png"
import Grilla from "../../components/Grilla/Grilla"

const img=[banana,durazno,lechuga,manzana,naranja,pera,uva,tomate,zanahoria,queso]

const Food = () => {
  return (
    <div className="food-container">
        <Grilla img={img}/>
    </div>
  )
}

export default Food