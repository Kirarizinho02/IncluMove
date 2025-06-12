import { Outlet } from 'react-router-dom';

import { Content, Footer, Header } from '../../components';

// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const DefaultLayout = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Content>
            <Outlet />
        </Content>
        <Footer />
      </motion.div>
    </>
  )
}

export { DefaultLayout };

