import { Outlet } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import { AsideHome, Content, HeaderHome } from "../../components";
import { UseAppContext } from "../../hooks";

const RestrictedLayout = () => {  
  return (
    <>
      <HeaderHome />
      <Content> 
        <Container fluid className="overflow-x-hidden h-100 bg-primary">
          <Row>
            <AsideHome />
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