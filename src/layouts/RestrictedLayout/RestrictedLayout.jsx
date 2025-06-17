import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import { AsideUser, Content, HeaderUser } from "../../components";

const RestrictedLayout = () => {  
  return (
    <>
      <HeaderUser />
      <Content> 
        <Container fluid className="overflow-x-hidden h-100 bg-primary">
          <Row>
            <AsideUser />
              <Col xl={11} md={10} className="d-flex justify-content-center bg-primary">
                <Outlet />
              </Col>
          </Row>
        </Container>
      </Content>
    </>
  );
}

export { RestrictedLayout };

