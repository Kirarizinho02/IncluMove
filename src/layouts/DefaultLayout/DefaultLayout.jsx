import { Outlet } from 'react-router-dom';

import { Footer } from '../../components';

const DefaultLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export { DefaultLayout };