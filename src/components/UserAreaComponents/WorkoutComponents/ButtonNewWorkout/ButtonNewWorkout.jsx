import { Dropdown } from "react-bootstrap";

const ButtonNewWorkout = (props) => {
  const { onSelectWorkoutType } = props;
  return (
    <Dropdown>
      <Dropdown.Toggle variant="tertiary" id="dropdown-basic" className="p-2">
        Novo treino
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Dropdown.Item onClick={() => onSelectWorkoutType("Rapido")}>Treino Rápido</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectWorkoutType("Moderado")}>Treino Moderado</Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectWorkoutType("Pesado")}>Treino Pesado</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
export { ButtonNewWorkout };