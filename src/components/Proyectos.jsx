import { proyectos } from "../data/data";

const Proyectos = () => {
  return (
    <main id="proyectos">
      <h2 className="titulo-h2">Proyectos</h2>
      <div className="proyectosContenedor">
        {proyectos.map((proyecto, i) => (
          <div className="proyecto-card" key={i}>
            <img
              src={proyecto.img}
              alt="Imagen del proyecto"
              className="proyecto-img"
            />
            <p>{proyecto.nombre}</p>
            <div className="centrar-btn">
              <a href={`https://${proyecto.link}`} target="_blank">Ver Proyecto</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Proyectos;
