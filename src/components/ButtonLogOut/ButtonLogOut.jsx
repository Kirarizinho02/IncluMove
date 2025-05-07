import { open_door } from "../../assets";

const ButtonLogOut = () => {
  const logOut = () => {
    localStorage.removeItem('usuarioLogado');
    window.location.href = "/form/login";
  }
  return (
    <button className="bg-primary object-fit-scale" style={{ border: "none" }} onClick={logOut}>
      <img src={open_door} alt=""  style={{ height:"4rem" }}/>
    </button>
  );
}

export { ButtonLogOut };