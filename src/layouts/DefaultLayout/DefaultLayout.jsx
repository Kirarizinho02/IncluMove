import { Outlet } from 'react-router-dom';

import { Content, Footer, Header } from '../../components';

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react';

const DefaultLayout = () => {
  return (
    <>
        <Header />
        <Content>
          <AnimatePresence>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </Content>
        <Footer />
    </>
  )
}

export { DefaultLayout };

