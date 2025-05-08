import { createContext, useEffect, useState, useCallback } from "react";

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

  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [usuarioParcial, setUsuarioParcial] = useState(null);
  const [showNewWorkout, setShowNewWorkout] = useState(false);
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLog, setUsuarioLog] = useState(null);
  const [ultimoTreino, setUltimoTreino] = useState(null);

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
      console.error("erro:", error);
    }
  };

  const mudarFoto = async (foto) => {
    try {
      setFotoPerfil(foto);
  
      const res = await api.patch(`/usuarios/${usuarioLog.id}`, {
        foto: foto, 
      });

      setUsuarioLog(res.data); 
      localStorage.setItem('usuarioLogado', JSON.stringify(res.data)); 
  
    } catch (error) {
      console.error("Erro ao atualizar a foto:", error);
    }
  };

  const adicionarUsuario = async (usuario) => {
    try {
      const response = await api.post('/usuarios', usuario);
      setUsuarios([...usuarios, response.data]);
    } catch (error) {
      console.error("erro:", error);
    }
  };


const atualizarUserLogin = useCallback(async () => {
  const usuarioLog = localStorage.getItem('usuarioLogado');
  let usuarioLocal = null;

  if (usuarioLog && usuarioLog !== "undefined") {
    try {
      usuarioLocal = JSON.parse(usuarioLog);
    } catch (err) {
      usuarioLocal = null;
      localStorage.removeItem('usuarioLogado');
      console.error("erro:", err);
    }
  }
  if (usuarioLocal && usuarioLocal.id) {
    try {
      const response = await api.get(`/usuarios`, { params: { id: usuarioLocal.id } });
      const userLoginNovo = response.data[0];
      setUsuarioLog(userLoginNovo);
      localStorage.setItem('usuarioLogado', JSON.stringify(userLoginNovo));
      console.log(userLoginNovo);
    } catch (error) {
      console.error("erro:", error);
    }
  }
}, []);

  useEffect(() => {
    atualizarUserLogin();
  }, [atualizarUserLogin]);

  const handleWorkoutTypeSelect = async (tipo) => {
    if (!usuarioLog) return;

    let lista = [];
    try {
      switch (tipo) {
        case "Rapido":
          lista = await listaTreinosRapidos(usuarioLog.movimento_pernas);
          break;
        case "Moderado":
          lista = await listaTreinosMedios(usuarioLog.movimento_pernas);
          break;
        case "Pesado":
          lista = await listaTreinosPesados(usuarioLog.movimento_pernas);
          break;
        default:
          return;
      }

      if (lista && lista.length) {
        const listaAleatoria = lista.sort(() => 0.5 - Math.random());
  
        const qtd = tipo === "Rapido" ? 3 : tipo === "Moderado" ? 4 : 5;
        setExerciciosSelecionados(listaAleatoria.slice(0, qtd));
        setShowNewWorkout(true);
      }
    } catch (error) {
      console.error("erro:", error);
    }
  };

const ultimoTreinoFunc = async () => {
  const usuarioLog = localStorage.getItem('usuarioLogado');
  let usuarioLocal = null;
  if (usuarioLog && usuarioLog !== "undefined") {
    try {
      usuarioLocal = JSON.parse(usuarioLog);
    } catch (e) {
      usuarioLocal = null;
      localStorage.removeItem('usuarioLogado');
      console.error("erro:", e);
    }
  }
  if (usuarioLocal && usuarioLocal.id) {
    try {
      const res = await api.get('/usuarios', { params: { id: usuarioLocal.id } });
      const usuarioAtualizado = res.data[0];

      if (usuarioAtualizado?.treinos?.length > 0) {
        const treinosOrdenados = [...usuarioAtualizado.treinos].sort((a, b) => new Date(b.data) - new Date(a.data));
        setUltimoTreino(treinosOrdenados[0]);
      }
    } catch (error) {
      console.error("Erro ao buscar último treino:", error);
    }
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
      ultimoTreinoFunc,
      ultimoTreino,
      
      rotaPrivada,
      
      showNewWorkout,
      handleWorkoutTypeSelect,
      exerciciosSelecionados,
      
      usuarios,
      setUsuarios,
      adicionarUsuario,
      usuarioLog,
      setUsuarioLog,
      loginUsuario,
      atualizarUserLogin,
      usuarioParcial,
      setUsuarioParcial,

      listaTreinosRapidos,
      listaTreinosMedios,
      listaTreinosPesados,

      mudarFoto, 
      fotoPerfil,
    }}>
      {children}
    </appContext.Provider>
  );
}