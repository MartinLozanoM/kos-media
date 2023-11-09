import { Image } from "react-bootstrap";
import Logo from "../assets/kos-logo.jpeg";
import { Button } from "react-scroll";

export const Presentation = () => {
  return (
    <section
      className="container-fluid presentation-container"
      id="presentation-section"
    >
      <div className="row p-2 ">
        <div className="col-md-6 mt-5 pt-5 col-sm d-flex flex-column justify-content-center align-items-center mb-5 ">
          <div className="presentation-text p-3">
            <h1 className="text-center">
              KOS <br /> Media
            </h1>
            <p className="text-center p-2">
              Somos KOS Media Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellat quidem, tempore incidunt ullam voluptate ab
              suscipit, illum asperiores itaque eveniet nam quam! Ea iusto ut
              sit ab quis provident nihil?
            </p>
          </div>
          <Button
            activeClass="active"
            className="presentation-button"
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
        {/* <div className="pt-5 col-md-4 col-sm d-flex justify-content-center align-item-center align-items-center p-5">
          <Image
            src={Logo}
            fluid
            className=""
            alt="Imagen del logo de la empresa"
          ></Image>
        </div> */}
      </div>
    </section>
  );
};
