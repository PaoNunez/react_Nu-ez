import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nav = () => {
  return (
    <>
      <nav className="nav-header">
        
         <Link to="/">Inicio</Link>
         <Link to="/categorias">Categorias</Link>
       
        <CartWidget />
      </nav>
    </>
  )
}

export default Nav

