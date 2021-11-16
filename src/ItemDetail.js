import Image from './components/Image';
import Counter from "./Counter"
import { contexto } from './context/CartContext';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';



const ItemDetail = ({ item }) => {
    const [mostrar, setMostrar] = useState(false);
    const { push } = useHistory();
    const { agregarProducto } = useContext(contexto);


    function onAdd(cantidad, e) {
        e.preventDefault();
        agregarProducto(item, cantidad);
        setMostrar(!mostrar);

    }
    const redireccionar = () => {
        push("/cart") // despues de mostrar me redirrecciona a Cart
    }
    function onDel(cantidad, e) {
        e.preventDefault();
        agregarProducto(item, cantidad);
        setMostrar(!mostrar);

    }

    return (

        < div id=" tarjeta" >

            <Image
                path={item.image}
                alt={item.alt}>
            </Image>
            <p className="p_price">${item.price}</p>
            <h3>{item.tittle}</h3>
            <p>{item.description}</p>
            <Counter onAdd={onAdd} />
            {mostrar && <button onClick={redireccionar}>Ir a carrito</button>}
        </div >

    )
}

export default ItemDetail
