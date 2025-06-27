import { useState } from 'react';
import { Button, Container, Dropdown, ToggleButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ButtonLanguage, ProfilePicture, TooltipLink } from '../../';
import { logo } from '../../../assets';

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { UseAppContext, UseThemeContext } from '../../../hooks';

import { FaBars, FaMoon } from "react-icons/fa6";
import { IoHelpCircle, IoLogOut, IoLogOutOutline, IoSettings, IoSettingsOutline, IoSunny } from "react-icons/io5";

const HeaderUser = () => {
  const { logOut, handleShowAside } = UseAppContext();
  const { switchTheme, theme } = UseThemeContext();

  const { t } = useTranslation();
  
  const [isHover, setIsHover] = useState(false); 
  const [IsHoverLogOut, setIsHoverLogOut] = useState(false);


  return (
    <div>
      <Container fluid>
        <header className='d-flex flex-wrap justify-content-between align-items-center py-1 py-md-3 px-3 border-bottom' > 
          <div className='d-flex align-items-center link-body-emphasis text-decoration-none flex-column d-none d-md-flex'>
            <TooltipLink title={t('tooltips.home')} id='tl1' localizacao='bottom'>
              <a className='d-flex align-items-center link-body-emphasis text-decoration-none gap-3' href="/">
                <img height={40} src={logo} alt='Logo do IncluMove' />
                <span className='title fw-medium fs-5'>IncluMove</span>
              </a>
            </TooltipLink>
          </div>

          <Button variant='link' className="d-md-none py-3 btn link-body-emphasis" onClick={handleShowAside} style={{ border: 'none' }}>
            <FaBars size='2rem' />
          </Button>


          <div className='d-flex align-items-center gap-4'>
            <ButtonLanguage />

            <Dropdown className='mt-1'>
              <TooltipLink title={t('tooltips.settings')} id='tl2' localizacao='bottom'>
                <Dropdown.Toggle
                  className='logout-toggle'
                  as='span'
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  <span style={{ position: 'relative', display: 'inline-block', width: '2rem', height: '2rem' }}>
                    <motion.span
                      style={{ position: 'absolute', top: 0, left: 0 }}
                      animate={{ opacity: isHover ? 0 : 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <IoSettingsOutline size='2rem' alt='Botão de configuração' />
                    </motion.span>
                    <motion.span
                      style={{ position: 'absolute', top: 0, left: 0 }}
                      animate={{ opacity: isHover ? 1 : 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      <IoSettings size='2rem' alt='Botão de configuração' />
                    </motion.span>
                  </span>
                </Dropdown.Toggle>
              </TooltipLink>
              <Dropdown.Menu className='shadow'>
                <Dropdown.Item className='d-flex align-items-center gap-3 ps-4 py-2 cursor' value={theme} onClick={switchTheme}>
                  {theme === 'light' 
                    ? <FaMoon size='1.5rem' /> 
                    : <IoSunny size='1.5rem' />
                  }
                  <span className='title fw-medium fs-6'>
                    {theme === 'light' 
                      ? 'Tema Escuro' 
                      : 'Tema Claro'
                    }
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className='d-flex justify-content-start align-items-center gap-3 ps-4 py-2'>
                  <IoHelpCircle size='1.5rem' />
                  <span className='title fw-medium fs-6'>Ajuda</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mb-1'>
              <TooltipLink title={t('tooltips.profile')} id='tl3' localizacao='bottom'>
                <div className='p-1'>
                <Dropdown.Toggle as='span' className="logout-toggle" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                  <ProfilePicture size={40} alt='Botão de logout' />
                </Dropdown.Toggle>
                </div>
              </TooltipLink>

              <Dropdown.Menu className='shadow mt-3'>
                <Dropdown.Item 
                  className='d-flex justify-content-center align-items-center' 
                  onClick={logOut} 
                  onMouseEnter={() => setIsHoverLogOut(true)}
                  onMouseLeave={() => setIsHoverLogOut(false)}
                  >
                  <span style={{ position: 'relative', display: 'inline-block', width: '2rem', height: '2rem' }}>
                    <motion.span
                      style={{ position: 'absolute', top: 0, left: -20, gap: '2.5rem' }}
                      animate={{ opacity: IsHoverLogOut ? 0 : 1 }}
                      transition={{ duration: 0.1 }}
                      className='fs-5'
                    >
                      <IoLogOutOutline size='2rem' style={{marginInlineEnd: "0.5rem"}} className='mb-1'/>
                      Sair
                    </motion.span>
                    <motion.span
                      style={{ position: 'absolute', top: 0, left: -20 }}
                      animate={{ opacity: IsHoverLogOut ? 1 : 0 }}
                      transition={{ duration: 0.1 }}
                      className='fs-5'
                    >
                      <IoLogOut size='2rem' style={{marginInlineEnd: "0.5rem"}} className='mb-1'/>
                      Sair
                    </motion.span>
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>
      </Container>
    </div>
  );
}

export { HeaderUser };

