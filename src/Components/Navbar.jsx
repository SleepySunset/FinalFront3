import { Link } from "react-router-dom"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
      </ul>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar