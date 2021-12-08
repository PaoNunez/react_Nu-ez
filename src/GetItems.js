import { firestore } from "./firebase" 


const getItems = (id) => {
  const array = []
  const db = firestore;

  const collection = db.collection("products");
  
  if (id) {
    const query = collection.where("description", "==", id);

    const promesa = query.get();
    return (
      promesa.then(resultados => {
        resultados.forEach(resultado => {
          array.push(
            {
              id: resultado.id,
              ...resultado.data()
            }
          )
        })
        return array;
      })
    )
  }
  else {
    const promesa = collection.get();
    return (
      promesa.then(resultados => {
        resultados.forEach(resultado => {
          array.push(
            {
              id: resultado.id,
              ...resultado.data()
            }
          )
        })
        return array;
      })
    )
  }

}

export default getItems