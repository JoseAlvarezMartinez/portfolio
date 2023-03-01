import { Squash as Hamburger } from "hamburger-react";
import { CiLinkedin } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";
import { useState } from "react";
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <div className="oscurecer-fondo">
        <div className="contenedor-superior">
          <Hamburger toggled={isOpen} color={"#fff"} toggle={setOpen} />
          <h2 className="logo">José Alvarez</h2>

          <nav
            className={`${
              isOpen ? "navegacion-activa" : "navegacion-inactiva"
            }`}
          >
            <ul className="navegacion--ul">
              <li className="navegacion--li">
                <a href="#">Inicio</a>
              </li>
              <li className="navegacion--li">
                <a onClick={() => setOpen(false)} href="#sobre-mi">
                  Sobre Mí
                </a>
              </li>
              <li className="navegacion--li">
                <a href="#">Proyectos</a>
              </li>
              <li className="navegacion--li">
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bienvenida-contenedor">
          <h1>
            H o l a ! S o y <span>José Alvarez Martinez</span>D e s a r r o l l
            a d o r &nbsp; F r o n t &nbsp; E n d
          </h1>
          <div className="botones">
            <div className="centrar-boton">
              <a
                target={"_blank"}
                href="https://drive.google.com/file/d/1HhbV_plbRYvR8BhxZeJX4aeGwx1_xYY6/view?usp=sharing"
                className="descargar-cv"
              >
                Descargar CV
              </a>
            </div>
            <div className="redes-sociales">
              <div className="red-social-fondo">
                <a
                  target={"_blank"}
                  href="https://www.linkedin.com/in/jos%C3%A9-alvarez-martinez-621404211/"
                >
                  <CiLinkedin color="#fff" size={"2.5rem"} />
                </a>
              </div>
              <div className="red-social-fondo ">
                <a
                  target={"_blank"}
                  href="https://github.com/JoseAlvarezMartinez"
                >
                  <BsGithub color="#fff" size={"2.5rem"} />
                </a>
              </div>
            </div>
          </div>
          </div>
          <div className="centrar-boton">
            <svg
              className={`tienda-online-arrow ${isOpen ? "z-1" : ""}`}
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
