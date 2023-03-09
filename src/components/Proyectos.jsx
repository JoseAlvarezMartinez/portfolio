import { proyectos } from "../data/data";

const Proyectos = () => {
  return (
    <main id="proyectos">
      <h2 className="titulo-h2">Proyectos</h2>
      <div className="proyectosContenedor">
        {proyectos.map((proyecto, i) => (
          <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={proyecto.img}
                  alt="Proyecto Imagen"
                  style={{ width: "100%", height: "90%",objectFit:"cover" }}
                />
              </div>
              <div className="flip-card-back">
                <h3>{proyecto.nombre}</h3>

                <div className="centrar-btn">
                  <a className="ver-proyecto" href={`https://${proyecto.link}`} target="_blank">
                    Ver Proyecto
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Proyectos;
