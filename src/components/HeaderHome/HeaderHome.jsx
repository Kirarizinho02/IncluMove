import { useState } from 'react';

import { Container, Dropdown, ToggleButton } from 'react-bootstrap';

import { ProfilePicture } from '../';

import { dark_mode, light_mode, logo, settings, } from '../../assets';

const HeaderHome = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className='bg-white'>
      <Container fluid>
        <header className='d-flex flex-wrap justify-content-between align-items-center py-3 px-3 border-bottom'>
          <a className='d-flex align-items-center link-body-emphasis text-decoration-none' href="/">
            <img className='me-3' height={40} src={logo} alt='Logo do IncluMove' />
            <span className='title fw-medium fs-5'>IncluMove</span>
          </a>
          
          <div className='d-flex align-items-center gap-4'>
            <Dropdown> 
              <Dropdown.Toggle as='span'>
                <img height={30} src={settings} alt='Botão de configuração' />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={ToggleButton} className='d-flex justify-content-center align-items-center bg-white gap-2' value={theme} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                  <img src={theme === 'light' ? light_mode : dark_mode} height={30}/>
                  <span className='title fw-medium fs-5'>Tema</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <ProfilePicture size={40}/>
          </div>
        </header>
      </Container>
    </div>
  );
}

export { HeaderHome };

