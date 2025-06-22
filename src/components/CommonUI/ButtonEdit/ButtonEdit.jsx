import { useState } from "react";
import { Button, Modal, Form, Toast } from "react-bootstrap";
import { UseAppContext } from "../../../hooks";
import { api } from "../../../services/api";

const ButtonEdit = () => {
  const { usuarioLog, mudarFoto, atualizarUserLogin } = UseAppContext();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [nome, setNome] = useState(usuarioLog?.nome || "");
  const [email, setEmail] = useState(usuarioLog?.email || "");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState(usuarioLog?.foto || null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      if (foto && foto !== usuarioLog?.foto) {
        await mudarFoto(foto);
      }

      const atualizacoes = {};
      if (nome && nome !== usuarioLog.nome) atualizacoes.nome = nome;
      if (email && email !== usuarioLog.email) atualizacoes.email = email;
      if (senha) atualizacoes.senha = senha;

      if (Object.keys(atualizacoes).length > 0) {
        await api.patch(`/usuarios/${usuarioLog.id}`, atualizacoes);
      }
      atualizarUserLogin();
      setShowModal(false);
      setShowToast(true);
    } catch (err) {
      err("Erro ao atualizar informações.");
    }
    setLoading(false);
  };

  return (
    <>
      <Button variant="secondary" className="title btn-edit-animated gap-2 fs-4 p-3 w-100 rounded-4" onClick={() => setShowModal(true)}>
        Editar perfil
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="title fs-3">Editar perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="d-flex flex-column align-items-center mb-3">
              <label htmlFor="fotoPerfilInput" style={{ cursor: "pointer" }}>
                <img
                  src={foto || usuarioLog?.foto || "/default-profile.png"}
                  alt="Foto de perfil"
                  className="rounded-circle shadow border border-tertiary border-3"
                  style={{ width: 100, height: 100, objectFit: "cover" }}
                />
                <Form.Control
                  id="fotoPerfilInput"
                  type="file"
                  className="d-none"
                  onChange={handleFileChange}
                />
              </label>
              <small className="text-muted mt-1">Clique na foto para alterar</small>
            </div>
            <Form.Group className="mb-3">
              <Form.Label className="title">Nome</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="title">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="title">Nova senha</Form.Label>
              <Form.Control
                type="password"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                placeholder="Caso não queira alterar, deixe em branco."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="accent" onClick={handleSave} disabled={loading}>
            {loading ? "Salvando suas informações..." : "Salvar"}
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        onClose={() => setShowToast(false)}
        show={showToast}
        bg="accent"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          minWidth: 220
        }}
      >
        <Toast.Header>
          <strong className="me-auto fs-6 title">Perfil</strong>
        </Toast.Header>
        <Toast.Body className="text-black fs-6">
          Informações atualizadas com sucesso!
        </Toast.Body>
      </Toast>
    </>
  );
};

export { ButtonEdit };