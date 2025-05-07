import { Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { amigos_disabled } from '../../assets';

import { ButtonBack } from '../ButtonBack';


const SignUpForm = () => {   
  return (
    <Row className='vh-100'>
      <Col xs={12} md={6} className='align-items-center bg-white ms-md-2 d-flex flex-column justify-content-between shadow'>

        <Row className='w-100 mt-4'>
          <div className='d-flex justify-content-start ms-3 mb-4'>
            <ButtonBack previousPage={"/"} />
          </div> 
        </Row>

        <Row className='w-100 mb-5 pb-5'>
          <div className='col-xl-8 col-xxl-8 w-lg-80 mx-auto'>
            <h1 className='text-start title fw-semibold'> Cadastro </h1>
            <p className='mt-n2'> O compromisso da <span className='fw-semibold'> IncluMove </span> é com o usuário. Queremos acolher todos os corpos, com ou sem limitações, com uma plataforma de bem-estar físico adaptado. </p>
            <FloatingLabel
              controlId="floatingName"
              label="Nome Completo"
              className="mb-3"
            >
              <Form.Control placeholder="Nome Completo" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="nome.sobrenome@exemplo.com" />
            </FloatingLabel>
            <FloatingLabel 
              controlId="floatingPassword" 
              label="Senha" 
              className='mb-3'
            >
              <Form.Control type="password" placeholder="Senha" />

            </FloatingLabel>

            <FloatingLabel 
              controlId="floatingConfirmPassword" 
              label="Confirme sua Senha" 
              className='mb-3'
            >
              <Form.Control type="password" placeholder="Confirme sua Senha" />
            </FloatingLabel>

            <input id="startDate" className="form-control p-3 mb-3" type="date" /> 

            <FloatingLabel controlId="floatingSelect" label="Gênero">
              <Form.Select>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
                <option value="3">Não Binário</option>
                <option value="4">Outro</option>
              </Form.Select>
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
                Já possui cadastro? <a href="/form/login" className='text-tertiary'>Entre na sua conta.</a>
            </p>
        </Row>
      </Col>

      <Col className='d-none d-md-flex justify-content-center align-items-center vh-100'>
        <img src={amigos_disabled} className='w-100' />
      </Col>
    </Row>
  )
}

export { SignUpForm };

