import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer>
      <div className="footer container-fluid p-4">
        <div className="about-divisor container-fluid rounded mt-4 container"></div>
        <div className="row text-white p-5 pb-4 text-center">
          <div className="col-md-6">
            <h2 className="fw-bold">KOS Media</h2>
            <p className="fw-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              voluptas dolor magni totam consequuntur inventore quia modi
              accusantium? Tenetur mollitia nemo dolore repudiandae, ipsa nobis
              blanditiis consequatur perferendis eum tempore.
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="">Contacto</h2>
            <ul className="ps-0">
              <li className="">
                <a href="https://api.whatsapp.com/send?phone=+543815156811&text=Hola%21+Quisiera+mas+informacion+sobre+el+HUB">
                  +54 9 381-5156811
                </a>
              </li>
              <li className="">contacto@kosmedia.com.ar</li>
            </ul>
            <div className="mt-5 d-flex justify-content-center">
              <a href="https://www.instagram.com" className="icon-link">
                <FaInstagram size={36} />
              </a>
              <a href="https://www.linkedin.com/" className="icon-link">
                <FaLinkedin size={36} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <p className="text-center">
            Todos los derechos reservados &copy; 2023
          </p>
        </div>
      </div>
    </footer>
  );
};
