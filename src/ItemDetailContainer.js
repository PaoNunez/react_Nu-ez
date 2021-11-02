import { useState, useEffect } from "react";
import productos from "./productos.json"


const ItemDetailContainer = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    getProducts().then((productos) => {
      setproduct(productos)
    })
  }, [])

  return (

    <div id="product">
      <ItemDetail product={product} />

    </div>

  )
}
let getProducts= new Promise(cb => {
  setTimeout(() => {
    cb(productos)
  }, 2000)

});


export default ItemDetailContainer
