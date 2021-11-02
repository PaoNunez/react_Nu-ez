import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./ItemListContainer"
import ItemDetail from "./ItemDetail"
import { BrowserRouter, Route } from "react-router-dom"
const App = () => {

  //const hacerLog = () => {
  // console.log("Soy un callback de App")
  return (
    <BrowserRouter>
      <Header />
      <Main titulo="T&sh Tu tienda favorita">
        <p>Conoce todos nuestros productos</p>
      </Main>
      <ItemListContainer />
      <ItemDetail />
      <Footer />
    </BrowserRouter>
  )
}
export default App