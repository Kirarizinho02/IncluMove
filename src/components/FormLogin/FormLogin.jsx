import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Col, Container, Row } from 'react-bootstrap';

const Formlogin = () => {   
    return (
        <Container fluid className='bg-primary'>
            <Row>
                <Col className='bg-light vh-100 ms-3 px-5 align-center justify-center'>
                <h1 className='text-start montserrat-bold'> Login </h1>
                <p className='hind-regular'> Bem-vindo de volta! Estamos muito felizes de vê-lo aqui novamente. </p>
                    <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                    >
                    <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
                <Col>
                    a
                </Col>
            </Row>
        </Container>
    )
}

export { Formlogin };