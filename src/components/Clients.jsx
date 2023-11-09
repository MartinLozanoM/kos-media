import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Arqui3Logo from "../assets/Arqui3.png";
import Hub from "../assets/punto-colombres.jpeg";

export const ClientsSection = () => {
  return (
    <section className="text-center mb-5 p-3">
      <h3 className="">Nuestros Clientes</h3>
      <hr />
      <Row className="">
        <Col xs={12} md={4} className="clients">
          <Image src={Hub} rounded fluid alt="Punto Colombres" />
        </Col>
        <Col xs={12} md={4} className="clients">
          <Image src={Arqui3Logo} rounded fluid alt="Arqui3" />
        </Col>
      </Row>
    </section>
  );
};
