import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from '../../components';
import { Container } from 'react-bootstrap';

const FormLayout = () => {
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
        <Container fluid className='overflow-x-hidden'>
          <Outlet />
        </Container> 
      </Content>
    </>
  )
}

export { FormLayout };