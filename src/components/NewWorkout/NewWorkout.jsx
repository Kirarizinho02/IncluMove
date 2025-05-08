import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { api } from "../../services";

const NewWorkout = ({ exercicios,  usuarioLog }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervaloTreino = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(intervaloTreino);
  }, []);

  const formatTime = (segundos) => {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
  };

  const proximoId = usuarioLog.treinos.length > 0
  ? Math.max(...usuarioLog.treinos.map(t => t.id)) + 1
  : 1;

  const handleCompletarTreino = async () => {
    const treino = 
    {
      id: proximoId,
      nome: `Treino - ${new Date().toLocaleDateString()}`,
      descricao: "Treino personalizado",
      data: new Date().toISOString().split("T")[0],
      duracao: exercicios.length === 3 ? "Rapido" : exercicios.length === 4 ? "Moderado" : "Pesado",
      exercicios: exercicios.map((ex, i) => ({
        id: i + 1, 
        nome: ex.nome,
        movimento_pernas: usuarioLog.movimento_pernas,
        equipamento_apoio: ex.equipamento_apoio,
        equipamento_treino: ex.equipamento_treino,
        descricao: ex.descricao,
        series: ex.series,
        foto: ex.foto,
        repeticoes: ex.repeticoes
      }))
    };

    const usuarioAtualizado = {
      ...usuarioLog,
      treinos: [...usuarioLog.treinos, treino]
    };
  
    try {
      await api.put(`/usuarios/${usuarioLog.id}`, usuarioAtualizado);
      alert("Treino salvo com sucesso!");
      window.location.href = '/home'; 
    } catch (error) {
      console.error("Erro ao registrar treino", error);
      alert("Erro ao salvar o treino.");
    }
  };


  return (
    <div className="my-5 mx-4 border rounded p-4" style={{width: "95%"}}>
    <h6 className="text-muted">Tempo: {formatTime(timer)}</h6>
    <h5 className="mb-3">Exercícios a serem realizados:</h5>
    <Row className="me-4">
      {exercicios.map((exercicio, index) => (
        <Col key={index} md={6} lg={6} className="mb-4">
          <Card className="h-100 w-100 shadow-sm" style={{width:"25rem"}}>
            {exercicio.foto && (
              <Card.Img variant="top" src={exercicio.foto} alt={"Exercício: "+exercicio.nome} className="object-fit-cover p-2"/>
            )}
            <Card.Body>
              <Card.Title>{exercicio.nome}</Card.Title>
              <Card.Text>
                {exercicio.descricao}
                <br />
                <strong>Séries:</strong> {exercicio.series} <br />
                <strong>Repetições:</strong> {exercicio.repeticoes}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <div className="w-100 align-items-center d-flex flex-column">
      <Button variant="accent" size="lg" onClick={handleCompletarTreino}>
          Completar Treino
        </Button>
      </div>
    </Row>

  </div>
  )
}

export { NewWorkout };
