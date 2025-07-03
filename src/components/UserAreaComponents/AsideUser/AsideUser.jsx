import { useState } from "react";
import { Container, Modal, Nav } from "react-bootstrap";
import { UseAppContext, UseThemeContext } from "../../../hooks";

import { ProfilePicture, TooltipLink } from "../..";

import { FaMoon } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { FiMoreVertical } from "react-icons/fi";

import { logo_inset } from "../../../assets";

import { useTranslation } from "react-i18next";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { AsideItems } from "./AsideItems";

const AsideUser = () => {
  const { t } = useTranslation();

  const { theme, switchTheme } = UseThemeContext();
  const { usuarioLog, handleChangeLanguage, currentLanguage, handleResponsiveExpanded, expanded } = UseAppContext();

  const languages = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];  

  const [showLangModal, setShowLangModal] = useState(false);

  return (
    <>
      <Container className="overflow-x-hidden p-0 m-0 h-100">
        <aside
          className="bg-body w-100 shadow border-end border-secondary flex-column d-flex"
          style={{
            width: expanded ? 240 : 64,
            minWidth: expanded ? 240 : 64,
            maxWidth: expanded ? 240 : 64,
            minHeight: "100vh",
            height: "100vh",
            transition: "all 0.4s",
            overflow: "hidden",
          }}
        >
          <Nav className="d-flex justify-content-between flex-column h-100" activeKey={location.pathname}>
            <div className="d-flex p-3 justify-content-between align-items-center">
              <TooltipLink title={t('tooltips.home')} id="tl1" localizacao="right">
                <a
                  className="d-flex align-items-center link-body-emphasis text-decoration-none gap-2 overflow-hidden ps-2"
                  href="/"
                  style={{ width: expanded ? '100%' : '0' }}
                >
                  <img height={40} src={logo_inset} alt={t('nav.logoAlt')}
                    style={{
                      transition: "opacity 0.5s",
                      opacity: expanded ? 1 : 0,
                    }}
                  />
                  <motion.span className='title fw-medium fs-5'
                    animate={{
                      opacity: expanded ? 1 : 0,
                      x: expanded ? 0 : -16,
                      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                    }}
                  >
                    Inclu
                  </motion.span>
                  <motion.span className='title fw-bold fs-5 ms-n2'
                    animate={{
                      opacity: expanded ? 1 : 0,
                      x: expanded ? 0 : -16,
                      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                    }}
                  >
                    Move
                  </motion.span>
                </a>
              </TooltipLink>
              {expanded ? (
                <LuChevronFirst
                  className="text-body-secondary rounded-3 bg-secondary me-2"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                  onClick={handleResponsiveExpanded}
                />
              ) : (
                <LuChevronLast
                  className="text-body-secondary rounded-3 bg-secondary"
                  size="2rem"
                  style={{ cursor: "pointer", marginRight: "3.7rem" }}
                  onClick={handleResponsiveExpanded}
                />
              )}
            </div>

            <AsideItems />

            <section className="ps-2">
              <div
                className="d-flex align-items-center fs-6 w-100 ps-3"
                style={{
                  transition: "all 0.4s",
                  cursor: "pointer",
                  marginLeft: "-0.05rem"
                }}
                onClick={() => setShowLangModal(true)}
              >
                <FaGlobe className="ms-1" size="1.2rem" />
                <motion.div
                  className="align-items-center ms-3 overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: expanded ? 1 : 0,
                    x: expanded ? 0 : -16,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                  }}
                  style={{
                    whiteSpace: "nowrap",
                    display: expanded ? "inline-block" : "none",
                  }}
                >
                  <span>
                    {languages.find(l => l.code === currentLanguage)?.label}
                  </span>
                </motion.div>
              </div>

              <Modal show={showLangModal} onHide={() => setShowLangModal(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title className="title">
                    {t('nav.langModal.title')}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p className="mb-3" style={{ fontSize: 15 }}>
                    {t('nav.langModal.desc')}
                  </p>
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`btn w-100 mb-2 text-start${lang.code === currentLanguage ? " btn-tertiary" : " btn-outline-tertiary"}`}
                      onClick={() => {
                        handleChangeLanguage(lang.code);
                        setShowLangModal(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </Modal.Body>
              </Modal>
              <div className="d-flex align-items-center gap-2">

                <div
                  variant="link"
                  className="p-3 header-theme-toggle"
                  style={{ boxShadow: "none", marginLeft: "0.1rem" }}
                  onClick={switchTheme}
                  aria-label="Alternar tema"
                >
                  {theme === 'dark'
                    ? <FaMoon size='1.3rem' color='white' className="mb-1" />
                    : <IoSunny size='1.3rem' color='black' className="mb-1" />
                  }
                  <motion.div
                    className="align-items-center ms-3 overflow-hidden"
                    initial={false}
                    animate={{
                      opacity: expanded ? 1 : 0,
                      x: expanded ? 0 : -16,
                      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                    }}
                    style={{
                      whiteSpace: "nowrap",
                      display: expanded ? "inline-flex" : "none",
                    }}
                  >
                    {theme === 'dark' ? t('nav.darkTheme') : t('nav.lightTheme')}
                  </motion.div>
                </div>
              </div>

              <div className="d-flex border-top p-3 align-items-center" style={{ width: expanded ? "100%" : "63px" }}>
                <div style={{ marginLeft: expanded ? "0.1rem" : "-0.45rem" }}>
                  <ProfilePicture size={40} />
                </div>
                <div
                  className="d-flex justify-content-between align-items-center overflow-hidden pe-1"
                  style={{
                    width: expanded ? 160 : 0,
                    opacity: expanded ? 1 : 0,
                    marginLeft: expanded ? "0.75rem" : 0,
                    transition: "all 0.5s",
                  }}
                >
                  <div>
                    <span className="fw-semibold">
                      {usuarioLog ? usuarioLog.nome : "Usuário Desconhecido"}
                    </span>
                    <span className="text-body-secondary d-block" style={{ fontSize: 13 }}>
                      {usuarioLog ? usuarioLog.email : "Email Desconhecido"}
                    </span>
                  </div>
                  <FiMoreVertical size="1.5rem" className="h-100" />
                </div>

              </div>
            </section>
          </Nav>
        </aside>
      </Container>
    </>
  );
}

export { AsideUser };