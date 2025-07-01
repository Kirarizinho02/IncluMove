import { Outlet } from 'react-router-dom';

import { Content, Footer, Header } from '../../components';

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { UseThemeContext } from '../../hooks';

const DefaultLayout = () => {
  const { setBodyClass } = UseThemeContext();

  useEffect(() => {
    const remove = setBodyClass('bg-primary');
    return remove;
  }, [setBodyClass]);

  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Content>
            <Outlet />
          </Content>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export { DefaultLayout };

