import { Image } from "react-bootstrap";
import Logo from "../assets/kos-logo.jpeg";

export const ContactForm = () => {
  return (
    <section className="container-fluid" id="contact-section">
      <div className="row p-5 section-size">
        <div className="bg-white  col-md-8 col-sm-12  p-4">
          <div className="container">
            <h2 className="">Contactanos</h2>
            <form className="row my-4" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div className="row100">
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span className="text">Nombre</span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span className="text">Apellido</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span className="text">Email</span>
                    <span className="line"></span>
                  </div>
                </div>
                <div className="column">
                  <div className="inputBox">
                    <input type="text" name="" required />
                    <span className="text">Telefono</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="column">
                  <div className="inputBox textarea">
                    <textarea required></textarea>
                    <span className="text">Escribe tu mensaje aqui...</span>
                    <span className="line"></span>
                  </div>
                </div>
              </div>
              <div className="row100">
                <div className="column">
                  <input type="submit" value="Enviar" />
                </div>
              </div>
              {/* <input
                type="text"
                className="required"
                name="name"
                placeholder="Nombre"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              <input
                type="text"
                className="required"
                name="lastname"
                placeholder="Apellido"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              <input
                type="email"
                className="required"
                name="email"
                placeholder="Email"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              <input
                type="text"
                className="required"
                name="telephone"
                placeholder="Telefono"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              <input
                type="text"
                className="required"
                name="company"
                placeholder="Empresa"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              <textarea
                type="text"
                className="required"
                name="comments"
                placeholder="Comentarios"
                style={{ paddingBottom: "35px", color: "black" }}
              />
              <div className="form-button-container col-12 pb-3">
                <button className="" type="submit">
                  Enviar
                </button>
              </div> */}
            </form>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center align-item-center">
          <h2
            className="text-center "
            style={{ marginTop: "10px", paddingTop: "10px" }}
          >
            Somos KOS Media
          </h2>
          <p className="text-center pb-0 mb-0 ">
            "Te ayudamos a hacer crecer tu negocio"
          </p>
          <Image
            src={Logo}
            className="pt-0 mt-0 pb-3"
            fluid
            alt="Imagen del logo de la empresa"
          ></Image>
        </div>
      </div>
    </section>
  );
};
