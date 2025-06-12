import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

import { ana_lemos, compromissos1, compromissos2, compromissos3, line_1, line_2, line_3, marco_aurelio, mulher_cadeira, ricardo_junior, stars } from '../../assets';


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
              <img className='mw-100' src={mulher_cadeira} alt='Mulher feliz em cadeira de rodas'/>
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
                <img src={marco_aurelio}  alt='Doutor Marco Aurélio'/>
                <h2 className='title fw-bold'>Marco Aurélio</h2>
                <p className='w-75 mx-auto'>
                  Formado em Fisioterapia e Educação Física, cuida de idosos e pessoas com mobilidade reduzida há mais de 10 anos.
                </p>
              </div>
            </Col>
            <Col md={12} lg={4} className='d-flex justify-content-center'>
              <div className='test text-center me-lg-auto'>
                <img src={ana_lemos} alt='Doutora Ana Lemos'/>
                <h2 className='title fw-bold'>Ana Lemos</h2>
                <p className='w-75 mx-auto'>
                  Formada em Fisioterapia pela USP em 2017, atua na área cuidando de pacientes em quadros de tetraplegia desde 2019.
                </p>
              </div>
            </Col>
            <Col md={12} lg={4} className='d-flex justify-content-center'>
              <div className='test text-center me-lg-auto'>
                <img src={ricardo_junior} alt='Doutor Ricardo Júnior'/>
                <h2 className='title fw-bold'>Ricardo Júnior</h2>
                <p className='w-75 mx-auto'>
                  Formado em Fisioterapia e Educação Física, cuida de idosos e pessoas com mobilidade reduzida há mais de 10 anos.
                </p>
              </div>
            </Col>
          </Row>
          <div className='d-flex justify-content-center'><img className='mb-n5' src={line_2} height={212} /></div>
        </Container>
      </div>
      <div className='grad-body-bg-to-primary' />
      <div className='bg-primary'>
        <Container>
          <p className='title text-medium fw-bold text-center m-0'>Os compromissos</p>
          <p className='text-center'>
            Descubra mais sobre as pautas que movem nosso projeto:
          </p>
          <Carousel data-bs-theme="dark" style={{ maxHeight: '80rem' }} className='mt-n5 mb-5'>
            <Carousel.Item className='w-100 h-100'>
              <Carousel.Caption className='mt-5'>
                <h1 className='title fw-bold'> 1. </h1>
                <p className='mt-n2'> Diversidade, Equidade e Inclusão </p>
              </Carousel.Caption>
              <div className='d-flex flex-column align-items-center mt-n4'>
                <img src={compromissos1} className='d-flex w-50' alt='Grupo de pessoas diversas felizes'></img>
              </div>
              <Carousel.Caption >
                <div className='w-100 d-flex flex-column align-items-center mb-2 '>
                  <p className='w-50 w-lg-80 d-flex me-2'>Diversidade, equidade e inclusão (DEI), são três conceitos interligados que visam garantir que todos tenham acesso igual às
                    oportunidades e se sintam valorizados, independentemente de suas características individuais.
                  </p>
                </div>
              </Carousel.Caption >

            </Carousel.Item>
            <Carousel.Item className='w-100 h-100'>
              <Carousel.Caption className='mt-5'>
                <h1 className='title fw-bold'> 2. </h1>
                <p className='mt-n2'> Educação e Conscientização Social </p>
              </Carousel.Caption>
              <div className='d-flex flex-column align-items-center mt-n4'>
                <img src={compromissos2} className='d-flex w-75' alt='Roda de pessoas diversas felizes'></img>
              </div>
              <Carousel.Caption>
                <div className='w-100 d-flex flex-column align-items-center mb-2 '>
                  <p className='w-50 w-lg-80 d-flex me-2'>
                    Promovemos por meio da plataforma a conscientização. Incentivamos a compreensão e o respeito pelas diferenças, combatendo preconceitos e estereótipos.
                    O time IncluMove abraça a todos os usuários.
                  </p>
                </div>
              </Carousel.Caption >
            </Carousel.Item>
            <Carousel.Item className='w-100 h-100'>
              <Carousel.Caption className='mt-5'>
                <h1 className='title fw-bold'> 3. </h1>
                <p className='mt-n2'> Bem-estar </p>
              </Carousel.Caption>
              <div className='d-flex flex-column align-items-center mt-n4'>
                <img src={compromissos3} className='d-flex w-50' alt='Mulher em uma caminhada com pensamentos positivos'></img>
              </div>
              <Carousel.Caption>
                <div className='w-100 d-flex flex-column align-items-center mb-2 '>
                  <p className='w-50 w-lg-80 d-flex me-2'>A OMS define saúde como um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença.
                    Isso significa que para ter uma vida plena e saudável, é necessário cuidar de todas as dimensões do bem-estar.
                  </p>
                </div>
              </Carousel.Caption >
            </Carousel.Item>

          </Carousel>
          <div className='d-flex justify-content-center mt-n5'><img className='mb-n5 ' src={line_3} height={150} /></div>
        </Container>
      </div>
      <div className='grad-primary-to-body-bg mt-n5' />
      <div className='bg-white pt-4' >
        <Container>
          <Row>
          <p className='title text-medium fw-bold text-center m-0 mt-5'> O projeto </p>
            <Col md={12}>
              <div className='w-100 d-flex align-items-center flex-column'>
              <p className='text-center w-75'>
                Criado por estudantes da ETEC Bento Quirino como parte da resolução da proposta do <span className='fw-bold'>Hackteen</span> — uma competição idealizada e realizada pelo instituto Venturus Inovação e Tecnologia em parceria com a Fundação Iochpe  — 
                o IncluMove é uma solução digital para o bem-estar físico inclusivo. <br />
              <br /> 
                Aqui está o vídeo pitch feito para a entrega inicial do projeto:
              </p>
              </div>
            </Col>
            <Col md={12} className='d-flex justify-content-center'>
              <iframe
                className='mw-100 shadow rounded-4'
                height={360}
                width={640}
                src='https://youtube.com/embed/Muj0ygfKkpo'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
};

export { LandingPage };

