import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/front/img/discoverit.png"; // Reemplaza con la ruta correcta de tu logo

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            className="navbar-brand-logo"
            style={{ height: "50px" }}
          />
        </Link>
        <div className="navbar-nav justify-content-center">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/peliculas" className="nav-link">
            Películas
          </Link>
          <Link to="/series" className="nav-link">
            Series de TV
          </Link>
        </div>
        <div className="navbar-nav ml-auto justify-content-end">
          <Link to="/iniciar-sesion" className="nav-link">
            Iniciar Sesión
          </Link>
          <Link to="/registrarse" className="nav-link">
            Registrarse
          </Link>
        </div>
      </div>
    </nav>
  );
};
