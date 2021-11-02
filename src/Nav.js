import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
const Nav = () => {
  return (

    <nav>
      <Link to="productos.json">Camisetas</Link>
      <CartWidget />
      <img src="./img/logo.jpeg" alt="logotipo"></img>



    </nav>


  )
}
export default Nav

