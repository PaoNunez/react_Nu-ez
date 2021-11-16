import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./Header"
import MainItemListContainer from "./MainItenListContainer"
import Footer from "./Footer"
import Category from "./Category"
import MainItemDetailContainer from "./MainItemDetailContainer"
import Cart from "./Cart"
import CustonProvider from "./context/CartContext"
const App = () => {
    return (
        <BrowserRouter>
            <CustonProvider >
                <Header />
                <Switch>
                    <Route exact path="/" component={MainItemListContainer}></Route>
                    <Route exact path="/camisetas" component={Category}></Route>
                    <Route path="/camisetas/:description" component={MainItemListContainer}></Route>
                    <Route path="/producto/:id" component={MainItemDetailContainer}></Route>
                    <Route path="/cart/" component={Cart}></Route>
                </Switch>
                <Footer />
            </CustonProvider  >
        </BrowserRouter>

    )
}

export default App