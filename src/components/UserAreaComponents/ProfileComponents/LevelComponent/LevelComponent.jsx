import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import { UseAppContext } from "../../../../hooks";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

const LEVELS = [
  { name: "Iniciante", min: 0, max: 2, color: "secondary", key: "beginner" },
  { name: "Adepto", min: 3, max: 10, color: "info", key: "adept" },
  { name: "Avançado", min: 11, max: 50, color: "danger", key: "advanced" },
  { name: "Mestre", min: 51, max: 99999, color: "tertiary", key: "master" },
];

const getLevel = (qtd) => LEVELS.find(lvl => qtd >= lvl.min && qtd <= lvl.max);

const LevelComponent = () => {
  const { t } = useTranslation();
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

  let daysMsg = t("level.noWorkouts", "Você ainda não realizou nenhum treino.");
  if (lastWorkout) {
    const lastDate = dayjs(lastWorkout.data);
    const today = dayjs().startOf("day");
    const diff = today.diff(lastDate, "day");
    if (diff === 0) {
      daysMsg = t("level.lastToday", "Parabéns pelo seu último treino hoje! Continue assim!");
    } else if (diff === 1) {
      daysMsg = t("level.lastYesterday", "Seu último treino foi ontem. Que tal treinar hoje?");
    } else {
      daysMsg = t("level.lastDays", { count: diff, defaultValue: `Seu último treino foi há ${diff} dias.` });
    }
  }

  return (
    <Container fluid className="h-100 rounded-4 h-100 border border-1 border-body mt-3 p-1">
      <Container fluid className="shadow-sm p-4 bg-body h-100 rounded-4 w-100" >
        <Row className="bg-body d-flex justify-content-between h-100 flex-column w-100">
          <h4 className="fw-bold title mb-4 text-center">
            {t("level.title", "Seu nível:")}&nbsp;
            <span className={`text-${level.color}`}>
              {t(`level.${level.key}`, level.name)}
            </span>
          </h4>
          <Col className="d-flex flex-column align-items-center">
            <span className="fs-5 mb-2">
              {t("level.workoutsCount", { count: qtdTreinos, defaultValue: "{{count}} treino realizado", plural: "{{count}} treinos realizados" })}
            </span>
            {level.key !== "master" && (
              <>
                <ProgressBar
                  now={progress}
                  label={`${Math.round(progress)}%`}
                  variant={level.color}
                  className="w-75 mb-2"
                />
                <span className="fs-6 text-muted text-center">
                  {t("level.toNext", {
                    count: max - qtdTreinos,
                    next: t(`level.${nextLevel.key}`, nextLevel.name),
                    defaultValue: "Faltam {{count}} treinos para o próximo nível: {{next}}"
                  })}
                </span>
              </>
            )}
            {level.key === "master" && (
              <span className="fs-6 text-success mb-2">{t("level.maxLevel", "Você atingiu o nível máximo!")}</span>
            )}
            <span className="fs-6 text-center">{daysMsg}</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { LevelComponent };