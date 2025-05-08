import { useEffect } from "react";
import { UseAppContext } from "../../hooks";
import { Card, Col, Row } from "react-bootstrap";

const LastWorkout = () => {
  const { ultimoTreino, ultimoTreinoFunc } = UseAppContext();  

  useEffect(() => {
    ultimoTreinoFunc();
  }, [ultimoTreinoFunc]);

  return (
    <>
      {ultimoTreino ? (
        <div className="my-5 mx-4 border rounded p-4" style={{width: "95%"}}>
          <h2 className="title fw-bold"> Um destaque entre seus treinos recentes: </h2>
          <ul className="d-flex flex-column text-decoration-none">
              <li className="">
              <p className="fs-5"> <span className="fw-semibold"> Duração: </span> {ultimoTreino.duracao}</p>
              </li>
              <li className="">
              <p className="fs-5"> <span className="fw-semibold"> Data: </span> {new Date(ultimoTreino.data).toLocaleDateString()}</p>
              </li>
              <li className="">
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
            <div className="w-100 align-items-center d-flex flex-column">
            </div>
          </Row>
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