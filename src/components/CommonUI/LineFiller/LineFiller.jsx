import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { useInView, motion } from "framer-motion";

const LineFiller = ({ src, height, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <div
      ref={ref}
      className={className + "d-inline-block position-relative"}
    >
      <img
        src={src}
        height={height}
        className="d-block position-relative w-100 test"
        style={{
          zIndex: 1,
          opacity: 0.2,
        }}
        alt="Linha decorativa de preenchimento, indicando que o conteúdo está carregando."
      />
      <motion.img
        src={src}
        height={height}
        className="d-block position-absolute w-100 test"
        style={{
          left: 0,
          top: 0,
          zIndex: 200,
          clipPath: inView
            ? "inset(0% 0% 0% 0%)"
            : "inset(0% 0% 100% 0%)",
          transition: "clip-path 2.5s ease-in-out",
        }}
        initial={false}
        animate={
          inView
            ? { clipPath: "inset(0% 0% 0% 0%)" }
            : { clipPath: "inset(0% 0% 100% 0%)" }
        }
      />
    </div>
  );
};

export { LineFiller };