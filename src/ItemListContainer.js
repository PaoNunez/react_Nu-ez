
import Item from "./Item"
import { useState, useEffect } from "react";
import productos from "./productos.json"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [product, setproduct] = useState([]);
  const params = useParams();
  useEffect(() => {
    getProducts.then((productos) => {
      if (productos.id === parseInt(params.id)) {
        setproduct(productos)

      }
    })
  }, [params.id, getProducts])

  return (

    <div id="product">

      <Item product={product} />

    </div>

  )
}
let getProducts = new Promise(cb => {
  setTimeout(() => {
    cb(productos)
  }, 2000)

});


export default ItemListContainer
