import { useEffect } from "react";
import { Button, Card, Col, Row, Toast } from "react-bootstrap"
  ;
import { UseAppContext } from "../../../../hooks";

import { FaDumbbell } from "react-icons/fa6";
import { ButtonNewWorkout } from "../ButtonNewWorkout";

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { LevelComponent } from "../../ProfileComponents";
import { useTranslation } from "react-i18next";

const LastWorkout = () => {
  const { t } = useTranslation();
  const { ultimoTreino, ultimoTreinoFunc, usuarioLog, handleWorkoutTypeSelect, setShowWorkoutToast, showWorkoutToast } = UseAppContext();

  useEffect(() => {
    ultimoTreinoFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Warning desligada pois recebe a função do AppContext e deve ser apenas chamada uma vez (portanto o [])

  const totalTreinos = usuarioLog?.treinos?.length || 0;

 return (
    <>
      <Row className="m-0 p-0">
        <Col
          lg={12}
          md={12}
          xl={9}
          className="d-inline-flex align-items-center justify-content-around py-4 bg-primary w-md-100"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-100 h-100 d-flex flex-column align-items-center border border-body mt-2 py-4 rounded-4 bg-body-tertiary shadow-sm"
          >
            {ultimoTreino ? (
              <>
                <span className="fs-3 title text-center">
                  <strong>{t("lastWorkout.title")}: </strong>
                  {ultimoTreino?.data || t("lastWorkout.dateUnavailable")}
                </span>
                <span className="fs-4 mb-2 title text-center">
                  <strong>{t("lastWorkout.description")}:</strong> {ultimoTreino?.descricao || t("lastWorkout.descriptionUnavailable")}
                </span>
                <span className="fs-5 mb-3">
                  <strong>{t("lastWorkout.exercises")}:</strong>
                </span>
                <Row className="w-100 g-4 justify-content-center px-2">
                  {ultimoTreino?.exercicios?.map((exercicio, index) => (
                    <Col key={index} sm={12} md={6} lg={6} xl={6} xxl={4} className="d-flex justify-content-center">
                      <motion.div
                        whileHover={{
                          scale: 1.04,
                          y: -8,
                          boxShadow: "0 12px 6px 0 var(--bs-primary)",
                        }}
                        transition={{ type: "spring", stiffness: 250, damping: 20, ease: "easeInOut" }}
                        className="w-100 rounded-4"
                      >
                        <Card className="h-100 shadow-sm treino-card-animado overflow-hidden rounded-4">
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
                              <strong>{t("lastWorkout.series")}:</strong> {exercicio.series} <br />
                              <strong>{t("lastWorkout.repetitions")}:</strong> {exercicio.repeticoes}
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
                <h4 className="fw-bold mb-3">{t("lastWorkout.noWorkoutTitle")}</h4>
                <p>
                  {t("lastWorkout.noWorkoutText")}
                </p>
                <Button
                  className="mt-3 btn-secondary"
                  onClick={() => handleWorkoutTypeSelect("Rapido")}
                >
                  {t("lastWorkout.startNow")}
                </Button>
              </div>
            )}
          </motion.div>
        </Col>
        <Col
          xs={12}
          md={12}
          sm={12}
          lg={12}
          xl={3}
          className="d-inline-flex align-items-center justify-content-start gap-5 pb-4 bg-primary flex-column"
          style={{ paddingTop: "0.8rem" }}
        >
          <div className="m-0 p-0 w-100" >
            <LevelComponent />
          </div>
          <div className="w-100 border border-body mx-3 py-4 rounded-4 bg-body-tertiary shadow-sm">
            <Card className="shadow-sm text-center border-0 rounded-4 mx-3 mb-3">
              <Card.Body>
                <Card.Title className="fs-4 fw-bold mb-1">
                  {t("lastWorkout.greeting", { name: usuarioLog?.nome || "Usuário" })}
                </Card.Title>
                <Card.Text className="fs-6" style={{ opacity: 0.95 }}>
                  {t("lastWorkout.howAreYou")}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="shadow-sm text-center mb-3 rounded-4 mx-3">
              <Card.Body>
                <FaDumbbell size="3rem" className="mb-2 text-accent" />
                <Card.Title className="fs-4 mb-1">{t("lastWorkout.totalWorkouts")}</Card.Title>
                <Card.Text className="display-5 fw-bold">{totalTreinos}</Card.Text>
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-center align-items-center mx-auto" style={{ width: "90%" }}>
              <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect} />
            </div>
          </div>
        </Col>
      </Row>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
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
            <strong className="me-auto fs-6 title">{t("lastWorkout.title")}</strong>
          </Toast.Header>
          <Toast.Body className="text-black fs-6">
            {t("lastWorkout.workoutSaved")}
          </Toast.Body>
        </Toast>
      </motion.div>
    </>
  );
};

export { LastWorkout };