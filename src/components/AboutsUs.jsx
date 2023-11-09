import { TeamCard } from "./TeamCard";
import User from "../assets/user.png";

export const AboutUs = () => {
  const members = [
    {
      nombre: "Martin Lozano Muñoz",
      trabajo: "Programador",
      imagen: User,
    },
    {
      nombre: "Lucia Vergel",
      trabajo: "Diseñadora",
      imagen: User,
    },
    {
      nombre: "Gerardo Blanche",
      trabajo: "Marketing",
      imagen: User,
    },
    {
      nombre: "Hebert DM",
      trabajo: "Comunicacion",
      imagen: User,
    },
  ];

  return (
    <section className="container-fluid text-center" id="aboutus-section">
      <div>
        <h2 className="mb-4">Nuestro Equipo:</h2>
        <div className="row cards-container m-0 justify-content-center align-items-center">
          {members.map((member, index) => {
            return <TeamCard key={index} member={member} />;
          })}
        </div>
      </div>
    </section>
  );
};
