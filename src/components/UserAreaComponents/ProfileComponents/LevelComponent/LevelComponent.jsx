import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { UseAppContext } from "../../../../hooks";
import dayjs from "dayjs";

const LEVELS = [
  { name: "Iniciante", min: 0, max: 2, color: "secondary" },
  { name: "Adepto", min: 3, max: 10, color: "info" },
  { name: "Avançado", min: 11, max: 50, color: "danger" },
  { name: "Mestre", min: 51, max: 99999, color: "tertiary" },
];
const getLevel = (qtd) => LEVELS.find(lvl => qtd >= lvl.min && qtd <= lvl.max);

const LevelComponent = () => {
  const { usuarioLog } = UseAppContext();

  const treinos = usuarioLog?.treinos || [];
  const qtdTreinos = treinos.length;

  const level = getLevel(qtdTreinos);
  const currentIdx = LEVELS.indexOf(level);
  const nextLevel = LEVELS[Math.min(currentIdx + 1, LEVELS.length - 1)];

  const min = level.min;
  const max = nextLevel.min;
  const progress = Math.min(100, ((qtdTreinos - min) / (max - min)) * 100);

  let lastWorkout = null;
  if (treinos.length) {
    lastWorkout = treinos.reduce((a, b) => (dayjs(a.data).isAfter(dayjs(b.data)) ? a : b));
  }

  let daysMsg = "Você ainda não realizou nenhum treino.";
  if (lastWorkout) {
    const lastDate = dayjs(lastWorkout.data);
    const today = dayjs().startOf("day");
    const diff = today.diff(lastDate, "day");
    if (diff === 0) {
      daysMsg = "Parabéns pelo seu último treino hoje! Continue assim!";
    } else if (diff === 1) {
      daysMsg = "Seu último treino foi ontem. Que tal treinar hoje?";
    } else {
      daysMsg = `Seu último treino foi há ${diff} dias.`;
    }
  }

  return (
    <Container className="shadow p-4 mt-3 rounded-4 bg-body h-100">
      <Row>
      <h4 className="fw-bold title mb-4">
        Seu nível: <span className={`text-${level.color}`}>{level.name}</span>
      </h4>
      <Col className="d-flex flex-column align-items-center mb-4">
        <span className="fs-5 mb-2">
          {qtdTreinos} treino{qtdTreinos === 1 ? "" : "s"} realizados
        </span>
        {level.name !== "Mestre" && (
          <>
            <ProgressBar
              now={progress}
              label={`${Math.round(progress)}%`}
              variant={level.color}
              className="w-75 mb-2"
            />
            <span className="fs-6 text-muted">
              Faltam <b>{max - qtdTreinos}</b> treino{max - qtdTreinos === 1 ? "" : "s"} para o próximo nível: <b>{nextLevel.name}</b>
            </span>
          </>
        )}
        {level.name === "Mestre" && (
          <span className="fs-6 text-success">Você atingiu o nível máximo!</span>
        )}
        <span className="fs-6 mt-3">{daysMsg}</span>
      </Col>
      </Row>
    </Container>
  );
};

export { LevelComponent };