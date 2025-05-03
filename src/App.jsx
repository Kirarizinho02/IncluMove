import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export { App };
