import { Col, Offcanvas } from "react-bootstrap";
import { UseAppContext } from "../../hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faPeopleGroup, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const AsideHome = ({ abrirUserStatistics, abrirTreinos }) => {
  const { showAside, handleCloseAside } = UseAppContext();

  return (
    <>
      <Col lg={1} className="d-none d-xl-block bg-white sm-especial border-end ">
        <aside className="d-flex flex-column align-items-center h-100">
          <div className="p-3 text-center" >
            <FontAwesomeIcon icon={faDumbbell} className="w-100" size="2xl" onClick={abrirTreinos} />
            <span className="fs-6">Treinos</span>
          </div>
          <div className="p-3 text-center">
            <FontAwesomeIcon icon={faPeopleGroup} className="w-100" size="2xl" />
            <span className="fs-6">Profissionais</span>
          </div>
          <div className="p-3 text-center" onClick={abrirUserStatistics}>
            <FontAwesomeIcon icon={faUserAlt} className="w-100" size="2xl" />
            <span className="fs-6">Conta</span>
          </div>
        </aside>
      </Col>

      <Offcanvas show={showAside} className="bg-body-tertiary" onHide={handleCloseAside}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-3 text-center" onClick={abrirTreinos}>
            <FontAwesomeIcon icon={faDumbbell} className="w-100" size="2xl" />
            <span className="fs-5">Treinos</span>
          </div>
          <div className="p-3 text-center">
            <FontAwesomeIcon icon={faPeopleGroup} className="w-100" size="2xl" />
            <span className="fs-5">Profissionais</span>
          </div>
          <div className="p-3 text-center">
            <FontAwesomeIcon icon={faUserAlt} className="w-100" size="2xl" onClick={abrirUserStatistics} />
            <span className="fs-5">Conta</span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export { AsideHome };