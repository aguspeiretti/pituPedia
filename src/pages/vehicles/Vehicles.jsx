import "./vehicles.css"
import React from 'react'
import auto from "../../assets/sonidos/transporte/auto.png"
import avion from "../../assets/sonidos/transporte/avion.png"
import camion from "../../assets/sonidos/transporte/camion.png"
import colectivo from "../../assets/sonidos/transporte/colectivo.png"
import moto from "../../assets/sonidos/transporte/moto.png"
import tractor from "../../assets/sonidos/transporte/tractor.png"
import tren from "../../assets/sonidos/transporte/tren.png"
import Grilla from "../../components/Grilla/Grilla"

const img = [auto,avion,camion,colectivo,moto,tractor,tren]

const Vehicles = () => {
  return (
    <div className="vehicles-container">
        <Grilla img={img}/>
    </div>
  )
}

export default Vehicles