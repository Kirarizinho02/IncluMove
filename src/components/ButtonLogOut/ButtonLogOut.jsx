import { open_door } from "../../assets";
import { UseAppContext } from "../../hooks";

const ButtonLogOut = () => {
  const { logOut } = UseAppContext();
  return (
    <button className="bg-primary object-fit-scale" style={{ border: "none" }} onClick={logOut}>
      <img src={open_door} alt=""  style={{ height:"4rem" }}/>
    </button>
  );
}

export { ButtonLogOut };