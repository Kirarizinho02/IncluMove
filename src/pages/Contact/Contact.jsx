import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { FaClock, FaLocationPin, FaLocationPinLock, FaMessage } from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { flowers } from "../../assets";


const Contact = () => {
  const { t } = useTranslation();

  const motivos = t('contact.motive.options', { returnObjects: true }) || [];
  const [form, setForm] = useState({ name: "", email: "", motivo: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulação de envio
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 800);

  };

  return (
    <Container fluid className="w-100 m-0 p-0 bg-primary">
      <Container>
        <Row className='mx-xxl-2 d-flex align-items-center'>
          <Col md={12} lg={6} className='p-3'>
            <h1 className='title fw-bold mt-exc-3 text-center text-md-start'>
              {t('contact.title')}
            </h1>
            <p className='pe-xl-5 me-xl-5 text-center text-md-start'>
              {t('contact.subtitle')}
            </p>
            <img src={flowers} className='d-none d-lg-block position-absolute ms-n5 mt-4 py-2 mb-5' height={280} alt="Decorative flowers" />
          </Col>
          <Col md={12} lg={6} className="p-3">
            <Form onSubmit={handleSubmit} className="rounded-4 bg-body p-4 shadow-sm">
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label className="title">{t('contact.form.name')}</Form.Label>
                <Form.Control
                  className="rounded-4"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label className="title">{t('contact.form.email')}</Form.Label>
                <Form.Control
                  className="rounded-4"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </Form.Group>
              <Form.Group className="my-3" controlId="contactMotivo">
                <Form.Label className="title">{t('contact.motive.label')}</Form.Label>
                <Form.Select
                  name="motivo"
                  value={form.motivo}
                  onChange={handleChange}
                  required
                  className="rounded-4"
                >
                  <option value="" disabled>
                    {t('contact.motive.label')}
                  </option>
                  {Array.isArray(motivos) && motivos.map(m => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label className="title">{t('contact.message.label')}</Form.Label>
                <Form.Control
                  className="rounded-4"
                  as="textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder={t('contact.message.placeholder')}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 fw-semibold rounded-pill shadow-sm bg-tertiary" >
                {t('contact.submitButton.text')}
              </Button>
              {status === "success" && (
                <Alert variant="success" className="mt-3">
                  {t('contact.successMessage')}
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="danger" className="mt-3">
                  {t('contact.errorMessage')}
                </Alert>
              )}
            </Form>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-body w-100 m-0 p-0">
        <div className="grad-primary-to-body-bg w-100" />
        <Container>

          <div className="w-100 text-center mt-3 mb-4 d-flex align-items-center">
            <hr className="flex-grow-1 border-secondary opacity-50 m-0" />
            <span className="px-3 text-body-secondary fw-semibold">
              {t('contact.findUs')}
            </span>
            <hr className="flex-grow-1 border-secondary opacity-50 m-0" />
          </div>
          <Row className="d-flex justify-content-center flex-row bg-body">
            <Col lg={4} md={12} className="justify-content-start d-flex align-items-center flex-column pb-4">
              <FaLocationPin size="2rem" />
              <h5 className="title fw-semibold pt-2"> Onde Estamos </h5>
              <a href="https://maps.app.goo.gl/4218V4uit7xcUcKAA" className="link-body-emphasis w-50 text-center text-decoration-none text-tertiary" target="_blank" rel="noopener noreferrer">
                <span className="fw-semibold"> Av. Orosimbo Maia, 2600 - Cambuí, Campinas - SP, 13024-045</span>
              </a>
            </Col>
            <Col lg={4} md={12} className="justify-content-start d-flex align-items-center flex-column pb-4">
              <FaMessage size="2rem" />
              <h5 className="title fw-semibold pt-2"> Fale Conosco </h5>
              <a href="mailto: Inclumove@gmail.com" className="link-body-emphasis w-50 text-center text-decoration-none text-tertiary mb-1" target="_blank" rel="noopener noreferrer">
                <span className="fw-semibold"> <FaEnvelope size="1.2rem" className="mb-1 me-1" /> inclumove@gmail.com </span>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5519987269928" className="link-body-emphasis w-50 text-center text-decoration-none text-tertiary mb-1" target="_blank" rel="noopener noreferrer">
                <span className="fw-semibold"> <FaPhone size="1.2rem" className="mb-1 me-1" /> WhatsApp </span>
              </a>
            </Col>
            <Col lg={4} md={12} className="justify-content-start d-flex align-items-center flex-column pb-4">
              <FaClock size="2rem" />
              <h5 className="title fw-semibold pt-2"> Horário de Atendimento </h5>
              <p className="text-center text-body-secondary">
                <span className="fw-semibold"> Segunda a Sexta: </span> 07:45 - 15:45 <br />
                <span className="fw-semibold"> Sábado: </span> 07:45 - 12:15 <br />
                <span className="fw-semibold"> Domingo: </span> Fechado
              </p>
            </Col>
            <Col lg={12} className="d-flex justify-content-center align-items-center pb-4 flex-column">
              <iframe className="rounded-4 shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.683949634015!2d-47.049291288300076!3d-22.888130679181792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8cf58413de7e5%3A0x1bc2dcd07edbb973!2sETEC%20Bento%20Quirino!5e0!3m2!1spt-BR!2sbr!4v1751482324116!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
};

export { Contact };