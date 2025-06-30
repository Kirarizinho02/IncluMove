import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "motion/react"
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';

import { ana_lemos, compromissos1, compromissos2, compromissos3, line_1, line_2, line_3, marco_aurelio, mulher_cadeira, mulher_cadeira_dark, ricardo_junior, stars, card_pin } from '../../assets';
import { LineFiller } from '../../components';
import { UseThemeContext } from '../../hooks';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const LandingPage = () => {
  const theme = UseThemeContext();
  const { t } = useTranslation();

  const marcoRef = useRef(null);
  const anaRef = useRef(null);
  const ricardoRef = useRef(null);

  const marcoInView = useInView(marcoRef, { once: true });
  const anaInView = useInView(anaRef, { once: true });
  const ricardoInView = useInView(ricardoRef, { once: true });

  return (
    <>
      <div className='bg-primary pt-4'>
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <p className='title text-big fw-medium'>
                {t('landing.hero.title')} <span className='fw-bolder'>{t('landing.hero.all')}</span>
              </p>
              <p className='pe-xl-5 me-xl-5'>
                {t('landing.hero.desc')} <span className='fw-semibold'>IncluMove</span> {t('landing.hero.desc2')}
              </p>
              <div className='d-flex justify-content-center'>
                <Button
                  size='lg'
                  className='col-sm-6 col-md-4 col-lg-6 col-xl-4 mb-3 me-md-auto rounded-5 bg-tertiary text-body cta-gradient-btn'
                  href='/form/signup'
                >
                  <span className='title fw-bold '>{t('landing.hero.cta')}  </span> <FaArrowRight className='ms-1 mb-1' size="1rem" />
                </Button>
              </div>
              <p className='text-center text-md-start'>
                {t('landing.hero.haveAccount')}
                <a className='text-decoration-none link-tertiary signuplink' href='/form/login'>
                  {t('landing.hero.login')}
                </a>
              </p>
            </Col>
            <Col md={12} lg={6} className=' d-flex justify-content-center align-items-center'>
              {theme.theme === 'dark' ? (
                <img className='w-100' src={mulher_cadeira_dark} alt={t('landing.hero.imgAlt')} />
              ) : (
                <img className='w-100' src={mulher_cadeira} alt={t('landing.hero.imgAlt')} />
              )}
            </Col>
          </Row>
          <img className='d-none d-lg-block position-absolute ms-n5 mt-xxl-n5' src={stars} alt="" />
          <p className='title fs-1 text-center mt-lg-5 mt-xxl-3 mb-0'>
            {t('landing.discover')} <span className='fw-bold'>IncluMove</span>
          </p>
          <div className='d-flex justify-content-center'><LineFiller className='mb-n5 test' src={line_1} height={150} /></div>
        </Container>
      </div>

      <div className='grad-primary-to-body-bg' />
      <div className='pt-3 bg-body'>
        <Container className='bg-body'>
          <p className='title text-medium fw-bold text-center m-0'>{t('landing.professionals.title')}</p>
          <p className='text-center pb-2'>
            {t('landing.professionals.desc')}
          </p>
          <Row className='mt-5'>
            <Col md={12} lg={4} className='d-flex justify-content-center' style={{ transform: 'translateY(-2rem)' }}>
              <motion.div
                ref={marcoRef}
                initial={{ opacity: 0, y: 30 }}
                animate={marcoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="position-relative"
              >
                <img
                  src={card_pin}
                  alt=""
                  className="position-absolute card-pin-img"
                  style={{
                    opacity: marcoInView ? 1 : 0,
                    zIndex: 2,
                  }}
                />
                <div className='text-center me-lg-auto'>
                  <img src={marco_aurelio} alt={t('landing.professionals.marco.imgAlt')} />
                  <h2 className='title fw-bold'>{t('landing.professionals.marco.name')}</h2>
                  <p className='w-75 mx-auto'>
                    {t('landing.professionals.marco.desc')}
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col md={12} lg={4} className='d-flex justify-content-center'>
              <motion.div
                ref={anaRef}
                initial={{ opacity: 0, y: 30 }}
                animate={anaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.75, ease: "easeOut" }}
                className="position-relative"
              >
                <img
                  src={card_pin}
                  alt=""
                  className="position-absolute card-pin-img"
                  style={{
                    opacity: anaInView ? 1 : 0,
                    zIndex: 2,
                  }}
                />
                <div className='text-center me-lg-auto'>
                  <img src={ana_lemos} alt={t('landing.professionals.ana.imgAlt')} />
                  <h2 className='title fw-bold'>{t('landing.professionals.ana.name')}</h2>
                  <p className='w-75 mx-auto'>
                    {t('landing.professionals.ana.desc')}
                  </p>
                </div>
              </motion.div>
            </Col>
            <Col md={12} lg={4} className='d-flex justify-content-center' style={{ transform: 'translateY(2rem)' }}>
              <motion.div
                ref={ricardoRef}
                initial={{ opacity: 0, y: 30 }}
                animate={ricardoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 2.25, ease: "easeOut" }}
                className="position-relative"
              >
                <img
                  src={card_pin}
                  alt=""
                  className="position-absolute card-pin-img"
                  style={{
                    opacity: ricardoInView ? 1 : 0,
                    zIndex: 2,
                  }}
                />
                <div className='text-center me-lg-auto'>
                  <img src={ricardo_junior} alt={t('landing.professionals.ricardo.imgAlt')} />
                  <h2 className='title fw-bold'>{t('landing.professionals.ricardo.name')}</h2>
                  <p className='w-75 mx-auto'>
                    {t('landing.professionals.ricardo.desc')}
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
          <div className='d-flex justify-content-center mt-md-4 mt-2'><LineFiller className='mb-n5 test' src={line_2} height={210} /></div>
        </Container>
      </div>
      <div className='grad-body-bg-to-primary' />
      <div className='bg-primary'>
        <Container>
          <p className='title text-medium fw-bold text-center m-0'>{t('landing.commitments.title')}</p>
          <p className='text-center'>
            {t('landing.commitments.desc')}
          </p>
          <Carousel style={{ maxHeight: '70rem' }} className='mt-n5 mb-5'>
            <Carousel.Item className='w-100 h-100'>
              <Carousel.Caption className='mt-5'>
                <h1 className='title fw-bold'> 1. </h1>
                <h3 className='fw-medium'> {t('landing.commitments.diversity.title')}</h3>
              </Carousel.Caption>
              <div className='d-flex flex-column align-items-center mt-n4'>
                <img src={compromissos1} className='d-flex i w-md-75' alt={t('landing.commitments.diversity.imgAlt')} style={{ maxWidth: "30rem" }}></img>
              </div>
              <Carousel.Caption >
                <div className='w-100 d-flex flex-column align-items-center mb-2 '>
                  <p className='w-50 w-lg-80 d-flex me-2'>
                    {t('landing.commitments.diversity.desc')}
                  </p>
                </div>
              </Carousel.Caption >
            </Carousel.Item>
            <Carousel.Item className='w-100 h-100'>
              <Carousel.Caption className='mt-5'>
                <h1 className='title fw-bold'> 2. </h1>
                <h3 className='fw-medium'> {t('landing.commitments.education.title')}</h3>
              </Carousel.Caption>
              <div className='d-flex flex-column align-items-center mt-n4 mb-2'>
                <img src={compromissos2} className='d-flex w-md-75' alt={t('landing.commitments.education.imgAlt', 'Roda de pessoas diversas felizes')} style={{ maxWidth: "44rem" }}></img>
              </div>
              <Carousel.Caption>
                <div className='w-100 d-flex flex-column align-items-center mb-2 '>
                  <p className='w-50 w-lg-80 d-flex me-2'>
                    {t('landing.commitments.education.desc')}
                  </p>
                </div>
              </Carousel.Caption >
            </Carousel.Item>
            <Carousel.Item className='w-100 h-100'>
              <Carousel.Caption className='mt-5'>
                <h1 className='title fw-bold'> 3. </h1>
                <h3 className='fw-medium'>{t('landing.commitments.wellbeing.title', 'Bem-estar')}</h3>
              </Carousel.Caption>
              <div className='d-flex flex-column align-items-center mt-n4'>
                <img src={compromissos3} className='d-flex w-md-75' alt={t('landing.commitments.wellbeing.imgAlt')} style={{ maxWidth: "30rem" }}></img>
              </div>
              <Carousel.Caption>
                <div className='w-100 d-flex flex-column align-items-center mb-2 '>
                  <p className='w-50 w-lg-80 d-flex me-2'>
                    {t('landing.commitments.wellbeing.desc', 'A OMS define saúde como um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença. Isso significa que para ter uma vida plena e saudável, é necessário cuidar de todas as dimensões do bem-estar.')}
                  </p>
                </div>
              </Carousel.Caption >
            </Carousel.Item>
          </Carousel>
          <div className='d-flex justify-content-center mt-n5'><LineFiller className='mb-n5 test' src={line_3} height={150} /></div>
        </Container>
      </div>
      <div className='grad-primary-to-body-bg' />
      <div className='pt-4' >
        <Container>
          <Row>
            <p className='title text-medium fw-bold text-center m-0 mt-n2'>{t('landing.project.title')}</p>
            <Col md={12}>
              <div className='w-100 d-flex align-items-center flex-column'>
                <p className='text-center w-75 px-5'>
                  {t('landing.project.desc')} <span className='fw-bold'> Hackteen </span> — {t('landing.project.desc2')} <br />
                  <br />
                  {t('landing.project.video')}
                </p>
              </div>
            </Col>
            <Col md={12} className='d-flex justify-content-center'>
              <iframe
                className='mw-100 rounded-4 shadow-lg'
                height={360}
                width={640}
                src='https://youtube.com/embed/Muj0ygfKkpo'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
};

export { LandingPage };