import { Col, Container, Row } from 'react-bootstrap'

import { inclumove_team, passaro_illustration, stars } from '../../assets';

const About = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className="bg-primary">
        <Container>
        <Row className='mx-xxl-2 d-flex align-items-center'>
            <Col md={12} lg={6} className='p-3'>
              <h1 className='title fw-bold mt-exc-3 text-center text-md-start'> Nossa missão! </h1>
              <p className='pe-xl-5 me-xl-5'>
                Democratizar uma solução tecnológica que promova o acesso ao bem-estar físico, mental e social por meio de uma plataforma inclusiva e acolhedora.
                Queremos que todos os corpos — com ou sem limitações — sejam acolhidos pela nossa aplicação, que encontrem nela um espaço seguro para a prática de atividades físicas.
              </p>
              <img className='d-none d-lg-block position-absolute ms-n5' height={290} src={stars} />
            </Col>
            <Col md={12} lg={6}>
              <img className='mw-100' src={passaro_illustration} alt='Ilustração de pássaro' />
            </Col>
          </Row>
          {/* <img className='d-none d-lg-block position-absolute ms-n5 mt-xxl-n5' src={stars}  style={{width: '20%', top: '30rem', left: '-2rem', }}/> */}
        </Container>
      </div>
      <div className='grad-primary-to-body-bg' />
      <div className='bg-white pt-3 h-100'> 
        <Container>
          <Row className='mt-5'>
            <Col md={12} lg={6} className='d-flex justify-content-center align-items-center'>
              <img className='mw-100 shadow' src={inclumove_team} style={{borderRadius: "10px"}} alt='Time de desenvolvedores do IncluMove'/>
            </Col>
            <Col md={12} lg={6} className='d-flex flex-column px-3 md-px-5'>
              <h1 className='fw-bold title mt-exc-3 text-center text-md-start'> Sobre nós! </h1>
              <p>
                O nosso time de desenvolvedores é formado por três estudantes do terceiro ano de Desenvolvimento de Sistemas da ETEC Bento Quirino: 
                <span className='fw-semibold'> Henrique Professor, Rodrigo Scatolin e Samuel Augusto </span>.
                Apaixonados por desenvolvimento para a web, nós unimos esforços para concluir a tarefa do Hackteens. 
                <br /> <br />
                Pensamos muito a respeito do tema e decidimos criar uma aplicação que pudesse ajudar pessoas com deficiências a se exercitarem,
                visto que o bem-estar físico é essencial para a saúde mental e social de todos. Nossa meta é que a <span className='fw-semibold'> IncluMove </span> seja sem limitações, 
                por isso dedicamos grande parte do tempo para garantir a responsividade e acessibilidade do site.
                <br /> <br />
                Contamos com o apoio dos nossos professores de Programação Web e dos nossos colegas de classe, 
                que nos inspiraram para a criação deste projeto. Agradecemos a todos que nos ajudaram nessa jornada!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
};

export { About };
