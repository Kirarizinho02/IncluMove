import { createContext, useState } from "react";

import { api } from "../services";
import { Navigate } from "react-router-dom";

export const appContext = createContext({});

const rotaPrivada = ({ children }) => {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    return <Navigate to="/error" state={{ textoRota: "Não é possível acessar uma conta sem estar logado." }} />;
  }

  return children;
};

export const AppContextProvider = ( props ) => {
  const { children } = props;

  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLog, setUsuarioLog] = useState(null);

  const loginUsuario = async ({ email, senha }) => {
    try {
      const response = await api.get(`/usuarios`, {
        params: { email, senha }
      });
  
      if (response.data.length > 0) {
        return response.data[0]; 
      } else {
        throw new Error("Email ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const adicionarUsuario = async (usuario) => {
    try {
      const response = await api.post('/usuarios', usuario);
      setUsuarios([...usuarios, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  return (
    <appContext.Provider value={{ 
      usuarios,
      setUsuarios,
      adicionarUsuario,
      usuarioLog,
      setUsuarioLog,
      loginUsuario,
      rotaPrivada,
    }}>
      {children}
    </appContext.Provider>
  );
}