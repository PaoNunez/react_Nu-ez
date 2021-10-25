import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import { useState } from "react"
const App = () => {



  const hacerLog = () => {
    console.log("Soy un callback de App")
  }

  return (
    <>
      <Header />
      <Main titulo="T&sh Tu tienda favorita">
        <p>Conoce todos nuestros productos</p>
        <p>Pidelos en tu tienda virtual en cualquier lugar del pais</p>
      </Main>
      <button onClick={hacerLog}>Agregar al carrito</button>
      <Footer />
    </>

  )
}


export default App