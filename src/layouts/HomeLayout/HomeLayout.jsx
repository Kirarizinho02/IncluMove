import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Content, HeaderHome } from "../../components";

const HomeLayout = () => {  
      useEffect(() => {
          document.body.classList.add('bg-primary');
          return () => {
            document.body.classList.remove('bg-primary'); 
          };
        }, 
      );
  return (
    <>
      <HeaderHome />
      <Content> 
        <Container fluid className="overflow-x-hidden">
          <Outlet />
        </Container>
      </Content>
    </>
  );
}

export { HomeLayout };