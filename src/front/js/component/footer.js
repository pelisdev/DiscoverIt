import React from "react";
import logo from "/src/front/img/discoverit.png"; // Reemplaza con la ruta correcta de tu logo

export const Footer = () => (
  <footer className="bg-dark text-white mt-auto py-3 text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={logo} alt="Logo" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>
            Made with <i className="fa fa-heart text-danger" /> by{" "}
            <a href="http://www.4geeksacademy.com" className="text-white">
              4Geeks Academy
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);
