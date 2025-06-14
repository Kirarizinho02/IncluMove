import { Col, Offcanvas } from "react-bootstrap";
import { UseAppContext } from "../../hooks";

import { TooltipLink } from "../";

import { FaDumbbell, FaPeopleGroup } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const AsideHome = ({ abrirUserStatistics, abrirTreinos }) => {
  const { showAside, handleCloseAside } = UseAppContext();

  return (
    <>
      <Col lg={1} className="d-none d-xl-block sm-especial border-end ">
        <aside className="d-flex flex-column align-items-center h-100">
          <TooltipLink title="Treinos" id="t-1" localizacao="right">
          <div className="p-3 text-center" onClick={abrirTreinos} style={{cursor: "pointer"}} >
            <FaDumbbell className="w-100" size="2rem" />
            <span className="fs-6">Treinos</span>
          </div>
          </TooltipLink>
          <div className="p-3 text-center" style={{cursor: ""}}>
            <FaPeopleGroup className="w-100" size="2rem" />
            <span className="fs-6">Profissionais</span>
          </div>
          <TooltipLink title="Conta" id="t-2" localizacao="right">
          <div className="p-3 text-center" onClick={abrirUserStatistics} style={{cursor: "pointer"}}>
            <FaUserCircle className="w-100" size="2rem" />
            <span className="fs-6">Conta</span>
          </div>
          </TooltipLink>
        </aside>
      </Col>

      <Offcanvas show={showAside} className="bg-body-tertiary" onHide={handleCloseAside}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-3 text-center" onClick={abrirTreinos}>
            <FaDumbbell className="w-100" size="2rem" />
            <span className="fs-5">Treinos</span>
          </div>
          <div className="p-3 text-center">
            <FaPeopleGroup className="w-100" size="2rem" />
            <span className="fs-5">Profissionais</span>
          </div>
          <div className="p-3 text-center" onClick={abrirUserStatistics}>
            <FaUserCircle className="w-100" size="2rem" />
            <span className="fs-5">Conta</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export { AsideHome };