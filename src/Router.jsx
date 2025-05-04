import { Route, Routes } from 'react-router-dom';

import { DefaultLayout, FormLayout } from './layouts';
import { About, LandingPage, LoginForm } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
      </Route>
       <Route path='/form' element={<FormLayout />}>
        <Route path='/form/login' element={<LoginForm />} />
       {/* <Route path='/form/signup' element={<SignupForm />} />*/}
      </Route>
      {/*<Route path='/home' element={<HomeLayout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/home/experts' element={<Experts />} />
        <Route path='/home/profile' element={<Profile />} /> 
      </Route> */}
    </Routes>
  );
}

export { Router };

