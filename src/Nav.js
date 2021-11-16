import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const Nav = () => {
  return (
    <>
      <nav className="nav-header">
        <img src="/img/logo.jpeg" alt="logo" id="logo" />
         <Link to="/">Inicio</Link>
         <Link to="/camisetas">Camisetas</Link>
       
        <CartWidget />
      </nav>
    </>
  )
}

export default Nav

