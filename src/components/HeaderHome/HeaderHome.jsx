import { useState } from 'react';

import { Button, Container, Dropdown, ToggleButton } from 'react-bootstrap';

import { ProfilePicture } from '../';

import { logo, settings } from '../../assets';
import { UseAppContext } from '../../hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faDoorOpen, faMoon, faQuestionCircle, faSun } from '@fortawesome/free-solid-svg-icons';

const HeaderHome = () => {
  const { logOut, handleShowAside } = UseAppContext();
  const [theme, setTheme] = useState('light');

  return (
    <div className='bg-white'>
      <Container fluid>
        <header className='d-flex flex-wrap justify-content-between align-items-center pt-2 pb-1 px-3 border-bottom'>
          <a className='d-flex align-items-center link-body-emphasis text-decoration-none flex-column' href="/">
            <img height={40} src={logo} alt='Logo do IncluMove' />
            <span className='title fw-medium fs-5'>IncluMove</span>
          </a>
        <Button className="d-xl-none bg-white" onClick={handleShowAside} style={{ border: 'none' }}>
            <FontAwesomeIcon icon={faBars} size='2x' />
        </Button>
          
          <div className='d-flex align-items-center gap-4'>
            <Dropdown> 
              <Dropdown.Toggle as='span' style={{cursor: 'pointer' }}>
                <img height={30} src={settings} alt='Botão de configuração' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={ToggleButton} className='d-flex align-items-center bg-white gap-4 px-4 py-2 cursor' value={theme} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                  {theme === 'light' ? <FontAwesomeIcon icon={faMoon} size='xl' /> : <FontAwesomeIcon icon={faSun} size='xl' />}
                  <span className='title fw-medium fs-5'>{theme === 'light' ? 'Tema Escuro' : 'Tema Claro'}</span>
                </Dropdown.Item>
                <Dropdown.Item className='d-flex justify-content-start align-items-center bg-white gap-4 px-4 py-2'>
                  <FontAwesomeIcon icon={faQuestionCircle} size='lg' />
                  <span className='title fw-medium fs-5'>Ajuda</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle as='span' className="logout-toggle" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              <ProfilePicture size={40} alt='Botão de logout' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className='d-flex justify-content-center align-items-center bg-white gap-3 px-4 py-2' onClick={logOut}>
                  <FontAwesomeIcon icon={faDoorOpen} size='lg' />
                  <span className='title fw-medium fs-5'>Sair</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      </Container>
    </div>
  );
}

export { HeaderHome };

