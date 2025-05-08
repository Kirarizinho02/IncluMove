import { Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { amigos_disabled } from '../../assets';
import { ButtonBack } from '../ButtonBack';
import { UseAppContext } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUpForm = () => {
  const { setUsuarioParcial } = UseAppContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    genero: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const { nome, email, senha, confirmarSenha, genero } = form;

    if (!nome || !email || !senha || !confirmarSenha || !genero) {
      alert('Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    setUsuarioParcial({
      nome: form.nome,
      email: form.email,
      senha: form.senha,
      data_nascimento: form.dataNascimento,
      genero: form.genero,
    });

    navigate('/form/disabilities');
  };

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
            <h1 className='text-start title fw-semibold'>Cadastro</h1>
            <p className='mt-n2'>
              O compromisso da <span className='fw-semibold'>IncluMove</span> é com o usuário. Queremos acolher todos os corpos, com ou sem limitações, com uma plataforma de bem-estar físico adaptado.
            </p>

            <FloatingLabel controlId="floatingName" label="Nome Completo" className="mb-3">
              <Form.Control
                name="nome"
                placeholder="Nome Completo"
                value={form.nome}
                onChange={handleChange}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="nome.sobrenome@exemplo.com"
                value={form.email}
                onChange={handleChange}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-3">
              <Form.Control
                type="password"
                name="senha"
                placeholder="Senha"
                value={form.senha}
                onChange={handleChange}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingConfirmPassword" label="Confirme sua Senha" className="mb-3">
              <Form.Control
                type="password"
                name="confirmarSenha"
                placeholder="Confirme sua Senha"
                value={form.confirmarSenha}
                onChange={handleChange}
              />
            </FloatingLabel>

            <Form.Control
              id="startDate"
              name="dataNascimento"
              className="form-control p-3 mb-3"
              type="date"
              value={form.dataNascimento}
              onChange={handleChange}
            />

            <FloatingLabel controlId="floatingSelect" label="Gênero" className="mb-3">
              <Form.Select name="genero" value={form.genero} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Não Binário">Não Binário</option>
                <option value="Outro">Outro</option>
              </Form.Select>
            </FloatingLabel>

            <div className='d-flex flex-row-reverse'>
              <Button
                variant="tertiary"
                type="button"
                onClick={handleNext}
                className='w-50 mt-4 title fw-medium shadow'
              >
                Próximo
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
        <img src={amigos_disabled} className='w-100' alt="Ilustração de deficientes variados felizes" />
      </Col>
    </Row>
  );
};

export { SignUpForm };
