import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import Logo from "../assets/kos-logo.jpeg";

export const NavbarPagination = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Imagen del logo de la empresa"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="d-md-flex">
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="presentation-section"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={100}
                >
                  Presentacion
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="services-section"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={100}
                >
                  Servicios
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="featured-section"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={100}
                >
                  Destacados
                </Link>
              </li>
              <li className="nav-items">
                <Link
                  activeClass="active"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={100}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
