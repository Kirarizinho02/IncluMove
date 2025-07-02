import { useEffect } from "react";
import { Button, Card, Col, Row, Toast } from "react-bootstrap"
  ;
import { UseAppContext } from "../../../../hooks";

import { FaDumbbell } from "react-icons/fa6";
import { ButtonNewWorkout } from "../ButtonNewWorkout";

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const LastWorkout = () => {
  const { ultimoTreino, ultimoTreinoFunc, usuarioLog, handleWorkoutTypeSelect, setShowWorkoutToast, showWorkoutToast } = UseAppContext();

  useEffect(() => {
    ultimoTreinoFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Warning desligada pois recebe a função do AppContext e deve ser apenas chamada uma vez (portanto o [])

  const totalTreinos = usuarioLog?.treinos?.length || 0;

  return (
    <>
    <Row className="w-100 m-0 flex-nowrap">
        <Col
          lg={9}
          md={12}
          className="d-flex align-items-center justify-content-around pb-4 bg-primary"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-100 h-100 p-4 d-flex flex-column align-items-center bg-primary "
          >
            {ultimoTreino ? (
              <>
                <span className="fs-3 title">
                  <strong>Último Treino: </strong>

                  {ultimoTreino?.data || "Data não disponível"}
                </span>
                <span className="fs-4 mb-2 title">
                  <strong>Descrição:</strong> {ultimoTreino?.descricao || "Nenhuma descrição disponível."}
                </span>
                <span className="fs-5 mb-3">
                  <strong>Exercícios:</strong>
                </span>
                <Row className="w-75 g-4 justify-content-center">
                  {ultimoTreino?.exercicios?.map((exercicio, index) => (
                    <Col key={index} sm={12} md={6} lg={6} xl={4} className="d-flex justify-content-center">
                      <motion.div
                        whileHover={{
                          scale: 1.04,
                          y: -8,
                          boxShadow: "0 12px 24px 0 var(--bs-primary)",
                        }}
                        transition={{ type: "spring", stiffness: 250, damping: 20, ease: "easeInOut" }}
                        className="w-100 rounded-3"
                      >
                        <Card className="h-100 shadow treino-card-animado overflow-hidden rounded-3">
                          {exercicio.foto && (
                            <div>
                              <Card.Img
                                variant="top"
                                src={exercicio.foto}
                                alt={exercicio.nome}
                                className="object-fit-cover p-2"
                              />
                            </div>
                          )}
                          <Card.Body>
                            <Card.Title className="fw-bold title">{exercicio.nome}</Card.Title>
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
              </>
            ) : (
              <div className="text-center w-100">
                <h4 className="fw-bold mb-3">Nenhum treino encontrado.</h4>
                <p>
                  Aqui será exibido o seu último treino cadastrado ou o seu treino atual.<br />
                  Que tal começar com um novo treino rápido?
                </p>
                <Button
                  className="mt-3 btn-secondary"
                  onClick={() => handleWorkoutTypeSelect("Rapido")}
                >
                  Começar agora!
                </Button>
              </div>
            )}
          </motion.div>
        </Col>
        <Col
          md={12}
          lg={3}
          className="d-flex flex-column gap-4 py-4"
        >

          <Card className="shadow-sm text-center border-0 rounded" style={{
          }}>
            <Card.Body>
              <Card.Title className="fs-4 fw-bold mb-1">
                Olá, {usuarioLog?.nome || "Usuário"}!
              </Card.Title>
              <Card.Text className="fs-6" style={{ opacity: 0.95 }}>
                Como está se sentindo hoje?
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="shadow-sm text-center mb-3">
            <Card.Body>
              <FaDumbbell size="3rem" className="mb-2 text-accent" />
              <Card.Title className="fs-4 mb-1">Total de Treinos</Card.Title>
              <Card.Text className="display-5 fw-bold">{totalTreinos}</Card.Text>
            </Card.Body>
          </Card>

          <div className="d-flex justify-content-center align-items-center">
            <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect} />
          </div>
        </Col>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 1 }}
      >
      <Toast
        onClose={() => setShowWorkoutToast(false)}
        show={showWorkoutToast}
        bg="accent"
        style={{
          position: "fixed",
          bottom: 30,
          right: 20,
          minWidth: 220,
          zIndex: 2000
        }}
      >
        <Toast.Header>
          <strong className="me-auto fs-6 title">Treino</strong>
        </Toast.Header>
        <Toast.Body className="text-black fs-6">
          Treino salvo com sucesso!
        </Toast.Body>
      </Toast>
      </motion.div>
                    </Row>
    </>
  );
};

export { LastWorkout };