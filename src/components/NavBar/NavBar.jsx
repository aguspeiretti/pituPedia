import React from 'react'
import "./navbar.css"
import logo from "../../assets/logoKids.png"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='logo-container'>
            <img src={logo} alt="" />
        </div>
        <ul className='directions-container'>
             <Link to="/Animales"><li>Animales</li></Link> 
             <Link to="/Comidas"><li>Comida</li></Link> 
             <Link to="/Vehiculos"><li>Vehiculos</li></Link> 
             <Link to="/Numeros"><li>Numeros</li></Link> 
             <Link to="/Colores"><li>Colores</li></Link> 
        </ul>
    </div>
  )
}

export default NavBar