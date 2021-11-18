import { createContext, useState } from "react";

export const contexto = createContext();

export const { Provider } = contexto;

export const CustonProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const copia = [...cart];
  const agregarProducto = (prod, cantidad) => {


    if (!isInCart(prod.id)) {
      //console.log("agregando producto");
      copia.push({ // creo un nuevo objeto a partir de prod y cantidad
        id: prod.id,
        tittle: prod.tittle,
        price: prod.price,
        description: prod.description,
        image: prod.image,
        alt: prod.alt,
        cantidad: cantidad

      });
    }


    else {
      //console.log(" producto actual");
      const producto_En_Cart = copia.map(producto => {
        if (producto.id == prod.id) {
          producto.cantidad += cantidad;
        }
        return producto; //retorna el objeto producto
      })
      setCart(producto_En_Cart); // actualiza el producto en el carrito. devuelve un array
    }

  }
  const isInCart = (id) => {
    const producto_En_Carrito = copia.some(producto => producto.id == id);
    console.log(producto_En_Carrito);
    return producto_En_Carrito
  }

  const eliminarProducto = (prodId) => {
    const producto_Removido = cart.filter(producto => producto.id !== prodId);
    setCart(producto_Removido);
    return




  }
  const vaciarCarrito = () => {
    setCart([]);
  }


  const valor_del_contexto = {
    cart: cart,
    agregarProducto: agregarProducto,
    eliminarProducto: eliminarProducto,
    vaciarCarrito: vaciarCarrito
  }


  return (
    <Provider value={valor_del_contexto}>
      {children}
    </Provider>
  )
}
export default CustonProvider;