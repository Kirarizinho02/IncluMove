import { useState, useEffect } from "react";

function UseResize() {
  const [minHeight, setMinHeight] = useState('calc(100vh - 2rem)');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 991) { 
        setMinHeight('100vh');
      } else {
        setMinHeight('calc(100vh - 2rem)');
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return minHeight;
}

export { UseResize }; 