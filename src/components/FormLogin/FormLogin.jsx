import { Button, Col, Container, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { mulher_perna_bionica } from '../../assets';

import { ButtonBack } from '../ButtonBack';

const Formlogin = () => {   
  return (
    <Container fluid className='vh-100 bg-primary overflow-hidden'>
      <Row>
        <Col xs={12} md={6} className='align-items-center bg-white vh-100 ms-md-2 d-flex flex-column justify-content-between shadow'>

          <Row className='w-100 mt-4'>
            <div className='d-flex justify-content-start ms-3'>
              <ButtonBack previousPage={"/"} />
            </div> 
          </Row>

          <Row className='w-100 mb-5 pb-5'>
            <div className='col-xl-8 col-xxl-6 w-lg-80 mx-auto'>
              <h1 className='text-start title fw-semibold'> Login </h1>
              <p> Bem-vindo de volta! Estamos muito felizes de vê-lo aqui novamente. </p>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="nome.sobrenome@exemplo.com" />
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
          </Row>

          <Row className='w-100 mb-4'>
              <p className='text-center w-100'>
                  Não possui cadastro? <a href="#" className='text-tertiary'>Crie uma conta.</a>
              </p>
          </Row>
        </Col>

        <Col className='d-none d-md-flex justify-content-center align-items-center vh-100'>
          <img src={mulher_perna_bionica} className='w-75' />
        </Col>
      </Row>
    </Container>
  )
}

export { Formlogin };
