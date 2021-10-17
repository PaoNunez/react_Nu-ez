import CartWidget from "./CartWidget"
import carritoImg from "./img/logo.jpeg"
const Nav = () => {
  return (

    <nav>
      <a href="#">Camisetas</a>
      <CartWidget />
      <img src={carritoImg}></img>



    </nav>


  )
}
export default Nav

