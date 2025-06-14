import { Outlet } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import { AsideHome, Content, HeaderHome } from "../../components";
import { UseAppContext } from "../../hooks";

const HomeLayout = () => {  
  const {setSelectedMenu} = UseAppContext();

  return (
    <>
      <HeaderHome />
      <Content> 
        <Container fluid className="overflow-x-hidden">
          <Row>
            <AsideHome 
              abrirUserStatistics={() => setSelectedMenu("user")}
              abrirTreinos={() => setSelectedMenu("treinos")}
              abrirProfissionais={() => setSelectedMenu("profissionais")}/>
              <Outlet />
          </Row>
        </Container>
      </Content>
    </>
  );
}

export { HomeLayout };