import { Col, Container, Row } from "react-bootstrap"
import { GraficoPizza } from "./GraficoPizza/GraficoPizza";

const GraphsComponent = (props) => {
  const { usuario } = props;

  if (!usuario?.treinos || usuario.treinos.length === 0 || !usuario.treinos[0]?.duracao) {
    return (
      <Container className="shadow p-4 mt-3 rounded-4 bg-white">
        <h4 className="fw-bold title text-center"> Treinos nos últimos 30 dias: </h4>
        <h5 className="fw-regular title text-center">Nenhum treino cadastrado!</h5>
      </Container>
    );
  }

  const treinoDuracaoLabel = ["Rápido", "Moderado", "Pesado"];
  const treinoCores = ["#f58a83", "#abf479", "#ab7af5"]; 
  const treinoDuracoes = { Rapido: 0, Moderado: 0, Pesado: 0 };

  usuario?.treinos?.forEach((treino) => {
    treinoDuracoes[treino.duracao]++;
  });

  const treinoData = {
    labels: treinoDuracaoLabel,
    datasets: [
      {
        label: "Distribuição dos treinos",
        data: [
          treinoDuracoes.Rapido,
          treinoDuracoes.Moderado,
          treinoDuracoes.Pesado,
        ],
        backgroundColor: treinoCores,
        hoverOffset: 6,
      },
    ],
  };

  return(
    <Container className="shadow p-4 mt-3 rounded-4 bg-white">
      <Row>
        <h4 className="fw-bold title ms-3"> Últimos treinos realizados: </h4>

        <Col md={6} className="d-flex flex-column align-items-center h-100">
          <GraficoPizza data={treinoData} />
        </Col>

        <Col md={6} className="d-flex justify-content-center flex-column align-items-start mt-4 align-center-important">
          {treinoDuracoes.Rapido > 0 && (
            <div className="d-flex align-items-center p-2">
              <div className="bg-secondary rounded-4 me-3 ms-n" style={{ width: "1.5rem", height: "1.5rem" }}></div>
              <div>
                <div className="fs-5 fw-semibold">Treino Rápido</div>
                <div>{((treinoDuracoes.Rapido / usuario.treinos.length)*100).toFixed(0)}% - {treinoDuracoes.Rapido} de {usuario.treinos.length} treinos</div>
              </div>
            </div>
          )}

          {treinoDuracoes.Moderado > 0 && (
            <div className="d-flex align-items-center p-2">
              <div className="bg-accent rounded-4 me-3" style={{ width: "1.5rem", height: "1.5rem" }}></div>
              <div>
                <div className="fs-5 fw-semibold">Treino Moderado</div>
                <div>{((treinoDuracoes.Moderado / usuario.treinos.length)*100).toFixed(0)}% - {treinoDuracoes.Moderado} de {usuario.treinos.length} treinos</div>
              </div>
            </div>
          )}

          {treinoDuracoes.Pesado > 0 && (
            <div className="d-flex align-items-center p-2">
              <div className="bg-tertiary rounded-4 me-3"  style={{ width: "1.5rem", height: "1.5rem" }}></div>
              <div>
                <div className="fs-5 fw-semibold">Treino Pesado</div>
                <div>{((treinoDuracoes.Pesado / usuario.treinos.length)*100).toFixed(0)}% - {treinoDuracoes.Pesado} de {usuario.treinos.length} treinos</div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export { GraphsComponent };