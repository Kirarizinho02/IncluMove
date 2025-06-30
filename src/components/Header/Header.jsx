import { Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { FaMoon } from "react-icons/fa6";
import { IoSunny, IoMenu } from "react-icons/io5";
import { logo_inset } from '../../assets';

import { UseAppContext, UseThemeContext } from '../../hooks';

import { ButtonLanguage } from '../CommonUI';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { usuarioLog, setUsuarioLog } = UseAppContext();
  const { theme, switchTheme } = UseThemeContext();
  const [showMenu, setShowMenu] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    let usuarioSalvo = localStorage.getItem('usuarioLogado');
    if (usuarioSalvo && usuarioSalvo !== "undefined") {
      try {
        usuarioSalvo = JSON.parse(usuarioSalvo);
      } catch (e) {
        usuarioSalvo = null;
        localStorage.removeItem('usuarioLogado');
        console.error("erro:", e);
      }
    } else {
      usuarioSalvo = null;
    }

    setUsuarioLog(usuarioSalvo);
  }, [setUsuarioLog]);

  return (
    <Container fluid className='bg-primary pt-4 pb-2'>
      <Container 
        className='bg-body rounded-5 shadow-sm' 
      >
        <header
          className='d-flex flex-wrap justify-content-center align-items-center py-3'
        >
          <a className='mt-md-2 d-flex align-items-center mb-2 mb-md-0 me-auto link-body-emphasis text-decoration-none gap-2' href="/">
            <img className='me-2 ms-3 pb-1' height={56} src={logo_inset} alt={t('nav.logoAlt')} />
            <span className='title fw-medium fs-2 inclumove-title'>Inclu</span> <span className='title fw-bold fs-2 inclumove-title ms-n2'>Move</span>
          </a>
          <Nav
            activeKey={location.pathname}
            as='ul'
            className='justify-content-between d-none d-xl-flex rounded-5 py-2 me-auto'
          >
            <Nav.Item as='li'>
              <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/' eventKey='/'>{t('nav.home')}</Nav.Link>
            </Nav.Item>
            <div className="vr mx-2" />
            <Nav.Item as='li'>
              <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/about' eventKey='/about'>{t('nav.about')}</Nav.Link>
            </Nav.Item>
            <div className="vr mx-2" />
            <Nav.Item as='li'>
              <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/faq' eventKey='/faq'>{t('nav.faq')}</Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex align-items-center gap-2">

            <div className="d-flex align-items-center gap-2 mt-1">
              <div className="d-none d-md-block">
                <ButtonLanguage />
              </div>
              <Button
                variant="link"
                className="p-2 header-theme-toggle"
                style={{ boxShadow: "none" }}
                onClick={switchTheme}
                aria-label="Alternar tema"
              >
                {theme === 'dark'
                  ? <FaMoon size='2rem' color='white' />
                  : <IoSunny size='2rem' color='black' />
                }
              </Button>
              <Button
                variant="link"
                className="d-xl-none p-0 m-0"
                style={{ boxShadow: "none" }}
                onClick={() => setShowMenu(true)}
                aria-label="Abrir menu"
              >
                <IoMenu size="2rem" color='var(--bs-secondary)' />
              </Button>
            </div>
            <a
              className='d-none d-xl-block fs-5 link-body-emphasis header-link px-3 text-center d-flex align-items-center justify-content-center ms-5 py-2'
              href={usuarioLog ? '/user-area' : '/form/login'}
            >
              {usuarioLog ? 'Conta' : 'Login'}
            </a>
          </div>

          <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end" className="bg-body">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img height={40} src={logo_inset} alt='Logo do IncluMove' className="me-2" />
                <span className='title fw-medium fs-5'>IncluMove</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav activeKey={location.pathname} className="flex-column">
                <Nav.Link className='fs-5 link-body-emphasis header-link py-2' href='/' eventKey='/'>Página Inicial</Nav.Link>
                <Nav.Link className='fs-5 link-body-emphasis header-link py-2' href='/about' eventKey='/about'>Sobre</Nav.Link>
                <Nav.Link
                  className='fs-5 link-body-emphasis header-link py-2'
                  href={usuarioLog ? '/user-area' : '/form/login'}
                >
                  {usuarioLog ? 'Conta' : 'Login'}
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </header>
      </Container>
    </Container>
  )
}

export { Header };

