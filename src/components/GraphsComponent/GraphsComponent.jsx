import { Col, Container, Row } from "react-bootstrap"

const GraphsComponent = (props) => {
  const { imagem } = props;
  return(
    <Container className="shadow p-4 mt-3 rounded-4 bg-white">
          <Row>
            <h4 className="fw-bold title ms-3"> Treinos nos últimos 30 dias: </h4>
            <Col>
            <img src={imagem} />
            </Col>
            <Col>
              <Row className="h-100 align-items-center">
                <Col md={12} className="mb-n3">
                  <div className="bg-secondary rounded-4 d-inline-block" style={{width:"1.5rem"}}>  ­ </div> 
                  <span className="ms-3 fs-5 fw-semibold text-center"> Treino Rápido </span>
                  <br />
                  <span className="ms-5 d-flex text-center"> 65% - 10 de 15 treinos</span>
                </Col>
                <Col md={12} className="mb-n3">
                  <div className="bg-accent rounded-4 d-inline-block" style={{width:"1.5rem"}}>  ­ </div> 
                  <span className="ms-3 fs-5 fw-semibold text-center"> Treino Médio </span>
                  <br />
                  <span className="ms-5 d-flex text-center"> 30% - 4 de 15 treinos</span>
                </Col>
                <Col md={12}>
                  <div className="bg-tertiary rounded-4 d-inline-block" style={{width:"1.5rem"}}>  ­ </div> 
                  <span className="ms-3 fs-5 fw-semibold "> Treino Pesado </span>
                  <br />
                  <span className="ms-5 d-flex text-center"> 5% - 1 de 15 treinos</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
  )
}
export { GraphsComponent };