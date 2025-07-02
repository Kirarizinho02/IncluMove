import { useEffect, useState } from "react";
import { Button, Container, Nav, Offcanvas } from "react-bootstrap";
import { UseAppContext, UseThemeContext } from "../../../hooks";

import { ButtonLanguage, ProfilePicture, TooltipLink } from "../..";

import { FaMoon, FaUserCircle } from "react-icons/fa";
import { FaDumbbell, FaPeopleGroup } from "react-icons/fa6";

import { logo, logo_inset } from "../../../assets";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";

import { FiMoreVertical } from "react-icons/fi";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { IoSunny } from "react-icons/io5";

const AsideUser = () => {
  const { showAside, handleCloseAside, getIconColor, usuarioLog } = UseAppContext();

  const { t } = useTranslation();

  const { theme, switchTheme } = UseThemeContext();

  const [expanded, setExpanded] = useState(true);
  const [expandedTooltip, setExpandedTooltip] = useState(false);
  const [tooltipKey, setTooltipKey] = useState("tooltip-expanded");

  const handleExpanded = () => {
    setExpanded(current => !current);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setExpandedTooltip(prev => !prev);
      setTooltipKey(k => k === "tooltip-expanded" ? "tooltip-collapsed" : "tooltip-expanded");
    }, 190);
    return () => clearTimeout(timeout);
  }, [expanded]);



  return (
    <>
      <Container className="p-0 m-0 h-100">
        <aside className="bg-body vh-100 w-100 shadow border-end border-secondary h-100"
          style={{
            minWidth: expanded ? 220 : 64,
            maxWidth: expanded ? 260 : 64,
            transition: "all 0.5s",
          }}
        >
          <Nav className="d-flex justify-content-between flex-column h-100" activeKey={location.pathname}>
            <div className="d-flex p-3 justify-content-between align-items-center">
              <TooltipLink title={t('tooltips.home')} id="tl1" localizacao="right">
                <a
                  className="d-flex align-items-center link-body-emphasis text-decoration-none gap-2 overflow-hidden"
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
                  className="text-body-secondary rounded-3 bg-secondary"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                  onClick={handleExpanded}
                />
              ) : (
                <LuChevronLast
                  className="text-body-secondary rounded-3 bg-secondary me-5"
                  size="2rem"
                  style={{ cursor: "pointer" }}
                  onClick={handleExpanded}
                />
              )}
            </div>
            <div>

              <TooltipLink
                title={t('tooltips.workouts')}
                id="t-1" localizacao="right"
                styles={expandedTooltip ? { width: "100%" } : {}}
                key={tooltipKey}
              >
                <Nav.Link
                  className={`py-3 my-1 px-3 link-body-emphasis aside-link fw-semibold overflow-hidden d-flex align-items-center${!expanded ? " collapsed" : ""}`}
                  eventKey="/user-area/workouts"
                  href="/user-area/workouts"
                >
                  <FaDumbbell className="aside-icon" size="2rem" color={getIconColor("/user-area/workouts")} />
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
                    Treinos
                  </motion.div>
                </Nav.Link>
              </TooltipLink>

              <TooltipLink
                key={expandedTooltip ? "tooltip-experts-expanded" : "tooltip-experts-collapsed"}
                title={t('tooltips.experts')}
                id="t-2"
                localizacao="right"
                styles={expandedTooltip ? { width: "100%" } : {}}
              >
                <Nav.Link
                  className={`py-3 px-3 my-1 link-body-emphasis aside-link fw-semibold d-flex overflow-hidden align-items-center${!expanded ? " collapsed" : ""}`}
                  eventKey="/user-area/experts"
                  href="#"
                >
                  <FaPeopleGroup className="" size="2rem" />
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
                    Profissionais
                  </motion.div>
                </Nav.Link>
              </TooltipLink>

              <TooltipLink
                key={expandedTooltip ? "tooltip-profile-expanded" : "tooltip-profile-collapsed"}
                title={t('tooltips.profile')}
                id="t-2"
                localizacao="right"
                styles={expandedTooltip ? { width: "100%" } : {}}
              >
                <Nav.Link
                  className={`py-3 px-3 my-1 link-body-emphasis aside-link fw-semibold overflow-hidden d-flex align-items-center${!expanded ? " collapsed" : ""}`}
                  eventKey="/user-area/profile"
                  href="/user-area/profile"
                >
                  <FaUserCircle className="aside-icon" size="2rem" color={getIconColor("/user-area/profile")} />
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
                    Conta
                  </motion.div>
                </Nav.Link>
              </TooltipLink>
            </div>

            <section>
                  <motion.div
                    className="align-items-center ms-3 overflow-hidden"
                    initial={false}
                    animate={{
                      opacity: expanded ? 1 : 0,
                      x: expanded ? 0 : -16,
                      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                    }}>
                <ButtonLanguage />
              </motion.div>
              <div className="d-flex align-items-center gap-2">

              <div
                variant="link"
                className="p-3  header-theme-toggle d-none d-xl-block"
                style={{ boxShadow: "none" }}
                onClick={switchTheme}
                aria-label="Alternar tema"
              >
                {theme === 'dark'
                  ? <FaMoon size='1.3rem' color='white' />
                  : <IoSunny size='1.3rem' color='black' />
                }
                <span className="text-body ms-1" style={{ textDecoration: "none !important" }}>
                  {theme === 'dark' ? t('nav.darkTheme') : t('nav.lightTheme')}
                </span>
              </div>
              
              </div>
                <div className="d-flex border-top p-3 align-items-center" style={{ width: expanded ? "100%" : "63px" }}>
                  <div className="ms-n1">
                    <ProfilePicture size={40} />
                  </div>
                  <div
                    className="d-flex justify-content-between align-items-center ms-3 gap-4 overflow-hidden"
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
                    <FiMoreVertical size="2rem" />
                  </div>

                </div>
            </section>
          </Nav>
        </aside>
      </Container>

      <Offcanvas show={showAside} className="bg-body-tertiary" onHide={handleCloseAside}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
          <TooltipLink title='Página Inicial' id='tl1' localizacao='right'>
            <a className='d-flex align-items-center link-body-emphasis text-decoration-none gap-2' href="/">

              <img height={40} src={logo} alt='Logo do IncluMove' />
              <span className='title fw-medium fs-5'>IncluMove</span>

            </a>
          </TooltipLink>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column justify-content-center" activeKey={location.pathname}>
            <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/workouts" href="/user-area/workouts">
              <FaDumbbell className="w-100" size="2rem" color={getIconColor("/user-area/workouts")} />
              <span className="fs-6">Treinos</span>
            </Nav.Link>

            {/* <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/experts" href="#">
              <FaPeopleGroup className="w-100" size="2rem" />
              <span className="fs-6">Profissionais</span>
            </Nav.Link> */}

            <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/profile" href="/user-area/profile">
              <FaUserCircle className="w-100" size="2rem" color={getIconColor("/user-area/profile")} />
              <span className="fs-6">Conta</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export { AsideUser };
