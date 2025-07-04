import { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button, Toast } from "react-bootstrap";
import { UseAppContext } from "../../../../hooks";
import { api } from "../../../../services/api";

const UserEnrichment = () => {
  const { usuarioLog, setUsuarioLog } = UseAppContext();
  const [altura, setAltura] = useState(usuarioLog?.altura || "");
  const [peso, setPeso] = useState(usuarioLog?.peso || "");
  const [salvando, setSalvando] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const calcularIdade = (dataNasc) => {
    if (!dataNasc) return "";
    const hoje = new Date();
    const nasc = new Date(dataNasc);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
      idade--;
    }
    return idade;
  };

  const idade = usuarioLog?.data_nascimento ? calcularIdade(usuarioLog.data_nascimento) : "";

  useEffect(() => {
    setAltura(usuarioLog?.altura || "");
    setPeso(usuarioLog?.peso || "");
  }, [usuarioLog]);

  const handleSalvar = async (e) => {
    e.preventDefault();
    setSalvando(true);
    try {
      const atualizacao = { altura, peso };
      await api.patch(`/usuarios/${usuarioLog.id}`, atualizacao);
      setUsuarioLog({ ...usuarioLog, ...atualizacao });
      setShowToast(true);
    } catch (err) {
      console.error("Erro ao salvar dados:", err);
    }
    setSalvando(false);
  };

  return (
    <Container fluid className="h-100 rounded-4 border border-1 border-body mt-3 p-1">
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        bg="success"
        style={{
          position: "fixed",
          top: 30,
          right: 20,
          minWidth: 220,
          zIndex: 2000
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Sucesso</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          Métricas salvas com sucesso!
        </Toast.Body>
      </Toast>
      <Container fluid className="shadow-sm p-4 bg-body h-100 rounded-4 w-100">
        <Row className="bg-body d-flex justify-content-around h-100 flex-column w-100">
          <h4 className="fw-bold title mb-4 text-center">
            Suas métricas:
          </h4>
          <Col className="d-flex flex-column align-items-center mb-4 justify-content-center w-100">
            <Form onSubmit={handleSalvar} className="w-100 d-flex flex-column align-items-center">
              <Form.Group className="mb-3 w-100">
                <Form.Label>Altura (cm)</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  value={altura}
                  onChange={e => setAltura(e.target.value)}
                  placeholder="Digite sua altura"
                />
              </Form.Group >
              <Form.Group className="mb-3 w-100">
                <Form.Label>Peso (kg)</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  value={peso}
                  onChange={e => setPeso(e.target.value)}
                  placeholder="Digite seu peso"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100">
                <Form.Label>Idade</Form.Label>
                <Form.Control
                  type="text"
                  value={idade !== "" ? idade + " anos" : ""}
                  disabled
                  readOnly
                />
              </Form.Group>
              <Button type="submit" className="w-75 mt-2 fw-semibold title rounded-4 shadow-sm" disabled={salvando}>
                {salvando ? "Salvando..." : "Salvar"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export { UserEnrichment };