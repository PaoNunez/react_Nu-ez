import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"
import Category from "./Category"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"
import CustonProvider from "./context/CartContext"
import Form from "./Form"

const App = () => {
    return (
        <BrowserRouter>
            <CustonProvider >
                <Header />
                <Switch>
                    <Route exact path="/" component={ItemListContainer}></Route>
                    <Route exact path="/camisetas" component={Category}></Route>
                    <Route path="/camisetas/:description" component={ItemListContainer}></Route>
                    <Route path="/producto/:id" component={ItemDetailContainer}></Route>
                    <Route path="/cart/" component={Cart}></Route>
                    <Route exact path="/form" component={Form}></Route>
                </Switch>
                <Footer />
            </CustonProvider  >
        </BrowserRouter>

    )
}

export default App