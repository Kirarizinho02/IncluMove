import { Outlet } from "react-router-dom";
import { Content } from "../../components";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

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
      <Content> 
        <Container fluid className="overflow-x-hidden">
          <Outlet />
        </Container>
      </Content>
    </>
  );
}

export { HomeLayout };