import Nav from "./Nav"
const Header = (props) => {


  //const {nombre, apellido}=props;
  //const nombre= props.nombre
  //const apellido= props.apellido

  console.log(props.nombre)
  console.log(props.apellido)
  console.log(props.edad)
  return (
    <header id="main-header" className="clase1 clase2" >
      
      <p>Bievenido {props.nombre} {props.apellido}</p>
     
      <Nav />


    </header >

  )
}

export default Header