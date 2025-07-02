import { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const themeContext = createContext({});

// Essa implementação do tema escuro foi feito com javascript mais bruto, visto que o react-bootstrap não suporta nativamente o acesso ao tema global
// E essa é a própria recomendação deles, docs: https://react-bootstrap.netlify.app/docs/getting-started/color-modes/

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const preferredTheme = userPrefersDark ? 'dark' : 'light';
    return preferredTheme;
  });

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const setBodyClass = (className) => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, switchTheme, setBodyClass }}>
      {children}
    </themeContext.Provider>
  );
}