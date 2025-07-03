import { Button, Col, FloatingLabel, Row, Alert, Form } from 'react-bootstrap';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonBack } from '../../';
import { inclusive_sports } from '../../../assets';
import { UseAppContext, UseResize } from '../../../hooks';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
import { motion, } from "motion/react"
import { FaArrowRight } from 'react-icons/fa6';

const SignUpForm = () => {
    const minHeightResize = UseResize();
  const { t } = useTranslation();

  const { setUsuarioParcial } = UseAppContext();
  const navigate = useNavigate();

  const [ctaHovered, setCtaHovered] = useState(false);

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    genero: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    const { nome, email, senha, confirmarSenha, dataNascimento, genero } = form;

    if (
      !nome.trim() ||
      !email.trim() ||
      !senha.trim() ||
      !confirmarSenha.trim() ||
      !dataNascimento.trim() ||
      !genero.trim()
    ) {
      setStatus({ type: "error", message: t('signup.errors.required') });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: t('signup.errors.invalidEmail') });
      return;
    }

    if (senha.length < 6) {
      setStatus({ type: "error", message: t('signup.errors.passwordLength') });
      return;
    }

    if (senha !== confirmarSenha) {
      setStatus({ type: "error", message: t('signup.errors.passwordMismatch') });
      return;
    }

    setStatus(null);

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
    <Row className='h-100 m-0 p-0'>
      <Col
        md={12}
        lg={6}
        className='align-items-center bg-body ms-lg-3 my-lg-3 d-flex flex-column justify-content-between shadow rounded-lg-4'
        style={{ minHeight: minHeightResize}}
      >
        <Row className='w-100 mt-4'>
          <div className='d-flex justify-content-start ms-2 mb-4'>
            <ButtonBack previousPage={"/"} />
          </div>
        </Row>

        <Row className='w-100 mb-5 pb-5'>
          <div className='col-xl-8 col-xxl-8 w-lg-90 mx-auto'>
            <h1 className='text-start title fw-semibold'>{t('signup.title')}</h1>
            <p className='mt-n2'>
              {t('signup.description')}
            </p>

            {status && status.type === "error" && (
              <Alert variant="danger" className="mb-3">
                {status.message}
              </Alert>
            )}

            <FloatingLabel controlId="floatingName" label={t('signup.form.name')} className="mb-3">
              <Form.Control
                name="nome"
                placeholder={t('signup.form.name')}
                value={form.nome}
                onChange={handleChange}
                className='rounded-4'
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label={t('signup.form.email')} className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder={t('signup.form.email')}
                value={form.email}
                onChange={handleChange}
                className='rounded-4'
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label={t('signup.form.password')} className="mb-3">
              <Form.Control
                type="password"
                name="senha"
                placeholder={t('signup.form.password')}
                value={form.senha}
                onChange={handleChange}
                className='rounded-4'
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingConfirmPassword" label={t('signup.form.confirmPassword')} className="mb-3">
              <Form.Control
                type="password"
                name="confirmarSenha"
                placeholder={t('signup.form.confirmPassword')}
                value={form.confirmarSenha}
                onChange={handleChange}
                className='rounded-4'
              />
            </FloatingLabel>

            <Form.Control
              id="startDate"
              name="dataNascimento"
              className="form-control p-3 mb-3 rounded-4"
              type="date"
              value={form.dataNascimento}
              onChange={handleChange}
            />

            <FloatingLabel controlId="floatingSelect" label={t('signup.form.gender')} className="mb-3">
              <Form.Select name="genero" value={form.genero} onChange={handleChange} className='rounded-4'>
                <option value="">{t('signup.form.genderOptions.select')}</option>
                <option value="Masculino">{t('signup.form.genderOptions.male')}</option>
                <option value="Feminino">{t('signup.form.genderOptions.female')}</option>
                <option value="Não Binário">{t('signup.form.genderOptions.nonBinary')}</option>
                <option value="Outro">{t('signup.form.genderOptions.other')}</option>
              </Form.Select>
            </FloatingLabel>

            <div className='d-flex flex-row-reverse'>
              <Button
                type="submit"
                className='w-50 mt-4 title fw-medium shadow cta-gradient-btn text-body rounded-4'
                onClick={handleNext}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                onFocus={() => setCtaHovered(true)}
                onBlur={() => setCtaHovered(false)}
              >
                <span className='title fw-bold'>{t('signup.form.submit')}</span>
                <motion.span
                  animate={{ x: ctaHovered ? 10 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ display: "inline-block" }}
                >
                  <FaArrowRight size="1rem" className="ms-2 mb-1" />
                </motion.span>
              </Button>
            </div>
          </div>
        </Row>

        <Row className='w-100 mb-4'>
          <p className='text-center w-100'>
            {t('signup.alreadyHaveAccount')} <a href="/form/login" className='signuplink'>{t('signup.loginLink')}</a>
          </p>
        </Row>
      </Col>


      <Col className='d-none d-lg-flex justify-content-center align-items-center'>
        <img src={inclusive_sports} className='w-100' alt={t('signup.imgAlt')} />
      </Col>
    </Row>
  );
};

export { SignUpForm };