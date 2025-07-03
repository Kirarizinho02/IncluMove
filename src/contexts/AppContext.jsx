import { createContext, useCallback, useEffect, useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { api } from "../services";
import { useTranslation } from "react-i18next";
import { FaPersonCircleCheck, FaVideo } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
export const appContext = createContext({});

const rotaPrivada = ({ children }) => {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (!usuarioLogado) {
    return <Navigate to="/error" state={{ textoRota: "Não é possível acessar uma conta sem estar logado." }} />;
  }

  return children;
};

export const AppContextProvider = (props) => {
  const { children } = props;
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(true);
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [usuarioParcial, setUsuarioParcial] = useState(null);
  const [showNewWorkout, setShowNewWorkout] = useState(false);
  const [showWorkoutToast, setShowWorkoutToast] = useState(false);
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLog, setUsuarioLog] = useState(null);
  const [ultimoTreino, setUltimoTreino] = useState(null);
  const [showAside, setShowAside] = useState(false);

  const storedLang = localStorage.getItem("language");
  const { i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(storedLang || language);


  const loginUsuario = async ({ email, senha }) => {
    if (!email || !senha) {
      throw new Error("Preencha todos os campos.");
    }

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

  const handleExpanded = () => {
    setExpanded(current => !current);
  };

  const adicionarUsuario = async (usuario) => {
    try {
      const response = await api.post('/usuarios', usuario);
      setUsuarios([...usuarios, response.data]);
    } catch (error) {
      console.error("erro:", error);
    }
  };

  const getIconColor = (path) =>
    location.pathname === path ? "var(--bs-tertiary)" : undefined;

  const logOut = () => {
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('selectedMenu');
    setUsuarioLog(null);
    window.location.href = "/form/login";
  }

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
    if (storedLang && storedLang !== language) {
      changeLanguage(storedLang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        navigate("/user-area/workouts");
      }
    } catch (error) {
      console.error("erro:", error);
    }
  };

  const handleCloseAside = () => setShowAside(false);
  const handleShowAside = () => setShowAside(true);

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

  const handleChangeLanguage = (langCode) => {
    changeLanguage(langCode);
    setCurrentLanguage(langCode);
    localStorage.setItem("language", langCode);
  };

  const getAtendimentoLabel = (atende, t) => {
    if (atende.includes("online") && atende.includes("presencial")) {
      return (
        <span>
          <FaVideo className="me-1 mb-1" /> {t("professionals.hybrid")}{" "}
        </span>
      );
    }
    if (atende.includes("online")) {
      return (
        <span>
          <FaVideo className="me-1 mb-1" /> {t("professionals.online")}
        </span>
      );
    }
    if (atende.includes("presencial")) {
      return (
        <span> 
          <FaPersonCircleCheck className="me-1 mb-1" /> {t("professionals.inPerson")} 
        </span>
      );
    }
    return null;
  };


  return (
    <appContext.Provider value={{
      ultimoTreinoFunc,
      ultimoTreino,

      rotaPrivada,

      setShowNewWorkout,
      showNewWorkout,
      showWorkoutToast,
      setShowWorkoutToast,
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
      logOut,

      listaTreinosRapidos,
      listaTreinosMedios,
      listaTreinosPesados,

      mudarFoto,
      fotoPerfil,

      showAside,
      handleCloseAside,
      handleShowAside,
      getIconColor,

      handleChangeLanguage,
      currentLanguage,
      handleExpanded,
      expanded,
      setExpanded,

      getAtendimentoLabel,
    }}>
      {children}
    </appContext.Provider>
  );
}