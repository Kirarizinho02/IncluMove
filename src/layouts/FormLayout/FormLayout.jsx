import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Content } from '../../components';

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
          <Content >
            <Outlet />
          </Content>
        </>
  )
}

export { FormLayout };