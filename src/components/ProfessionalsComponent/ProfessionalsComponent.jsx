import { Button, Col, Container, Row } from "react-bootstrap"
import { ana_lemos, marco_aurelio } from "../../assets"

const ProfessionalsComponent = () => {
  return (
    <Container className="shadow p-4 mt-3 rounded-4 bg-white">
      <Row>
        <h4 className="fw-bold title ms-3"> Profissionais recomendados: </h4>
        <Col lg={4} sm={12} className="d-flex flex-column justify-content-center align-items-center">
          <img src={marco_aurelio} alt="" className="mw-100"/>
            <p className="fs-4">
            Marco Aurélio
            </p>
        </Col>
        <Col lg={4} sm={12}  className="d-flex flex-column justify-content-center align-items-center">
          <img src={ana_lemos} className="mw-100" />
            <p className="fs-4">
            Ana Lemos
            </p>
        </Col>
        <Col lg={4} sm={12} >
          <Row className="h-100 align-items-end mx-4 mx-lg-0">
            <p className="mb-4 fs-5"> 
              Esses profissionais são treinados e capacitados, recomendados com base no seu perfil. 
              <br />
              Nosso time conta com mais de 200 fisioterapeutas e
              personal trainers que estão prontos para te ajudarem!
            </p>
            <Button className="bg-tertiary mt-n mb-5 p-2">
              Outros Profissionais
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export { ProfessionalsComponent };

