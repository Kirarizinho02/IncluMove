import { useContext } from "react";
import { appContext } from "../contexts/AppContext";

const UseAppContext = () => { 
  const context = useContext(appContext);

  return context;
}

export { UseAppContext };