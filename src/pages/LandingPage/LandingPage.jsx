import { Col, Container, Row } from 'react-bootstrap';

import mulher_cadeira from '../../assets/mulher_cadeira_decor.png';

const LandingPage = () => {
  return (
    <>
      <div className="bg-primary pt-5">
        <Container>
          <Row className='mx-xxl-2'>
            <Col md={12} lg={6}>
              <p className='title text-big fw-medium'>Exercícios adaptados para <span className='fw-bolder'>todos</span></p>
              <p className='pe-xl-5 me-xl-5'>
                O compromisso da IncluMove é com o usuário. Queremos acolher todos os corpos, com ou sem limitações, com uma plataforma de bem-estar físico adaptado.
              </p>
            </Col>
            <Col md={12} lg={6}>
              <img className='mw-100' src={mulher_cadeira} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-white vh-100">

      </div>
      <div className="bg-primary vh-100">
        <Container>
          <h1>oi</h1>
        </Container>
      </div>
    </>
  )
};

export { LandingPage };

