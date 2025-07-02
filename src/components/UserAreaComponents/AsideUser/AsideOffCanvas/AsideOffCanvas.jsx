import { Offcanvas } from "react-bootstrap";
import { AsideUser } from "..";

const AsideOffcanvas = ({ show, onHide }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="start" className="bg-body" style={{ width: 240 }}>
      <Offcanvas.Body className="p-0">
        <AsideUser isOffcanvas />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export { AsideOffcanvas };