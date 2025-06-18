import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { UseAppContext } from "../../../../hooks";
import { ButtonNewWorkout } from "../";
import { stars } from "../../../../assets";

const LastWorkout = () => {
  const { ultimoTreino, ultimoTreinoFunc, usuarioLog, handleWorkoutTypeSelect } = UseAppContext();  

  useEffect(() => {
    ultimoTreinoFunc();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Warning desligada pois recebe a função do AppContext e deve ser apenas chamada uma vez (portanto o [])

  return (
    <>
      {ultimoTreino ? (
        <div className="p-2 p-md-5" style={{width: "95%"}}>
          <h2 className="title mt-2">
            Que bom ter você de volta, <span className="fw-bold">{usuarioLog?.nome || "Usuário"}!</span>
          </h2>
          <div className="bg-body rounded p-5">
          <h2 className="title fw-bold ms-1"> Um destaque entre seus treinos recentes: </h2>
          <ul className="d-flex flex-column flex-md-row gap-3 m-0 mb-4 p-0">
            <li style={{listStyle: "none"}}>
              <span className="fs-5"> <span className="fw-semibold"> Duração: </span> {ultimoTreino.duracao} </span>
            </li>

            <div className='d-none d-md-block vr'></div>
            
            <li style={{listStyle: "none"}}>
              <span className="fs-5"> <span className="fw-semibold"> Data: </span> {new Date(ultimoTreino.data).toLocaleDateString()}</span>
            </li>

            <div className='d-none d-md-block vr'></div>

            <li style={{listStyle: "none"}}>
              <span className="fs-5"> <span className="fw-semibold"> Descrição: </span> {ultimoTreino.descricao || "Sem descrição."}</span>
            </li>
          </ul>

          <h5 className="mb-3">Exercícios realizados:</h5>
          <Row>
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
          <div className="w-100 h-100 my-3 d-flex flex-column justify-content-center align-items-center border rounded overflow-hidden" style={{ minHeight: "90vh" }}>
          <div className="w-100 my-5 mx-4 p-4 h-100 d-flex flex-column justify-content-center align-items-center">
            <img className='d-none d-xl-block position-absolute' src={stars} style={{top: 80, left: 160, width:"20rem"}}/>
            <h4 className="text-center title fw-bold">Nenhum treino encontrado.</h4>
            <p className="text-center"> Aqui será exibido o seu último treino cadastrado ou o seu treino atual. <br />Que tal começar com um novo treino rápido? </p>
            <div className="mt-2">
              <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect} />
            </div>
            <img className='d-none d-xl-block position-absolute' src={stars} style={{bottom: 80, right: 30, width:"20rem" }}/>
          </div>
        </div>
      )}
    </>
  )
}

export { LastWorkout };
