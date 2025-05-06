import { Col, Container, Nav, Row } from "react-bootstrap";
import { ButtonBack, ProfilePicture } from "../../components";

const Home = () => {
  return(
      <Row>
        <Col xl={6} md={12} className="d-flex flex-column justify-content-center align-items-center">
          <div className="justify-content-start w-100 mt-5 ms-5">
            <ButtonBack previousPage={"/"} />
          </div>
          <ProfilePicture foto={"https://img.freepik.com/fotos-gratis/medico-com-os-bracos-cruzados-sobre-fundo-branco_1368-5790.jpg?semt=ais_hybrid&w=740"} />
          <h2 className="title text-center mt-2"> Olá, <span className="fw-bold"> Ricardo! </span> </h2>
          <h4 className="mt-n2 mb-4"> ricardo.junior@gmail.com </h4>
            <Nav defaultActiveKey='/' className="justify-content-center w-100" >
              <Nav.Item>
                <Nav.Link className='fs-6 link-body-emphasis' href='/'>Mais Profissionais</Nav.Link>
              </Nav.Item>
              <div className='vr'></div>
              <Nav.Item className="bg-tertiary rounded-4 mx-3">
                <Nav.Link className='fs-6 link-body-emphasis' href='/home' eventKey='link-1'>Editar Perfil</Nav.Link>
              </Nav.Item>
              <div className='vr'></div>
              <Nav.Item>
                <Nav.Link className='fs-6 link-body-emphasis' href='/form/login' eventKey='link-2'>Novo Treino</Nav.Link>
              </Nav.Item>
            </Nav>
          <Container>
            a
          </Container>
        </Col>
        <Col xl={6} md={12} className="bg-primary">
          a
        </Col>
      </Row>
  )
}

export { Home };  