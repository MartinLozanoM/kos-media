import { Image } from "react-bootstrap";
import Logo from "../assets/kos-logo.jpeg";
import { Button } from "react-scroll";

export const Presentation = () => {
  return (
    <section className="container-fluid" id="presentation-section">
      <div className="row p-2 ">
        <div className="col-md-8 mt-5 pt-5 col-sm d-flex flex-column justify-content-center align-items-center mb-5 ">
          <div className="">
            <h1 className="text-center ">
              KOS <br /> Media
            </h1>
            <p className="text-center">
              Somos KOS Media, un espacio de Crecimiento, Conección y
              Concreción. El primer HUB que reúne Tecnología y Triple Impacto en
              Argentina. Somos personas que pensamos en colaborar, Co crear,
              Conectar en entornos diferentes.
            </p>
          </div>
          <Button
            activeClass="active"
            className=""
            type="submit"
            // value="Solicitar informacion"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-75}
            duration={100}
          >
            Solicitar informacion
          </Button>
        </div>
        <div className="pt-5 col-md-4 col-sm d-flex justify-content-center align-item-center align-items-center p-5">
          <Image
            src={Logo}
            fluid
            className=""
            alt="Imagen del logo de la empresa"
          ></Image>
        </div>
      </div>
    </section>
  );
};
