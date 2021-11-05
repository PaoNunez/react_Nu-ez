import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import ItemListContainer from "./ItemListContainer"

import { BrowserRouter, Route, Switch } from "react-router-dom"
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Main titulo="T&sh Tu tienda favorita">
        <p>Conoce todos nuestros productos</p>
      </Main>

      <Switch>
        <Route path="/" component={ItemListContainer} exact />
        <Route path="/Inicio/:id" component={ItemListContainer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
export default App