import Counter from './Counter';
const ItemDetail = ({ item }) => {
    console.log(item.image)
    return (
       
        < div className = "info_ItemDetail" >
            <h3>{item.description}</h3>
            <img src={item.image} alt="camiseta" />
            <p className="p_price">${item.price}</p>
            <Counter />
        </div >

    )
}

export default ItemDetail
