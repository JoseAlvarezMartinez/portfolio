import { useState, useEffect } from "react";
import { tecnologias } from "../data/data";
const SobreMi = () => {
  const [edad, setEdad] = useState();
  useEffect(() => {
    const anio = new Date().getFullYear();
    setEdad(anio - 2001);
  }, []);
  return (
    <section id="sobre-mi">
      <div className="desktop-habilidades">
        <div className="sobre-mi-contenedor-desktop">
          <h2 className="titulo-h2">Sobre Mí</h2>
          <p className="sobre-mi-descripcion">
            Mi nombre es José Alvarez Martinez y tengo {edad} años. Me apasiona
            el hecho de aprender nuevas tecnologías e incrementar mis
            conocimientos, para así poder crecer profesionalmente. Actualmente
            realizo trabajos freelance y soy mentor en Coderhouse. Mi objetivo
            profesional es convertirme en un Desarrollador Full Stack para
            abarcar conocimientos tanto en el front-end como el back-end.
          </p>
        </div>
        <div>
          <h3 className="habilidades">Habilidades</h3>
          <div className="slides">
            {tecnologias.map((tecnologia, i) => (
              <div key={i} className="tecnologia-card">
                <img
                  className={`tecnologia-img ${
                    tecnologia.nombre == "Next.js" ? "next" : ""
                  } ${tecnologia.nombre == "SASS" ? "sass" : ""}`}
                  src={tecnologia.imagen}
                />
                <p className="tecnologia-titulo">{tecnologia.nombre}</p>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default SobreMi;
