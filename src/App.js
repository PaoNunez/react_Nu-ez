import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

const App = () => {

  const contador = 10

  const links = ["link1", "link2"]

  const hacerLog = () => {
    console.log("Soy un callback de App")
  }

  return (
    <>
      <Header
        nombre="Paola"
        apellido="Nuñez"
        edad={34}
        links={links}
        callback={hacerLog}
      />
      <Main titulo="T&sh Tu tienda favorita" contador={contador} />
      <Footer />
    </>
  )
}


export default App