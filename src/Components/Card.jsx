import { Link } from "react-router-dom";
import { useContextGlobal } from "../Context/Context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Card = ({ dentist }) => {
  const { dispatch, state } = useContextGlobal();
  const { id, name, username } = dentist;

  const findFav = state.favs.find((fav) => fav.id === dentist.id);
  
  const toggleFav = () => {
    dispatch({ type: "TOGGLE_FAV", payload: dentist });
  };

  return (
    <div className={`${state.darkTheme ? 'card-dark' : 'card-light'} card`} >
      <Link className="card-link" to={`/detail/${id}`}>
        <img
          className="card-img"
          src="/images/doctor.jpeg"
          alt="Foto de un dentista"
        />
        <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} card-text`}>{name}</p>
        <p className={`${state.darkTheme ? 'text-dark' : 'text-light'} card-text`}>{username}</p>
      </Link>

      <button onClick={toggleFav} className="fav-button">
        {findFav ? <FavoriteIcon sx={{ color: 'rgb(55, 36, 72)'}}/> : <FavoriteBorderIcon sx={{ color: 'rgb(55, 36, 72)'}} />}
      </button>
    </div>
  );
};

export default Card;
