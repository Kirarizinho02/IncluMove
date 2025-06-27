import { Container, Nav, ToggleButton } from 'react-bootstrap';

import { logo } from '../../assets';
import { UseAppContext, UseThemeContext } from '../../hooks';
import { useEffect } from 'react';

import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const Header = () => {
  const { usuarioLog, setUsuarioLog } = UseAppContext();
  const { theme, switchTheme } = UseThemeContext();

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
    <Container>
      <header className='d-flex flex-wrap justify-content-center align-items-center py-3'>
        <a className='d-flex align-items-center mb-3 mb-md-0 me-2 me-lg-auto link-body-emphasis text-decoration-none' href="/">
          <img className='me-3 ms-md-3' height={70} src={logo} alt='Logo do IncluMove' />
          <span className='title fw-medium fs-1'>IncluMove</span>
        </a>
        <span className='p-2 mx-1 header-theme-toggle' value={theme} onClick={switchTheme}>
          {theme === 'dark' 
            ? <FaMoon size='2rem' /> 
            : <IoSunny size='2rem' />
          }
        </span>
        <Nav activeKey={location.pathname} as='ul' className='position-relative'>
          <Nav.Item as='li' className='position-relative z-3 d-block'>
            <Nav.Link className='fs-3 link-body-emphasis header-link' href='/' eventKey='/'>Página Inicial</Nav.Link>
          </Nav.Item>
          <div className='vr'></div>
          <Nav.Item as='li' className='position-relative z-3 d-block'>
            <Nav.Link className='fs-3 link-body-emphasis header-link' href='/about' eventKey='/about'>Sobre</Nav.Link>
          </Nav.Item>
          <div className='vr'></div>
          <Nav.Item as='li' className='position-relative z-3 d-block'>
            <Nav.Link
              className='fs-3 link-body-emphasis header-link'
              href={usuarioLog ? '/user-area' : '/form/login'}
            >
              {usuarioLog ? 'Conta' : 'Login'}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </Container>
  )
}

export { Header };

