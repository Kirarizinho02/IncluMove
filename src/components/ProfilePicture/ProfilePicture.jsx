const ProfilePicture = (props) => {
  const { foto } = props;
  return (
    <img src={foto} alt="Foto de perfil" className="rounded-circle shadow object-fit-cover"  style={{width:"200px", height:"200px"}}/>
  )
}
export { ProfilePicture };