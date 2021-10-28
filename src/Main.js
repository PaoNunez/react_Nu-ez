
import Counter from "./Counter"
const Main = ({ titulo, children }) => {

  const tituloEnMayuscula = titulo.toUpperCase()



  return (
    <>
      <main>
        <h2>{tituloEnMayuscula}</h2>
        {children}
        <hr></hr>
        <p>Revisa nuestro catálogo de camisetas y selecciona tu favorita</p>
      </main>
      <Counter />

    </>
  )
}

export default Main