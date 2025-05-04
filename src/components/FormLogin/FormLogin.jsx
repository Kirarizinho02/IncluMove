import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Button, Col, Container, Row } from 'react-bootstrap';

import mulherPernaBionica from '../../assets/mulher-perna-bionica.svg';
import logo from '../../assets/logo.svg';

import { ButtonBack } from '../ButtonBack';

const Formlogin = () => {   
    return (
        <Container fluid className='bg-primary'>
            <Row>
                <Col xs={12} md={6} className='align-items-center bg-light vh-100 ms-md-2 d-flex flex-column justify-content-between shadow'>

                    <Row className='w-100 mt-4'>
                        <div className='d-flex justify-content-start'>
                            <ButtonBack previousPage={"/"} />
                        </div>
                        <div className='d-none d-md-flex flex-row justify-content-center align-items-center'>
                            <img src={logo} alt="Logo" className='mw-100'/>
                            <h1 className='montserrat-medium ms-3 mt-3'> IncluMove </h1>
                        </div>
                    </Row>

                    <Row className='w-100'>
                        <div className='w-50 w-md-75 mx-auto'>
                            <h1 className='text-start montserrat-bold'> Login </h1>
                            <p className='hind-regular'> Bem-vindo de volta! Estamos muito felizes de vê-lo aqui novamente. </p>
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
                                <Button variant="tertiary" type="submit" className='w-50 mt-4 montserrat-medium shadow'>
                                    Entrar
                                </Button>
                            </div>
                        </div>
                    </Row>

                    <Row className='w-100 mb-4'>
                        <p className='text-center w-100 hind-regular'>
                            Não possui cadastro? <a href="#" className='text-tertiary'>Crie uma conta.</a>
                        </p>
                    </Row>
                </Col>

                <Col className='d-none d-md-flex justify-content-center align-items-center vh-100'>
                    <img src={mulherPernaBionica} className='w-75' />
                </Col>
            </Row>
        </Container>
    )
}

export { Formlogin };