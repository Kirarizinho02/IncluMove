import { useContext } from "react";
import { themeContext } from "../contexts/";

const UseThemeContext = () => { 
  const context = useContext(themeContext);

  return context;
}

export { UseThemeContext };
