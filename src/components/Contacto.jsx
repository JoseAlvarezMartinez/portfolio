import LinkedIn from "../assets/linkedin.png"
import Mail from "../assets/mail.png"
import WhatsApp from "../assets/wpplogo.webp"

const Contacto = () => {
  return (
    <footer>
      <h2 className="titulo-h2">Contacto</h2>
      <img className="linkedinLogo" src={LinkedIn} alt="" />
      <img className="MailLogo"  src={Mail} alt="" />
      <img className="WppLogo"  src={WhatsApp} alt="" />
    </footer>
  );
};

export default Contacto;