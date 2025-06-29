import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { AsideUser, Content, HeaderUser } from "../../components";

const RestrictedLayout = () => {

  return (
    <>
      <Content>
        <HeaderUser />
        <Container fluid className="overflow-x-hidden h-100">
          <Row className="h-100">
            <AsideUser />
            <Col
              className="d-flex justify-content-center bg-primary p-0 w-auto h-100">
              <Outlet />
            </Col>
          </Row>
        </Container>
      </Content>
    </>
  );
}

export { RestrictedLayout };

