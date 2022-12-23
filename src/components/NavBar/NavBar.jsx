import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logoKids.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [handlebar, setHandleBar] = useState(false);

  const handleMenu = () => {
    setHandleBar(!handlebar);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <ul className="directions-container">
          <Link to="/">
            <li>Animales</li>
          </Link>
          <Link to="/Alimentos">
            <li>Alimentos</li>
          </Link>
          <Link to="/Vehiculos">
            <li>Vehiculos</li>
          </Link>
          <Link to="/Numeros">
            <li>Numeros</li>
          </Link>
          <Link to="/Colores">
            <li>Colores</li>
          </Link>
          <Link to="/Cars">
            <li>Cars</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-responsive">
        <div className="logo-container">
          <img src={logo} alt="" />
          <i onClick={handleMenu} class="fa-solid fa-bars"></i>
        </div>
        <ul
          className={
            handlebar
              ? "directions-container-responsive"
              : "directions-container-responsive-open"
          }
        >
          <Link to="/">
            <li onClick={handleMenu}>Animales</li>
          </Link>
          <Link to="/Alimentos">
            <li onClick={handleMenu}>Alimentos</li>
          </Link>
          <Link to="/Vehiculos">
            <li onClick={handleMenu}>Vehiculos</li>
          </Link>
          <Link to="/Numeros">
            <li onClick={handleMenu}>Numeros</li>
          </Link>
          <Link to="/Colores">
            <li onClick={handleMenu}>Colores</li>
          </Link>
          <Link to="/Cars">
            <li>Cars</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
