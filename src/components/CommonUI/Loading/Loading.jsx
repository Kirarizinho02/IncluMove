import { Container } from "react-bootstrap";
import { flowers, stars } from "../../../assets";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const Loading = ({ isLogin }) => {
  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{ width: "100%" }}
      >
        <Container
          fluid
          className={`d-flex py-3 flex-column justify-content-center align-items-center bg-primary ${isLogin ? "vh-100" : "h-100"}`}
        >
          <Container className="d-flex flex-column bg-body justify-content-center align-items-center text-center border border-3 border-tertiary w-75 rounded-4 h-100">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              style={{ display: "inline-block", marginRight: "40rem", marginTop: "-5rem" }}
            >
              <img src={stars} className="position-relative pb-5" alt="Stars background" />
            </motion.div>
            <div className="position-relative mb-4" style={{ width: 70, height: 70 }}>
              <div className="spinner-border text-light position-relative" style={{ width: 70, height: 70, borderWidth: 6 }} role="status" />
            </div>
            <h4 className="title fw-bold text-light mb-2">Carregando...</h4>
            <div className="text-light-50">Estamos arrumando tudo para você!</div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              style={{ display: "inline-block", marginLeft: "40rem", marginTop: "-5rem" }}
            >
              <img src={flowers} className="position-relative pt-5" />
            </motion.div>
          </Container>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export { Loading };