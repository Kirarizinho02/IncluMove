import { useState } from "react";
import { Offcanvas, Nav, Button, Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { UseAppContext, UseThemeContext } from "../../../../hooks";

import { FaMoon, FaUser } from "react-icons/fa";
import { IoLogOut, IoLogOutOutline, IoSunny } from "react-icons/io5";
import { logo_inset } from "../../../../assets";

import { AsideItems } from "../AsideItems/AsideItems";

import { ButtonLanguage, ProfilePicture, TooltipLink } from "../../..";

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { FiMoreVertical } from "react-icons/fi";

const AsideOffCanvas = ({ show, onHide }) => {
  const { t } = useTranslation();
  const { theme, switchTheme, logOut } = UseThemeContext();
  const { usuarioLog } = UseAppContext();

  const [IsHoverLogOut, setIsHoverLogOut] = useState(false);

  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      placement="start"
      className="bg-body"
      style={{
        maxWidth: "100vw",
        minWidth: 0,
        overflowX: "hidden",
        overflowY: "auto"
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img height={45} src={logo_inset} alt={t('nav.logoAlt')} className="me-2 ms-2" />
          <span className='title fw-medium fs-2'>Inclu</span>
          <span className='title fw-bold fs-2'>Move</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column h-100 justify-content-between">
        <div>
          <Nav activeKey={location.pathname} className="flex-column">
            <AsideItems />
          </Nav>
        </div>
        <div className="d-flex flex-column gap-2 mt-4 align-items-stretch">
          <Button
            variant="outline-info"
            className="w-100 d-flex align-items-center justify-content-center gap-2"
            onClick={switchTheme}
            aria-label="Alternar tema"
          >
            {theme === 'dark'
              ? <FaMoon size='1.3rem' />
              : <IoSunny size='1.3rem' />
            }
            <span className="fw-medium">
              {theme === 'dark' ? t('nav.lightTheme') : t('nav.darkTheme')}
            </span>
          </Button>
          <div className='w-100 d-flex justify-content-center'>
            <ButtonLanguage className="w-100" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 mt-3">
            <div className="d-flex ">
              <ProfilePicture size={40} />
              <div className="ms-3 d-flex pb-1 flex-column">
                <span className="fw-semibold ">
                  {usuarioLog ? usuarioLog.nome : "Usuário Desconhecido"}
                </span>
                <span className="text-body-secondary d-block" style={{ fontSize: 13 }}>
                  {usuarioLog ? usuarioLog.email : "Email Desconhecido"}
                </span>
              </div>
            </div>
            <Dropdown className='mb-1'>
              <TooltipLink title={t('tooltips.profile')} id='tl3' localizacao='bottom'>
                <div className='p-1'>
                  <Dropdown.Toggle as='span' className="logout-toggle" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    <FiMoreVertical />
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
                      <IoLogOutOutline size='2rem' style={{ marginInlineEnd: "0.5rem" }} className='mb-1' />
                      Sair
                    </motion.span>
                    <motion.span
                      style={{ position: 'absolute', top: 0, left: -20 }}
                      animate={{ opacity: IsHoverLogOut ? 1 : 0 }}
                      transition={{ duration: 0.1 }}
                      className='fs-5'
                    >
                      <IoLogOut size='2rem' style={{ marginInlineEnd: "0.5rem" }} className='mb-1' />
                      Sair
                    </motion.span>
                  </span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export { AsideOffCanvas };