import { Navbar } from "react-bootstrap"
import Nav from "./Nav"
const Header = () => {


  
  return (
    <Navbar bg="light" expand="lg">
    <header id="main-header" className="clase1 clase2" >
      <p>Bievenidos</p>

      <Nav />

    </header >
    </Navbar>
  )
}

export default Header