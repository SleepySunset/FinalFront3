import { Link } from "react-router-dom"
import '../Styles/navbar.css'
import { useContextGlobal } from "../Context/Context"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContextGlobal()
  const handleTheme = () =>{
    setDarkTheme(!darkTheme)
  }
  return (
    <nav className={darkTheme ? "dark" : "light"}>
      <div className="navbar-container">
      <img className="navbar-logo" src="../../public/images/logo-clinica.png"/>
      <ul className="navbar-menu">
        <Link className="navbar-link" to="/">Home</Link>
        <Link className="navbar-link" to="/contact">Contact</Link>
        <Link className="navbar-link" to="/favs">Favs</Link>
      </ul>
      </div>
      
      <button className="navbar-themebutton" onClick={handleTheme}>
        {darkTheme ? (<LightModeIcon fontSize="large" sx={{color: 'rgb(211, 180, 238)'}}/>) : (
          <DarkModeIcon fontSize="large" sx={{ color: 'rgb(55, 36, 72)'}}/>
        )}
      </button>
    </nav>
  )
}

export default Navbar