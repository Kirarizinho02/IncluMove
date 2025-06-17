import { UseAppContext } from "../../hooks";

import { NewWorkout, LastWorkout } from "../../components";

const Workouts = () => {
  const {
    usuarioLog,
    exerciciosSelecionados,
    showNewWorkout,
  } = UseAppContext();

  return showNewWorkout 
    ? <NewWorkout exercicios={exerciciosSelecionados} usuarioLog={usuarioLog} />
    : <LastWorkout />;
}

export { Workouts };