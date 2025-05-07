import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import './App.scss';

import { AppContextProvider } from './contexts/AppContext';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export { App };
