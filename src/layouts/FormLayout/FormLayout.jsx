import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from '../../components';
import { Container } from 'react-bootstrap';
import { UseThemeContext } from '../../hooks';

const FormLayout = () => {
  const { setBodyClass } = UseThemeContext();

  useEffect(() => {
    const remove = setBodyClass('bg-primary');
    return remove;
  }, [setBodyClass]);

  return (
    <>
      <Content>
        <Container fluid className='overflow-x-hidden p-0 m-0 h-100 w-100'>
          <Outlet />
        </Container> 
      </Content>
    </>
  )
}

export { FormLayout };