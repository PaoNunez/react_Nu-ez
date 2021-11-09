const Image = ({ path, alt }) => {
  return (
    <img src={window.location.origin + "/" + path} alt={alt} />
  )
}

export default Image
