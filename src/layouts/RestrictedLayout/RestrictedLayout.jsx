import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { AsideUser, HeaderUser } from "../../components";

const RestrictedLayout = () => {

  return (
    <>
      <Container fluid className="overflow-x-hidden bg-primary p-0 m-0">
        <Row className="h-100">
          <Col xxl={2} xl={2} md={1} className="h-100">
          <AsideUser />
          </Col>
          <Col xxl={10} md={12} className="h-100">
          <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { RestrictedLayout };

