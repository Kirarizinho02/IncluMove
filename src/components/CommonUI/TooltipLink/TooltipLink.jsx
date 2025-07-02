import { OverlayTrigger, Tooltip } from "react-bootstrap";

const TooltipLink = ({ id, children, title, localizacao, styles }) => (
  <OverlayTrigger placement={localizacao} overlay={<Tooltip id={`${id}-${localizacao}`}>{title}</Tooltip>}>
    <span className="d-inline-block" style={styles}>{children}</span>
  </OverlayTrigger>
);

export { TooltipLink };