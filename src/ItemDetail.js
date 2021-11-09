import Image from './components/Image';
import Counter from './Counter';


function onAdd(quantityToAdd) {
    console.log(quantityToAdd)
}

function onDel(quantityToDel) {
    console.log(quantityToDel)
}

const ItemDetail = ({ item }) => {
    //console.log(item.image)
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
