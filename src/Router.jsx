import { Navigate, Route, Routes } from 'react-router-dom';
import { DefaultLayout, FormLayout, RestrictedLayout } from './layouts';
import { About, Disabilities, Error, Profile, LandingPage, LogIn, SignUp, Workouts, FrequentlyAskedQuestions, Contact, Professionals, Community } from './pages';
import { RotaPrivada } from './contexts';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/error' element={<Error />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FrequentlyAskedQuestions />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='/form' element={<FormLayout />}>
        <Route path='/form/login' element={<LogIn />} />
        <Route path='/form/signup' element={<SignUp />} /> 
        <Route path='/form/disabilities' element={<Disabilities />} /> 
      </Route>
      <Route
        path="/user-area/"
        element={
          <RotaPrivada>
            <RestrictedLayout />
          </RotaPrivada>
        }
      >
        <Route index element={<Navigate to="/user-area/profile" replace />} />
        <Route path='/user-area/workouts' element={<Workouts />} />
        <Route path='/user-area/professionals' element={<Professionals />}/>
        <Route path='/user-area/profile' element={<Profile />} /> 
        <Route path='/user-area/community' element={<Community />} />
      </Route> 

    </Routes>
  );
}

export { Router };

