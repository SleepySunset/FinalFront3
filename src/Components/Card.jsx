const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src="../../public/images/doctor.jpg" alt="Foto de un dentista"/>
        <span>{name}</span>
        <span>{username}</span>
        <span>{id}</span>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
