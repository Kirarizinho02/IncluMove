import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { amigos } from "../../assets";
import { ButtonBack } from "../ButtonBack";
import { UseAppContext } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UserInformationExtraForm = () => {
  const { usuarioParcial, adicionarUsuario } = UseAppContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    objetivo: '',
    movimento_pernas: '',
    equipamento_treino: '',
    equipamento_apoio: '',
    foto: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
    treinos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!usuarioParcial) {
      alert('Informações básicas não encontradas.');
      navigate('/form/signup');
      return;
    }

    const usuarioCompleto = {
      ...usuarioParcial,
      ...form,
    };

    await adicionarUsuario(usuarioCompleto);
    console.log("Usuário completo a ser enviado:", usuarioCompleto);
    navigate('/form/login');
  };

  return (
    <Row className='vh-100'>
      <Col xs={12} md={6} className='align-items-center bg-white ms-md-2 d-flex flex-column justify-content-between shadow'>

        <Row className='w-100 mt-4'>
          <div className='d-flex justify-content-start ms-3 mb-4'>
            <ButtonBack previousPage={"/form/signup"} />
          </div>
        </Row>

        <Row className='w-100 mb-5 pb-5'>
          <div className='col-xl-8 col-xxl-8 w-lg-80 mx-auto'>
            <h1 className='text-start title fw-semibold'>Conte-nos mais sobre você!</h1>
            <p className='mt-n2'>Queremos te conhecer melhor! Para cada uma das perguntas, selecione a alternativa que mais se relaciona com a sua realidade.</p>

            <FloatingLabel controlId="floatingObjetivo" label="Objetivo" className="mb-3">
              <Form.Select name="objetivo" value={form.objetivo} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="Emagrecer">Meu objetivo é emagrecer</option>
                <option value="Musculos">Meu objetivo é ganhar massa muscular</option>
                <option value="Mudanca">Meu objetivo é mudar de rotina</option>
                <option value="Incomum">Meu objetivo é testar coisas novas</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingMovimento" label="Movimento" className="mb-3">
              <Form.Select name="movimento_pernas" value={form.movimento_pernas} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="Nulo">Não tenho movimento nas pernas</option>
                <option value="ParcialSingle">Tenho movimento parcial em apenas uma perna</option>
                <option value="Parcial">Tenho movimento parcial das duas pernas</option>
                <option value="Total">Tenho movimento total das pernas</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingEquipamentos" label="Equipamento" className="mb-3">
              <Form.Select name="equipamento_treino" value={form.equipamento_treino} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="NuloEquip">Não possuo nenhum equipamento listado</option>
                <option value="ParcialSingleEquip">Tenho halteres e elásticos</option>
                <option value="ParcialEquip">Tenho halteres, elásticos e uma barra</option>
                <option value="TotalEquip">Farei meus treinos em uma academia equipada</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingApoio" label="Apoio" className="mb-3">
              <Form.Select name="equipamento_apoio" value={form.equipamento_apoio} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="Bengala">Disponho de bengala ou andador</option>
                <option value="Cadeira de rodas">Disponho de uma cadeira de rodas</option>
                <option value="Pé">Consigo ficar em pé sem necessidade de ajuda ou apoio</option>
              </Form.Select>
            </FloatingLabel>

            <div className='d-flex flex-row-reverse'>
              <Button
                variant="tertiary"
                type="button"
                onClick={handleSubmit}
                className='w-50 mt-4 title fw-medium shadow'
              >
                Entrar
              </Button>
            </div>
          </div>
        </Row>

        <Row className='w-100 mb-4'>
          <p className='text-center w-100'>
            Já possui cadastro? <a href="/form/login" className='text-tertiary'>Entre na sua conta.</a>
          </p>
        </Row>
      </Col>

      <Col className='d-none d-md-flex justify-content-center align-items-center vh-100'>
        <img src={amigos} className='w-100' alt="Ilustração de amigos variados" />
      </Col>
    </Row>
  );
};

export { UserInformationExtraForm };