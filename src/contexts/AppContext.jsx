import { createContext, useState } from "react";

import { api } from "../services";
import { Await, data, Navigate } from "react-router-dom";

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

  const listaTreinosRapidos = async (movimentos_pernas) => {
    try {
      const response = await api.get(`/exercicios`, {
        params: { movimentos_pernas }
      });
  
      if (response.data.length >= 3) {
        const listaRapida = response.data.map(exercicio => ({
          nome: exercicio.nome,
          equipamento_apoio: exercicio.equipamento_apoio,
          equipamento_treino: exercicio.equipamento_treino,
          descricao: exercicio.descricao,
          series: exercicio.series,
          foto: exercicio.foto,
          repeticoes: exercicio.repeticoes
        }));
        return listaRapida;
      } else {
        throw new Error("Não há exercícios recomendados");
      }
  
    } catch (error) {
      console.error("Erro ao listar os treinos", error);
    }
  };  

  const listaTreinosMedios = async (movimentos_pernas) => {
    try {
      const response = await api.get(`/exercicios`, {
        params: { movimentos_pernas }
      });
  
      if (response.data.length >= 4) {
        const listaMedia = response.data.map(exercicio => ({
          nome: exercicio.nome,
          equipamento_apoio: exercicio.equipamento_apoio,
          equipamento_treino: exercicio.equipamento_treino,
          descricao: exercicio.descricao,
          series: exercicio.series,
          foto: exercicio.foto,
          repeticoes: exercicio.repeticoes
        }));
        return listaMedia;
      } else {
        throw new Error("Não há exercícios recomendados");
      }
  
    } catch (error) {
      console.error("Erro ao listar os treinos", error);
    }
  };
  
  const listaTreinosPesados = async (movimentos_pernas) => {
    try {
      const response = await api.get(`/exercicios`, {
        params: { movimentos_pernas }
      });
  
      if (response.data.length >= 5) {
        const listaPesada = response.data.map(exercicio => ({
          nome: exercicio.nome,
          equipamento_apoio: exercicio.equipamento_apoio,
          equipamento_treino: exercicio.equipamento_treino,
          descricao: exercicio.descricao,
          series: exercicio.series,
          foto: exercicio.foto,
          repeticoes: exercicio.repeticoes
        }));
        return listaPesada;
      } else {
        throw new Error("Não há exercícios recomendados");
      }
  
    } catch (error) {
      console.error("Erro ao listar os treinos", error);
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
      listaTreinosRapidos,
      listaTreinosMedios,
      listaTreinosPesados
    }}>
      {children}
    </appContext.Provider>
  );
}