const Main = ({ titulo, contador }) => {

  const tituloEnMayuscula = titulo.toUpperCase()

  const visitasAnteriores = 10
  const resultado = visitasAnteriores + contador

  return (
    <main>
      <h2>{tituloEnMayuscula}</h2>
      <p>Eres nuestro visitante numero : {resultado}</p>
      <hr></hr>
      <p>Revisa nuestro catálogo de camisetas y selecciona tu favorita</p>
    </main>
  )
}

export default Main