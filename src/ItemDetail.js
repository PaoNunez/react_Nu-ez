import Image from './components/Image';
import Counter from './Counter';
import { useHistory } from "react-router-dom"
import { contexto } from "./CartContext"
import { useContext } from "react"



const ItemDetail = ({ item }) => {
    //agregarProducto(item.image)
    const { push } = useHistory();
    const { agregarProducto } = useContext(contexto);
    function onAdd(cantidad) {
        agregarProducto(item, cantidad)
        push("./cart")
    }

    function onDel(cantidad) {
        agregarProducto(item, cantidad)
        push("./cart")
    }

    return (

        < div className="info_ItemDetail" >
            <h3>{item.description}</h3>
            <Image
                path={item.image}
                alt={item.alt} />
            <p className="p_price">${item.price}</p>
            <Counter onAdd={onAdd} onDel={onDel} />
        </div >

    )
}

export default ItemDetail
