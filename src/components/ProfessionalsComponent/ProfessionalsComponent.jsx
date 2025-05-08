import { Button, Col, Container, Row } from "react-bootstrap"
import { ana_lemos, marco_aurelio } from "../../assets"

const ProfessionalsComponent = () => {
  return (
    <Container className="shadow p-4 mt-3 rounded-4 bg-white">
      <Row>
        <h4 className="fw-bold title ms-3 mb-4"> Profissionais recomendados: </h4>
        <Col lg={6} sm={12} className="d-flex flex-column justify-content-center align-items-center">
          <img src={marco_aurelio} alt="Doutor Marco Aurélio" className="mw-100 w-75"/>
            <p className="fs-4 text-center">
            Marco Aurélio
            </p>
        </Col>
        <Col lg={6} sm={12}  className="d-flex flex-column justify-content-center align-items-center">
          <img src={ana_lemos} alt="Doutora Ana Lemos" className="mw-100 w-75" />
            <p className="fs-4 text-center">
            Ana Lemos
            </p>
        </Col>
        <Col lg={12} className="d-flex justify-content-center">
          <Row className="h-100 mx-4 w-75 d-flex align-items-center justify-content-center">
            <p className="mb-4 fs-6"> 
              Esses profissionais são treinados e capacitados, recomendados com base no seu perfil. 
              Nosso time conta com mais de 200 fisioterapeutas e
              personal trainers que estão prontos para te ajudarem!
            </p>
            <Button className="bg-tertiary p-1 w-100" onClick={() => alert("Esta página ainda não foi implementada.")}>
              Mais Profissionais
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export { ProfessionalsComponent };

