import { Container, Nav, Button, Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { FaMoon } from "react-icons/fa6";
import { IoSunny, IoMenu } from "react-icons/io5";
import { logo } from '../../assets';

import { UseAppContext, UseThemeContext } from '../../hooks';

import { ButtonLanguage } from '../CommonUI';

const Header = () => {
  const { usuarioLog, setUsuarioLog } = UseAppContext();
  const { theme, switchTheme } = UseThemeContext();
  const [showMenu, setShowMenu] = useState(false);

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
    <Container fluid className='bg-primary'>
      <Container className='bg-primary'>
        <header 
          className='d-flex flex-wrap justify-content-center align-items-center py-3'

          >
          <a className='d-flex align-items-center mb-2 mb-md-0 me-2 me-lg-auto link-body-emphasis text-decoration-none gap-2' href="/">
            <img className='me-2 ms-md-3' height={56} src={logo} alt='Logo do IncluMove' />
            <span className='title fw-medium fs-1'>IncluMove</span>
          </a>
            <Nav
              activeKey={location.pathname}
              as='ul'
              className='justify-content-between d-none d-lg-flex rounded-5 py-2'
            >
              <Nav.Item as='li'>
                <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/' eventKey='/'>Página Inicial</Nav.Link>
              </Nav.Item>
              <div className="vr mx-2" />
              <Nav.Item as='li'>
                <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/about' eventKey='/about'>Sobre</Nav.Link>
              </Nav.Item>
              <div className="vr mx-2" />
              <Nav.Item as='li'>
                <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/faq' eventKey='/faq'>Perguntas Frequentes</Nav.Link>
              </Nav.Item>
            </Nav>
            <div className="d-flex align-items-center ms-auto gap-2">
              <a
                className='fs-5 link-body-emphasis header-link px-3 text-center d-flex align-items-center justify-content-center'
                href={usuarioLog ? '/user-area' : '/form/login'}
              >
                {usuarioLog ? 'Conta' : 'Login'}
              </a>
              <div className="d-flex align-items-center gap-2 mt-1">
                <div className="d-none d-md-block">
                  <ButtonLanguage />
                </div>
                <Button
                  variant="link"
                  className="p-2"
                  style={{ boxShadow: "none" }}
                  onClick={switchTheme}
                  aria-label="Alternar tema"
                >
                  {theme === 'dark'
                    ? <FaMoon size='2rem' color='white' />
                    : <IoSunny size='2rem' color='black' />
                  }
                </Button>
                {/* Menu hamburguer para mobile */}
                <Button
                  variant="link"
                  className="d-lg-none p-0 m-0"
                  style={{ boxShadow: "none" }}
                  onClick={() => setShowMenu(true)}
                  aria-label="Abrir menu"
                >
                  <IoMenu size="2rem" color='var(--bs-secondary)' />
                </Button>
              </div>
            </div>

          <Offcanvas show={showMenu} onHide={() => setShowMenu(false)} placement="end" className="bg-body">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img height={40} src={logo} alt='Logo do IncluMove' className="me-2" />
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

