import { Col, Nav, Offcanvas } from "react-bootstrap";
import { UseAppContext } from "../../../hooks";

import { TooltipLink } from "../..";

import { FaUserCircle } from "react-icons/fa";
import { FaDumbbell, FaPeopleGroup } from "react-icons/fa6";

import { logo } from "../../../assets";
import { useTranslation } from "react-i18next";

const AsideUser = () => {
  const { showAside, handleCloseAside, getIconColor } = UseAppContext();

  const { t } = useTranslation();

  return (
    <>
      <Col md={2} lg={1} className="d-none d-md-block sm-especial border-end bg-body overflow-hidden">
        <aside className="d-flex flex-column align-items-center w-100">
          <Nav className="d-flex justify-content-center w-100" activeKey={location.pathname}>

              <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link w-100" eventKey="/user-area/workouts" href="/user-area/workouts">
                <TooltipLink title={t('tooltips.workouts')} id="t-1" localizacao="right"> 
                  <FaDumbbell className="w-100 aside-icon" size="2rem" color={getIconColor("/user-area/workouts")}/>
                  <span className="fs-6">Treinos</span>
                </TooltipLink>
              </Nav.Link>

              {/* <Nav.Link className="p-3 px-1 text-center pe-auto link-body-emphasis aside-link w-100 text-wrap" eventKey="/user-area/experts" href="#">
                <TooltipLink title={t('tooltips.experts')} id="t-3" localizacao="right">
                  <FaPeopleGroup className="w-100" size="2rem" />
                  <span className="fs-6">Profissionais</span>
                </TooltipLink>
              </Nav.Link> */}

              <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link w-100" eventKey="/user-area/profile" href="/user-area/profile">
                <TooltipLink title={t('tooltips.profile')} id="t-2" localizacao="right">
                  <FaUserCircle className="w-100 aside-icon" size="2rem" color={getIconColor("/user-area/profile")} />
                  <span className="fs-6">Conta</span>
                </TooltipLink>                
              </Nav.Link>

          </Nav>
        </aside>
      </Col>

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
              <FaDumbbell className="w-100" size="2rem" color={getIconColor("/user-area/workouts")}/>
              <span className="fs-6">Treinos</span>
            </Nav.Link>

            {/* <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/experts" href="#">
              <FaPeopleGroup className="w-100" size="2rem" />
              <span className="fs-6">Profissionais</span>
            </Nav.Link> */}
            
            <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/profile" href="/user-area/profile">
              <FaUserCircle className="w-100" size="2rem" color={getIconColor("/user-area/profile")}/>
              <span className="fs-6">Conta</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export { AsideUser };

