import { Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { UseAppContext } from '../../hooks';
import { mulher_perna_bionica } from '../../assets';

import { ButtonBack } from '../ButtonBack';
import { useState } from 'react';

const LoginForm = () => {   
  const { loginUsuario, setUsuarioLog } = UseAppContext();
  const [erro, setErro] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const user = await loginUsuario({ email, senha });
    if (user) {
      localStorage.setItem('usuarioLogado', JSON.stringify(user));
      setUsuarioLog(user);
      window.location.href = '/home'; 
    } else {
      setErro("Usuário ou senha inválidos.");
    }
  } catch (error) {
    setErro(error.message);
  }
};
  return (
    <Row className='vh-100'>
      <Col xs={12} md={6} className='align-items-center bg-white ms-md-2 d-flex flex-column justify-content-between shadow'>

        <Row className='w-100 mt-4'>
          <div className='d-flex justify-content-start ms-3'>
            <ButtonBack previousPage={"/"} />
          </div> 
        </Row>

        
          <Row className='w-100 mb-5 pb-5 mt-5'>
          <form onSubmit={handleSubmit}>
            <div className='col-xl-8 col-xxl-6 w-lg-80 mx-auto'>
              <h1 className='text-start title fw-semibold'> Login </h1>
              <p> Bem-vindo de volta! Estamos muito felizes de vê-lo aqui novamente. </p>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                value={email}
                className="mb-3"
                onChange={(e) => setEmail(e.target.value)}
              >
                <Form.Control type="email" placeholder="nome.sobrenome@exemplo.com" />
              </FloatingLabel>
              <FloatingLabel 
                controlId="floatingPassword" 
                label="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              >
                <Form.Control type="password" placeholder="Senha" />
              </FloatingLabel>
              
              {erro && <p className="text-danger mt-2 mb-n1 text-end">{erro}</p>}

              <div className='d-flex flex-row-reverse'>
                <Button variant="tertiary" type="submit" className='w-50 mt-4 title fw-medium shadow'>
                    Entrar
                </Button>
              </div>
            </div>
            </form>
          </Row>


        <Row className='w-100 mb-4'>
            <p className='text-center w-100'>
                Não possui cadastro? <a href="/form/signup" className='text-tertiary'>Crie uma conta.</a>
            </p>
        </Row>
      </Col>

      <Col className='d-none d-md-flex justify-content-center align-items-center vh-100'>
        <img src={mulher_perna_bionica} className='w-100' alt='Ilustração de mulher confiante com perna biônica'/>
      </Col>
    </Row>
  )
}

export { LoginForm };