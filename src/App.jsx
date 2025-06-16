import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import './App.scss';

import { AppContextProvider, ThemeContextProvider } from './contexts/';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ThemeContextProvider>
          <Router />
        </ThemeContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export { App };
