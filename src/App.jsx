import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import './App.scss';

import { AuthProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export { App };
