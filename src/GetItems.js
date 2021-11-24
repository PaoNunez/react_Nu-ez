import { firestore } from "./firebase" //acceder a la base de datos


const getItems = (id) => {
  const array = []
  const baseDatos = firestore;

  const collection = baseDatos.collection("products");
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