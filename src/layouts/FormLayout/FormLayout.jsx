import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const FormLayout = () => {
    useEffect(() => {
        document.body.classList.add('bg-primary');
        return () => {
          document.body.classList.remove('bg-primary'); 
        };
      }, 
    );

  return (
    <div className='bg-primary w-100 h-100'>
      <Outlet />
    </div>
  )
}

export { FormLayout };