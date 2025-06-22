import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FaChevronDown, FaBolt, FaRunning, FaDumbbell } from "react-icons/fa";
import { FaFire } from "react-icons/fa6";
import { GiStrong } from "react-icons/gi";

const ButtonNewWorkout = (props) => {
  const { onSelectWorkoutType } = props;
  const [show, setShow] = useState(false);

  return (
    <Dropdown show={show} onToggle={setShow} className="shadow-sm w-100">
      <Dropdown.Toggle
        variant="tertiary"
        id="dropdown-basic"
        className="p-3 btn-flyout-animated logout-toggle d-flex align-items-center gap-2 fs-4 rounded-4 w-100 text-center"
      >
        <span className="d-flex align-items-center w-100 justify-content-center">
        <FaFire className="me-1" />
        Novo treino
        <FaChevronDown className={`ms-2 transition ${show ? "rotate-180" : ""}`} />
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="flyout-menu-animated fs-5">
        <Dropdown.Item
          className="d-flex align-items-center gap-2 flyout-item ps-4 py-2"
          onClick={() => onSelectWorkoutType("Rapido")}
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