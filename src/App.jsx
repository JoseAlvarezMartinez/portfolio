import "./App.css";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
function App() {
  return (
    <>
      <Header />
      <SobreMi />
      <Proyectos/>
      <Contacto/>
    </>
  );
}

export default App;
