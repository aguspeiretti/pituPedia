import "./animals.css"
import React from 'react'
import chancho from "../../assets/sonidos/animales/chancho.png"
import elefante from "../../assets/sonidos/animales/elefante.png"
import gallo from "../../assets/sonidos/animales/vaca.png"
import lobo from "../../assets/sonidos/animales/gallo.png"
import vaca from "../../assets/sonidos/animales/lobo.png"
import oveja from "../../assets/sonidos/animales/pato.png"
import pato from "../../assets/sonidos/animales/oveja.png"
import Grilla from "../../components/Grilla/Grilla"

const img = [vaca , oveja , chancho , pato , gallo , lobo , elefante]

const Animals = () => {
  return (
    <div className="animals-container">
      <Grilla img={img}/>
    </div>
  )
}

export default Animals