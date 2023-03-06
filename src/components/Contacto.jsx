import LinkedIn from "../assets/linkedin.png";
import Mail from "../assets/mail.png";
import WhatsApp from "../assets/wpplogo.webp";
const Contacto = () => {
  return (
    <footer>
      <h2 className="titulo-h2">Contacto</h2>

      <div className="contacto">
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/jos%C3%A9-alvarez-martinez-621404211/"
        >
          <img className="linkedinLogo" src={LinkedIn} alt="" />
        </a>
        <a href="mailto:alvarezmjose2021@gmail.com">
          <img className="mailLogo" src={Mail} alt="" />
        </a>
        <a href="https://wa.me/1164650852" target={"_blank"}>
          <img className="wppLogo" src={WhatsApp} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Contacto;
