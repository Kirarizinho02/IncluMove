import { Button, Col, Container, Row } from 'react-bootstrap';

import { ana_lemos, line_1, line_2, marco_aurelio, mulher_cadeira, ricardo_junior, stars } from '../../assets';

const LandingPage = () => {
  return (
    <>
      <div className='bg-primary pt-5'>
        <Container>
          <Row className='mx-xxl-2'>
            <Col md={12} lg={6}>
              <p className='title text-big fw-medium'>Exercícios adaptados para <span className='fw-bolder'>todos</span></p>
              <p className='pe-xl-5 me-xl-5'>
                O compromisso da <span className='fw-semibold'>IncluMove</span> é com o usuário. Queremos acolher todos os corpos, com ou sem limitações, com uma plataforma de bem-estar físico adaptado.
              </p>
              <div className='d-flex justify-content-center'>
                <Button variant='tertiary' size='lg' className='shadow col-sm-6 col-md-4 col-lg-6 col-xl-4 mb-3 me-md-auto' href='/form/signup'>
                  <span className='title'>Inscreva-se</span>
                </Button>
              </div>
              <p className='text-center text-md-start'>Já possui um cadastro? <a className='text-decoration-none link-tertiary' href='/form/login'>Entre na sua conta.</a></p>
            </Col>
            <Col md={12} lg={6}>
              <img className='mw-100' src={mulher_cadeira} />
            </Col>
          </Row>
          <img className='d-none d-lg-block position-absolute ms-n5 mt-xxl-n5' src={stars} />
          <p className='title fs-1 text-center mt-lg-5 mt-xxl-3 mb-0'>
            Descubra o <span className='fw-bold'>IncluMove</span>
          </p>
          <div className='d-flex justify-content-center'><img className='mb-n5' src={line_1} height={150} /></div>
        </Container>
      </div>
      <div className='grad-primary-to-body-bg' />
      <div className='bg-white pt-3'>
        <Container>
        <p className='title text-medium fw-bold text-center m-0'>Os profissionais</p>
        <p className='text-center'>
          O time da IncluMove já conta com fisioterapeutas capacitados para atendê-los. Conheça um pouco dos nossos destaques:
        </p>
          <Row className='mt-5 overflow-auto'>
            <Col md={12} lg={4} className='d-flex justify-content-center'>
              <div className='test text-center me-lg-auto'>
                <img src={marco_aurelio} />
                <h2 className='title fw-bold'>Marco Aurélio</h2>
                <p>
                  Formado em Fisioterapia e Educação Física, cuida de idosos e pessoas com mobilidade reduzida há mais de 10 anos.
                </p>
              </div>
            </Col>
            <Col md={12} lg={4} className='d-flex justify-content-center'>
              <div className='test text-center me-lg-auto'>
                <img src={ana_lemos} />
                <h2 className='title fw-bold'>Ana Lemos</h2>
                <p>
                  Formada em Fisioterapia pela USP em 2017, atua na área cuidando de pacientes em quadros de tetraplegia desde 2019.
                </p>
              </div>
            </Col>
            <Col md={12} lg={4} className='d-flex justify-content-center'>
              <div className='test text-center me-lg-auto'>
                <img src={ricardo_junior} />
                <h2 className='title fw-bold'>Ricardo Júnior</h2>
                <p>
                  Formado em Fisioterapia e Educação Física, cuida de idosos e pessoas com mobilidade reduzida há mais de 10 anos.
                </p>
              </div>
            </Col>
          </Row>
          <div className='d-flex justify-content-center'><img className='mb-n5' src={line_2} height={212} /></div>
        </Container>
      </div>
      <div className='grad-body-bg-to-primary' />
      <div className='bg-primary vh-100'>
        <Container>
          <h1>oi</h1>
        </Container>
      </div>
    </>
  )
};

export { LandingPage };

