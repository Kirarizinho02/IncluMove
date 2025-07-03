import { Button, Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import { logo_inset, mulher_perna_bionica } from '../../../assets';
import { UseAppContext, UseResize } from '../../../hooks';

import { useState } from 'react';
import { ButtonBack } from '../../';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const minHeightResize = UseResize();

  const { t } = useTranslation();

  const { loginUsuario, setUsuarioLog } = UseAppContext();
  const [erro, setErro] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !senha.trim()) {
      setErro(t('login.errors.required'));
      return;
    }
    try {
      const user = await loginUsuario({ email, senha });
      if (user) {
        localStorage.setItem('usuarioLogado', JSON.stringify(user));
        setUsuarioLog(user);
        window.location.href = '/user-area';
      } else {
        setErro(t('login.errors.invalid'));
      }
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <Row className='h-100 m-0 p-0'>
      <Col
        md={12}
        lg={6}
        className='align-items-center bg-body ms-lg-3 my-lg-3 d-flex flex-column justify-content-between shadow rounded-lg-4'
        style={{ minHeight: minHeightResize }}
      >

        <Row className='w-100 mt-4'>
          <div className='d-flex justify-content-start ms-3'>
            <a className='mt-md-2 d-flex align-items-center mb-2 mb-md-0 me-auto link-body-emphasis text-decoration-none gap-2' href="/">
              <img className='ms-3 pb-1' height={56} src={logo_inset} alt={t('nav.logoAlt')} />
              <span className='title fw-medium fs-2 inclumove-title'>Inclu</span> <span className='title fw-bold fs-2 inclumove-title ms-n2'>Move</span>
            </a>
          </div>
        </Row>

        <Row className='w-100 mb-5 pb-5 mt-5'>
          <form onSubmit={handleSubmit}>
            <div className='col-xl-8 col-xxl-6 w-lg-90 mx-auto'>
              <h1 className='text-start title fw-semibold'>{t('login.title')}</h1>
              <p>{t('login.subtitle')}</p>
              <FloatingLabel
                controlId="floatingInput"
                label={t('login.form.email')}
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder={t('login.form.emailPlaceholder')}
                  className='rounded-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label={t('login.form.password')}
              >
                <Form.Control
                  type="password"
                  placeholder={t('login.form.passwordPlaceholder')}
                  className='rounded-4'
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </FloatingLabel>

              {erro && <p className="text-danger mt-2 mb-n1 text-end">{erro}</p>}

              <div className='d-flex flex-row-reverse'>
                <Button type="submit" className='w-50 mt-4 title fw-medium shadow cta-gradient-btn text-body rounded-4' >
                  {t('login.form.submit')}
                </Button>
              </div>
            </div>
          </form>
        </Row>

        <Row className='w-100 mb-4'>
          <p className='text-center w-100'>
            {t('login.noAccount')} <a href="/form/signup" className='signuplink'>{t('login.createAccount')}</a>
          </p>
        </Row>
      </Col>

      <Col className='d-none d-lg-flex justify-content-center align-items-center'>
        <img src={mulher_perna_bionica} className='w-100' alt={t('login.imgAlt')} />
      </Col>
    </Row>
  )
}

export { LoginForm };