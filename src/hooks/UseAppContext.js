import { useContext } from "react";
import { appContext } from "../contexts/";

const UseAppContext = () => { 
  const context = useContext(appContext);

  return context;
}

export { UseAppContext };