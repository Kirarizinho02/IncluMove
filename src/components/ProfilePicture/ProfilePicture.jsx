import { UseAppContext } from '../../hooks/';

const ProfilePicture = (props) => {
  const { size } = props;
  
  const { usuarioLog } = UseAppContext();

  return (
    usuarioLog ?
      <img src={usuarioLog.foto} alt="Foto de perfil" className="rounded-circle shadow object-fit-cover" width={size} height={size}/> :
      "loading..."  
  )
}
export { ProfilePicture };