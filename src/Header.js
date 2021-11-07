import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="title-logo">Mi E-Commerce</Link>
      <Nav />
    </header>
  )
}
export default Header
