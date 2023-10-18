import { Image } from "react-bootstrap";
import Logo from "../assets/kos-logo.jpeg";

export const ContactForm = () => {
  return (
    <section className="container-fluid" id="contact-section">
      <div className="row p-5 section-size">
        <div className="bg-white  col-md-8 col-sm-12  p-4">
          <div className="container p-4">
            <h2 className="fw-bolder-4 text-dark pb-2 text-start">
              ¿Queres saber mas?
            </h2>
            <form className="row my-4" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <input
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
                name="studies"
                placeholder="Estudios"
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
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex flex-column justify-content-center align-item-center">
          <h2
            className="text-center "
            style={{ marginTop: "10px", paddingTop: "10px" }}
          >
            Slogan de Punto Colombres
          </h2>
          <p className="text-center pb-0 mb-0 ">"PENSAMOS EN UN LEGADO"</p>
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
