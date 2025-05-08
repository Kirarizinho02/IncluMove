import { Outlet } from "react-router-dom";
import { Content } from "../../components";
import { Container } from "react-bootstrap";

const HomeLayout = () => {  
  return (
    <>
      <Content>
        <Container fluid className="overflow-x-hidden vh-100">
          <Outlet />
        </Container>
      </Content>
    </>
  );
}

export { HomeLayout };