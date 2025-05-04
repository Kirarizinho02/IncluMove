import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Col, Container, Row } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

const Formlogin = () => {   
  return (
    <Container fluid className='bg-primary'>
      <Row>

        <Col xs={12} md={6} className='align-items-center bg-light vh-100 ms-md-2 d-flex justify-content-center shadow'>

          <div className='w-50'>
            <div className='d-flex flex-row justify-content-center align-items-center mb-5 me-5'>
                <img src={logo} alt="Logo" className='mb-4 mw-100'/>
              <h1 className='title fw-medium ps-3 mb-4'> IncluMove </h1>
            </div>
            <h3 className='text-start title fw-semibold'> Login </h3>
            <p> Bem-vindo de volta! Estamos muito felizes de vê-lo aqui novamente. </p>
              <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="mb-3"
              >
              <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Senha">
              <Form.Control type="password" placeholder="Senha" />
              </FloatingLabel>
              <div className='d-flex flex-row-reverse'>
                <Button variant="tertiary" type="submit" className='w-50 mt-4 title fw-medium shadow'>
                Entrar
                </Button>
              </div>
          </div>
        </Col>
        <Col className='d-none d-md-flex justify-content-center align-items-center vh-100'>
            a
        </Col>
      </Row>
    </Container>
  )
}

export { Formlogin };