import { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ButtonBack } from "../../";

import { useTranslation } from "react-i18next";
import { homem_supino } from "../../../assets";

import { UseAppContext, UseResize } from "../../../hooks";

// eslint-disable-next-line no-unused-vars
import { m, motion } from "framer-motion";

const UserInformationExtraForm = () => {
  const minHeightResize = UseResize();
  const { t } = useTranslation();

  const { usuarioParcial, adicionarUsuario } = UseAppContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    objetivo: '',
    movimento_pernas: '',
    equipamento_treino: '',
    equipamento_apoio: '',
    foto: 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png',
    treinos: [],
    altura: 0,
    peso: 0,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (
      !form.objetivo.trim() ||
      !form.movimento_pernas.trim() ||
      !form.equipamento_treino.trim() ||
      !form.equipamento_apoio.trim()
    ) {
      setStatus({ type: "error", message: t('userExtra.errors.required') });
      return;
    }

    if (!usuarioParcial) {
      alert(t('userExtra.errors.noBasicInfo'));
      navigate('/form/signup');
      return;
    }

    setStatus(null);

    const usuarioCompleto = {
      ...usuarioParcial,
      ...form,
    };

    await adicionarUsuario(usuarioCompleto);
    navigate('/form/login');
  };

  return (
    <Row className="h-100 p-0 m-0">
      <Col
        md={12}
        lg={6}
        className='align-items-center bg-body ms-lg-3 my-lg-3 d-flex flex-column justify-content-between shadow-sm rounded-lg-4'
        style={{ minHeight: minHeightResize }}
      >

        <Row className='w-100 mt-4'>
          <div className='d-flex justify-content-start ms-3 mb-4'>
            <ButtonBack previousPage={"/form/signup"} />
          </div>
        </Row>

        <Row className='w-100 mb-5 pb-5'>
          <div className='col-xl-8 col-xxl-8 w-lg-90 mx-auto'>
            <h1 className='text-start title fw-semibold'>{t('userExtra.title')}</h1>
            <p className='mt-n2'>{t('userExtra.subtitle')}</p>

            {status && status.type === "error" && (
              <Alert variant="danger" className="mb-3 rounded-4">
                {status.message}
              </Alert>
            )}

            <FloatingLabel controlId="floatingObjetivo" label={t('userExtra.form.goal')} className="mb-3">
              <Form.Select name="objetivo" value={form.objetivo} onChange={handleChange} className="rounded-4">
                <option value="">{t('userExtra.form.select')}</option>
                <option value="Emagrecer">{t('userExtra.form.goalOptions.loseWeight')}</option>
                <option value="Musculos">{t('userExtra.form.goalOptions.gainMuscle')}</option>
                <option value="Mudanca">{t('userExtra.form.goalOptions.changeRoutine')}</option>
                <option value="Incomum">{t('userExtra.form.goalOptions.tryNew')}</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingMovimento" label={t('userExtra.form.legsMovement')} className="mb-3">
              <Form.Select name="movimento_pernas" value={form.movimento_pernas} onChange={handleChange} className="rounded-4">
                <option value="">{t('userExtra.form.select')}</option>
                <option value="Nulo">{t('userExtra.form.legsOptions.none')}</option>
                <option value="ParcialSingle">{t('userExtra.form.legsOptions.partialOne')}</option>
                <option value="Parcial">{t('userExtra.form.legsOptions.partialBoth')}</option>
                <option value="Total">{t('userExtra.form.legsOptions.total')}</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingEquipamentos" label={t('userExtra.form.equipment')} className="mb-3">
              <Form.Select name="equipamento_treino" value={form.equipamento_treino} onChange={handleChange} className="rounded-4">
                <option value="">{t('userExtra.form.select')}</option>
                <option value="NuloEquip">{t('userExtra.form.equipmentOptions.none')}</option>
                <option value="ParcialSingleEquip">{t('userExtra.form.equipmentOptions.dumbbellsBands')}</option>
                <option value="ParcialEquip">{t('userExtra.form.equipmentOptions.dumbbellsBandsBar')}</option>
                <option value="TotalEquip">{t('userExtra.form.equipmentOptions.gym')}</option>
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingApoio" label={t('userExtra.form.support')} className="mb-3">
              <Form.Select name="equipamento_apoio" value={form.equipamento_apoio} onChange={handleChange} className="rounded-4">
                <option value="">{t('userExtra.form.select')}</option>
                <option value="Bengala">{t('userExtra.form.supportOptions.cane')}</option>
                <option value="Cadeira de rodas">{t('userExtra.form.supportOptions.wheelchair')}</option>
                <option value="Pé">{t('userExtra.form.supportOptions.stand')}</option>
              </Form.Select>
            </FloatingLabel>

            <div className='d-flex flex-row-reverse'>
              <Button type="submit" className='w-50 mt-4 title fw-medium shadow cta-gradient-btn text-body rounded-4' onClick={handleSubmit} >
                {t('userExtra.form.submit')}
              </Button>
            </div>
          </div>
        </Row>

        <Row className='w-100 mb-4'>
          <p className='text-center w-100'>
            {t('userExtra.alreadyHaveAccount')} <a href="/form/login" className='link-tertiary signuplink'>{t('userExtra.loginLink')}</a>
          </p>
        </Row>
      </Col>

      <Col className='d-none d-lg-flex justify-content-center align-items-center'>
        <img src={homem_supino} className="w-100" alt={t('userExtra.imgAlt')} />
      </Col>
    </Row>
  );
};

export { UserInformationExtraForm };