import { createContext, useState } from "react";

export const contexto = createContext();
export const { Provider } = contexto;

export const CustonProvider = ({ children }) => {


  const [cart, setCart] = useState([]);
  const copia = [...cart];

  const agregarProducto = (prod, cantidad) => {


    if (!isInCart(prod.id)) {

      copia.push({

        id: prod.id,
        tittle: prod.tittle,
        price: prod.price,
        description: prod.description,
        image: prod.image,
        alt: prod.alt,
        cantidad: cantidad

      });

      setCart(copia);
    }
    else {
      //console.log(" producto actual");
      const producto_En_Cart = copia.map(producto => {
        if (producto.id === prod.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      })
      setCart(producto_En_Cart);
    }

  }
  const isInCart = (id) => {
    const producto_En_Carrito = copia.some(producto => producto.id === id);
    //console.log(producto_En_Carrito);
    return producto_En_Carrito
  }

  const borrarProducto = (itemId) => {
    setCart([...copia.filter(prod => prod.id !== itemId)]);
    return

  }

  const vaciarCarrito = () => {
    setCart([]);
  }


  const valor_del_contexto = {
    cart: cart,
    agregarProducto: agregarProducto,
    borrarProducto: borrarProducto,
    vaciarCarrito: vaciarCarrito
  }


  return (
    <Provider value={valor_del_contexto}>
      {children}
    </Provider>
  )
}
export default CustonProvider;