import { Route, Routes } from 'react-router-dom';

import { DefaultLayout, FormLayout, HomeLayout } from './layouts';
import { About, LandingPage, LogIn, SignUp, Home, Error, Disabilities } from './pages';
import { UseAppContext } from './hooks';



const Router = () => {
  const { rotaPrivada: RotaPrivada } = UseAppContext();

  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About />} />
      </Route>
      <Route path='/form' element={<FormLayout />}>
        <Route path='/form/login' element={<LogIn />} />
        <Route path='/form/signup' element={<SignUp />} /> 
        <Route path='/form/disabilities' element={<Disabilities />} /> 
      </Route>
      <Route
          path="/home"
          element={
            <RotaPrivada>
              <HomeLayout />
            </RotaPrivada>
          }
        >
        <Route path='/home' element={<Home />} />
      {/*  <Route path='/home/experts' element={<Experts />} />
        <Route path='/home/profile' element={<Profile />} /> */}
      </Route> 

    </Routes>
  );
}

export { Router };

