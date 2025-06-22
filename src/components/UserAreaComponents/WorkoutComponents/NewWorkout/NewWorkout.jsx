import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, ProgressBar, Modal } from "react-bootstrap";

import { UseAppContext } from "../../../../hooks";
import { api } from "../../../../services";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

import { FaCheck } from "react-icons/fa6";

const NewWorkout = ({ exercicios, usuarioLog }) => {
  const { setShowNewWorkout, atualizarUserLogin, setShowWorkoutToast } = UseAppContext();

  const [timer, setTimer] = useState(0);
  const [checked, setChecked] = useState(Array(exercicios.length).fill(false));
  const [mudandoPagina, setMudandoPagina] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [descricaoTreino, setDescricaoTreino] = useState("");

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const navigate = useNavigate();

  useEffect(() => {
    const intervaloTreino = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(intervaloTreino);
  }, []);

  const formatTime = (segundos) => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
  };

  const proximoId =
    usuarioLog.treinos.length > 0
      ? Math.max(...usuarioLog.treinos.map((t) => t.id)) + 1
      : 1;


  const handleCompletarTreino = async () => {
    handleCloseModal();

    setTimeout(async () => {
      setMudandoPagina(true);

      const treino = {
        id: proximoId,
        nome: `Treino - ${new Date().toLocaleDateString()}`,
        descricao: descricaoTreino,
        data: new Date().toISOString().split("T")[0],
        duracao:
          exercicios.length === 3
            ? "Rapido"
            : exercicios.length === 4
              ? "Moderado"
              : "Pesado",
        exercicios: exercicios.map((ex, i) => ({
          id: i + 1,
          nome: ex.nome,
          movimento_pernas: usuarioLog.movimento_pernas,
          equipamento_apoio: ex.equipamento_apoio,
          equipamento_treino: ex.equipamento_treino,
          descricao: ex.descricao,
          series: ex.series,
          foto: ex.foto,
          repeticoes: ex.repeticoes,
        })),
      };

      const usuarioAtualizado = {
        ...usuarioLog,
        treinos: [...usuarioLog.treinos, treino],
      };

      try {
        await api.put(`/usuarios/${usuarioLog.id}`, usuarioAtualizado);
        setTimeout(async () => {
          setShowNewWorkout(false);
          setShowWorkoutToast(true);
          navigate("/user-area/workouts");
          await atualizarUserLogin();
        }, 500);
      } catch {
        setShowNewWorkout(false);
        window.location.reload();
        alert("Erro ao salvar treino.");
      }
    }, 500);
  };

  const handleCheck = (idx) => {
    setChecked((prev) => {
      const novo = [...prev];
      novo[idx] = !novo[idx];
      return novo;
    });
  };

  const totalChecked = checked.filter(Boolean).length;
  const progresso = Math.round((totalChecked / exercicios.length) * 100);

  return (
    <Row className="h-100 w-100 align-items-stretch justify-content-center" style={{ minHeight: "91vh" }}>
      <Col
        lg={10}
        md={12}
        className="d-flex align-items-center justify-content-around pb-4 bg-primary"
      >
        <AnimatePresence>
          {showModal && (
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Modal show onHide={handleCloseModal} >
                <Modal.Header closeButton>
                  <Modal.Title className="title">Descrição</Modal.Title>
                </Modal.Header>
                <Modal.Body> Caso deseje, insira uma descrição ao seu treino.</Modal.Body>
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Insira uma descrição para o seu treino..."
                  value={descricaoTreino}
                  onChange={e => setDescricaoTreino(e.target.value)}
                ></textarea>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCompletarTreino}>
                    Sair
                  </Button>
                  <Button variant="primary" onClick={handleCompletarTreino}>
                    Adicionar Descrição
                  </Button>
                </Modal.Footer>
              </Modal>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {!mudandoPagina && (
            <motion.div
              key="newworkout"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 0.4 }}
              className="w-100 h-100 p-4 d-flex flex-column align-items-center bg-primary"
            >
              <span className="fs-3 title mb-2">
                <strong>Treino em andamento!</strong>
              </span>
              <span className="fs-6 mb-2">Tempo: {formatTime(timer)}</span>
              <ProgressBar
                now={progresso}
                label={`${progresso}%`}
                className="mb-4 w-50 text-black"
                variant={progresso === 100 ? "accent" : "tertiary"}
              />
              <span className="fs-5 mb-3">
                <strong>Exercícios:</strong>
              </span>

              <Row className="w-100 g-4 justify-content-center">
                {exercicios.map((exercicio, index) => (
                  <Col key={index} sm={12} md={6} lg={6} xl={4} className="d-flex justify-content-center">
                    <motion.div
                      whileHover={{
                        scale: 1.04,
                        y: -8,
                      }}
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                      className="w-100"
                      onClick={() => handleCheck(index)}
                    >
                      <Card
                        className={`h-100 shadow treino-card-animado border-3 workout-details ${checked[index] ? "bg-accent border-accent" : ""
                          }`}
                        style={{
                          borderColor: checked[index] ? "#abf479" : undefined,
                          transition: "background 0.3s, color 0.3s, border 0.3s",
                          position: "relative",
                        }}
                      >
                        <div
                          className="position-absolute"
                          style={{
                            top: 10,
                            right: 16,
                          }}
                        >
                          <div
                            className={`rounded-circle border border-2 d-flex align-items-center justify-content-center`}
                            style={{
                              width: "2rem",
                              height: "2rem",
                              background: checked[index] ? "#abf479" : "#fff",
                              borderColor: checked[index] ? "#abf479" : "#ccc",
                              transition: "background 0.3s, border 0.3s",
                            }}
                          >
                            {checked[index] && (
                              <FaCheck />
                            )}
                          </div>
                        </div>
                        {exercicio.foto && (
                          <div>
                            <Card.Img
                              variant="top"
                              src={exercicio.foto}
                              alt={"Exercício: " + exercicio.nome}
                              className="object-fit-cover p-2"
                            />
                          </div>
                        )}
                        <Card.Body>
                          <Card.Title className="fw-bold title mb-2">{exercicio.nome}</Card.Title>
                          <span>
                            {exercicio.descricao}
                            <br />
                            <strong>Séries:</strong> {exercicio.series} <br />
                            <strong>Repetições:</strong> {exercicio.repeticoes}
                          </span>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              <div className="w-100 align-items-center d-flex flex-column mt-4">
                <Button
                  className="btn-completar-treino"
                  size="lg"
                  onClick={handleShowModal}
                  disabled={progresso < 100}
                >
                  Completar Treino
                </Button>
                {progresso < 100 && (
                  <span className="text-muted mt-2 fs-6">
                    Conclua todos os exercícios para finalizar o treino.
                  </span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Col>
    </Row>
  );
};

export { NewWorkout };