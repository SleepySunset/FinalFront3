import { Link } from "react-router-dom"
import { useContextGlobal } from "../Context/Context"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = () => {
  const { state, dispatch } = useContextGlobal()
  const handleTheme = () =>{
    dispatch({type:"TOGGLE_DARKTHEME", payload: !state.darkTheme })
  }
  return (
    <nav className={state.darkTheme ? "nav-dark" : "nav-light"}>
      <div className="navbar-container">
      <img className="navbar-logo" src="/images/logo-clinica.png"/>
      <ul className="navbar-menu">
        <Link className={`${state.darkTheme ? 'link-dark' : 'link-light'} navbar-link`}  to="/">Home</Link>
        <Link className={`${state.darkTheme ? 'link-dark' : 'link-light'} navbar-link`} to="/contact">Contact</Link>
        <Link className={`${state.darkTheme ? 'link-dark' : 'link-light'} navbar-link`} to="/favs">Favs</Link>
      </ul>
      </div>
      
      <button className="navbar-themebutton" onClick={handleTheme}>
        {state.darkTheme ? (<LightModeIcon fontSize="large" sx={{color: 'rgb(246, 236, 255)'}}/>) : (
          <DarkModeIcon fontSize="large" sx={{ color: 'rgb(55, 36, 72)'}}/>
        )}
      </button>
    </nav>
  )
}

export default Navbar