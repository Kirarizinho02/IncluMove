import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { AsideUser } from "../../components";
import { UseAppContext } from "../../hooks";

const RestrictedLayout = () => {
  const { expanded } = UseAppContext();

  const asideWidth = expanded ? 240 : 64;

  return (
    <Container fluid className="overflow-x-hidden bg-primary p-0 m-0">
      <Row className="h-100 flex-nowrap">
        <div
          style={{
            width: asideWidth,
            minWidth: asideWidth,
            maxWidth: asideWidth,
            transition: "all 0.6s",
          }}
          className="p-0 m-0 overflow-hidden vh-100 d-none d-md-flex"
        >
          <AsideUser />
        </div>
        <div
          style={{
            flex: 1,
            transition: "all 0.4s",
          }}
          className="p-0 m-0 overflow-x-hidden overflow-y-auto vh-100"
        >
          <Outlet />
        </div>
      </Row>
    </Container>
  );
};

export { RestrictedLayout };

