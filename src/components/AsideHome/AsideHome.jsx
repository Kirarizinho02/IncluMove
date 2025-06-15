import { Col, Offcanvas, Nav } from "react-bootstrap";
import { UseAppContext } from "../../hooks";

import { TooltipLink } from "../";

import { FaDumbbell, FaPeopleGroup } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

import { logo } from "../../assets";

const AsideHome = () => {
  const { showAside, handleCloseAside } = UseAppContext();

  return (
    <>
      <Col md={2} lg={1} className="d-none d-md-block sm-especial border-end bg-body overflow-hidden">
        <aside className="d-flex flex-column align-items-center">
          <Nav className="d-flex justify-content-center" activeKey={location.pathname}>
            <TooltipLink title="Treinos" id="t-1" localizacao="right">
              <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/workouts" href="/user-area/workouts">
                <FaDumbbell className="w-100" size="2rem" />
                <span className="fs-6">Treinos</span>
              </Nav.Link>
            </TooltipLink>
            <TooltipLink title="Profissionais" id="t-3" localizacao="right">
              <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/experts" href="#">
                <FaPeopleGroup className="w-100" size="2rem" />
                <span className="fs-6">Profissionais</span>
              </Nav.Link>
            </TooltipLink>
            <TooltipLink title="Conta" id="t-2" localizacao="right">
              <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area" href="/user-area">
                <FaUserCircle className="w-100" size="2rem" />
                <span className="fs-6">Conta</span>
              </Nav.Link>
            </TooltipLink>
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
              <FaDumbbell className="w-100" size="2rem" />
              <span className="fs-6">Treinos</span>
            </Nav.Link>
            <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area/experts" href="#">
              <FaPeopleGroup className="w-100" size="2rem" />
              <span className="fs-6">Profissionais</span>
            </Nav.Link>
            <Nav.Link className="p-3 text-center pe-auto link-body-emphasis aside-link" eventKey="/user-area" href="/user-area">
              <FaUserCircle className="w-100" size="2rem" />
              <span className="fs-6">Conta</span>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export { AsideHome };