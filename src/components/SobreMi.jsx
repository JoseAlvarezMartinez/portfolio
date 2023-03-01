import { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import MiFoto from "../assets/MiFoto.jpeg";
const SobreMi = () => {
  const [edad, setEdad] = useState();
  useEffect(() => {
    const anio = new Date().getFullYear();
    setEdad(anio - 2001);
  }, []);
  return (
    <section id="sobre-mi">
      <h2 className="titulo-h2">Sobre Mí</h2>

      <p className="sobre-mi-descripcion">
        Mi nombre es José Alvarez Martinez y tengo {edad} años. Me apasiona el
        hecho de aprender nuevas tecnologías e incrementar mis conocimientos,
        para así poder crecer profesionalmente. Actualmente realizo trabajos
        freelance y soy mentor en Coderhouse. Mi objetivo profesional es
        convertirme en un Desarrollador Full Stack para abarcar conocimientos
        tanto en el front-end como el back-end.
      </p>
    </section>
  );
};

export default SobreMi;
