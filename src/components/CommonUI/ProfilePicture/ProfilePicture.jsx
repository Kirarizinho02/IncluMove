import { UseAppContext } from '../../../hooks';

import { user } from '../../../assets';

const ProfilePicture = (props) => {
  const { size } = props;
  
  const { usuarioLog } = UseAppContext();

  return (
    usuarioLog ?
      <img src={usuarioLog.foto} alt="Foto de perfil" className="rounded-circle object-fit-cover" width={size} height={size}/> :
      <img src={user} alt="Foto de perfil" className="rounded-circle shadow object-fit-cover" width={size} height={size}/>
  );
}
export { ProfilePicture };