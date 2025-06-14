import { useEffect } from "react";
import { UseAppContext } from "../../hooks";
import { Card, Col, Row } from "react-bootstrap";
import { ButtonNewWorkout } from "../ButtonNewWorkout";

const LastWorkout = () => {
  const { ultimoTreino, ultimoTreinoFunc, usuarioLog, handleWorkoutTypeSelect } = UseAppContext();  

  useEffect(() => {
    ultimoTreinoFunc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Warning desligada pois recebe a função do AppContext e deve ser apenas chamada uma vez (portanto o [])

  return (
    <>
      {ultimoTreino ? (
        <div className="p-5" style={{width: "95%"}}>
          <h2 className="title mt-2">
            Que bom ter você de volta, <span className="fw-bold">{usuarioLog.nome}!</span>
          </h2>
          <div className="bg-white rounded p-5">
          <h2 className="title fw-bold ms-1"> Um destaque entre seus treinos recentes: </h2>
          <ul className="d-flex flex-row">
            <li className="me-4 ms-n4" style={{listStyle: "none"}}>
              <p className="fs-5"> <span className="fw-semibold"> Duração: </span> {ultimoTreino.duracao} </p>
            </li>
            <li style={{listStyle: "none"}}>
              <div className='vr fs-1 me-4'></div>
            </li>
            <li className="me-4" style={{listStyle: "none"}}>
              <p className="fs-5"> <span className="fw-semibold"> Data: </span> {new Date(ultimoTreino.data).toLocaleDateString()}</p>
            </li>
            <li style={{listStyle: "none"}}>
              <div className='vr fs-1 me-4'></div>
            </li>
            <li className="me-4" style={{listStyle: "none"}}>
              <p className="fs-5"> <span className="fw-semibold"> Descrição: </span> {ultimoTreino.descricao || "Sem descrição."}</p>
            </li>
          </ul>

          <h5 className="mb-3">Exercícios realizados:</h5>
          <Row className="me-4">
            {ultimoTreino.exercicios?.map((exercicio, index) => (
              <Col key={index} md={6} lg={6} className="mb-4">
                <Card className="h-100 w-100 shadow-sm" style={{width:"25rem"}}>
                  {exercicio.foto && (
                    <Card.Img variant="top" src={exercicio.foto} alt={exercicio.nome} className="object-fit-cover p-2"/>
                  )}
                  <Card.Body>
                    <Card.Title>{exercicio.nome}</Card.Title>
                    <Card.Text>
                      {exercicio.descricao}
                      <br />
                      <strong>Séries:</strong> {exercicio.series} <br />
                      <strong>Repetições:</strong> {exercicio.repeticoes}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <div className="w-100 align-items-center d-flex flex-column" />
          </Row>
          <div className="d-flex flex-row justify-content-center mt-4">
            <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect}/>
          </div>
        </div>
      </div>
      ) : (
        <div className="w-100 my-5 mx-4 p-4 border rounded">
          <h4 className="text-center title fw-bold">Nenhum treino encontrado.</h4>
          <p className="text-center"> Aqui será exibido o seu último treino cadastrado ou o seu treino atual. <br />Que tal começar com um novo treino rápido? </p>
        </div>
      )}
    </>
  )
}

export { LastWorkout };