import { Link } from "react-router-dom";
import '../Styles/card.css'
import { useContextGlobal } from "../Context/Context";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({ dentist }) => {
  const { setFavs } = useContextGlobal();
  const { id, name, username } = dentist;

  const addFav = () => {
    setFavs((favs)=> [...favs, dentist] )
  };

  return (
    <div className="card">
      <Link className="card-link" to={`/detail/${id}`}>
        <img className="card-img" src="../../public/images/doctor.jpeg" alt="Foto de un dentista" />
        <p className="card-text">{name}</p>
        <p className="card-text">{username}</p>
      </Link>

      <button onClick={addFav} className="fav-button">
        <FavoriteIcon/>
      </button>
    </div>
  );
};

export default Card;
