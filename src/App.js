import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./Header"
import MainItemListContainer from "./MainItenListContainer"
import Footer from "./Footer"
import Category from "./Category"
import MainItemDetailContainer from "./MainItemDetailContainer"
import ItemComprar from "./ItemComprar"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={MainItemListContainer}></Route>
                <Route exact path="/categorias" component={Category}></Route>
                <Route path="/categorias/:description" component={MainItemListContainer}></Route>
                <Route path="/producto/:id" component={MainItemDetailContainer}></Route>
                <Route path="/comprar/:id" component={ItemComprar}></Route>
            </Switch>
            <Footer />
        </BrowserRouter>

    )
}

export default App