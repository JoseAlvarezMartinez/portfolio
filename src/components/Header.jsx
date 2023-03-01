import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="oscurecer-fondo">
        <div className="contenedor-superior">
          <h2 className="logo">José Alvarez</h2>
          <Hamburger toggled={isOpen} color={"#fff"} toggle={setOpen} />
        </div>
        <nav
          className={`${isOpen ? "navegacion-activa" : "navegacion-inactiva"}`}
        >
          <ul className="navegacion--ul">
            <li className="navegacion--li">
              <a href="#">Inicio</a>
            </li>
            <li className="navegacion--li">
              <a href="#">Sobre Mí</a>
            </li>
            <li className="navegacion--li">
              <a href="#">Habilidades</a>
            </li>
            <li className="navegacion--li">
              <a href="#">Proyectos</a>
            </li>
            <li className="navegacion--li">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="bienvenida-contenedor">
          <h1>
            Hola! Soy <span>José Alvarez Martinez</span>Desarrollador Front End
          </h1>
          <div className="centrar-boton">
            <a className="descargar-cv">Descargar Cv</a>
          </div>
        </div>
        <div className="centrar-boton">
          <svg
            className="tienda-online-arrow"
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.16602 8.83337L6.99935 14.6667L12.8327 8.83337M6.99935 14.6667V1.33337V14.6667Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
