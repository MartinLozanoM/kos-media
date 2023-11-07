import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const ContactForm = () => {
  return (
    <section className="container-fluid" id="contact-section">
      <div className="row p-3 section-size">
        <div className="col-sm-12 col-md-6 text-center p-4 contact-text">
          <div>
            <h2>Mantengamonos en contacto</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              mollitia enim quia totam sint at quisquam minima illum nobis
              facere, expedita quis? Accusantium vitae atque hic ducimus aut
              corporis facere!
            </p>
          </div>
          <div className="d-flex flex-column">
            <span className="mb-4">
              <BsTelephone size={30} className="me-3" />
              <a href="https://api.whatsapp.com/send?phone=+543815156811&text=Hola%21+Quisiera+mas+informacion+sobre+el+HUB">
                +54 9 381-5156811
              </a>
            </span>
            <span className="mb-4">
              <GoMail size={30} className="me-3" />
              contacto@kosmedia.com.ar
            </span>
          </div>
          <div className="">
            <h3>Conectate con nosotros:</h3>
            <a href="https://www.instagram.com" className="mx-2">
              <FaInstagram size={36} />
            </a>
            <a href="https://www.linkedin.com/" className="mx-2">
              <FaLinkedin size={36} />
            </a>
          </div>
        </div>
        <div className="bg-white col-sm-12 col-md-6 p-4">
          <div className="container">
            <h2 className="">Contactanos</h2>
            <form className="row my-4" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div className="row100">
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="Nombre" required />
                    <span className="text">Nombre</span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="Apellido" required />
                    <span className="text">Apellido</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="Email" required />
                    <span className="text">Email</span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="Telefono" required />
                    <span className="text">Telefono</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="column">
                  <div className="inputBox textarea">
                    <textarea name="Comentarios" required></textarea>
                    <span className="text">Escribe tu mensaje aqui...</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="column text-center">
                  <input type="submit" value="Enviar" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
