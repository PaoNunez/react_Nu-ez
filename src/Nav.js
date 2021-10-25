import CartWidget from "./CartWidget"
import logoImg from "./img/logo.jpeg"
const Nav = () => {
  return (

    <nav>
      <a href="#">Camisetas</a>
      <CartWidget />
      <img src={logoImg}></img>



    </nav>


  )
}
export default Nav

