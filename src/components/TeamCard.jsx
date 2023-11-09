export const TeamCard = ({ member: { nombre, imagen, trabajo } }) => {
  return (
    <div className="team-card col-md-4 col-lg-3 mx-md-2">
      <div className="card-image">
        <img src={imagen} alt="Member image" className="" />
      </div>
      <div className="card-text">
        <h3>{nombre}</h3>
        <p>{trabajo}</p>
      </div>
    </div>
  );
};
