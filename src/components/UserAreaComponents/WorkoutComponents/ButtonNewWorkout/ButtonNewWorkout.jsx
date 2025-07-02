import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown, FaBolt, FaRunning, FaDumbbell } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ButtonNewWorkout = (props) => {
  const { onSelectWorkoutType } = props;
  const [show, setShow] = useState(false);

  return (
    <Dropdown show={show} onToggle={setShow} className="w-100">
      <Dropdown.Toggle
        id="dropdown-basic"
        className="cta-gradient-btn d-inline-flex align-items-center justify-content-center fs-5 rounded-pill w-100 text-center py-3 px-4 logout-toggle fw-bold title"
        style={{
          letterSpacing: "0.5px"
        }}
      >
        <span className="d-flex align-items-center justify-content-center text-body">
          <FaFire className="me-2" size={22} />
          Novo treino
          <motion.span
            className="ms-2"
            animate={{ rotate: show ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{ display: "inline-block" }}
          >
            <FaChevronDown size={20} />
          </motion.span>
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="flyout-menu-animated fs-5 rounded-4 mt-2 shadow p-0">
        <Dropdown.Item
          className="d-flex align-items-center gap-2 flyout-item ps-4 py-2"
          onClick={() => onSelectWorkoutType("Rapido")}
          style={{
          }}
        >
          <FaRunning className="flyout-item" />
          Treino Rápido
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex align-items-center gap-2 flyout-item ps-4 py-2"
          onClick={() => onSelectWorkoutType("Moderado")}
        >
          <FaDumbbell className="flyout-item" />
          Treino Moderado
        </Dropdown.Item>
        <Dropdown.Item
          className="d-flex align-items-center gap-2 flyout-item ps-4 py-2"
          onClick={() => onSelectWorkoutType("Pesado")}
        >
          <GiStrong className="flyout-item" />
          Treino Pesado
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};


export { ButtonNewWorkout };