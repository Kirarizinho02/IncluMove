import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipLink = ({ id, children, title, localizacao }) => (
  <OverlayTrigger placement={localizacao} overlay={<Tooltip id={`${id}-${localizacao}`}>{title}</Tooltip>}>
    <span className="d-inline-block">{children}</span>
  </OverlayTrigger>
);

export { TooltipLink };