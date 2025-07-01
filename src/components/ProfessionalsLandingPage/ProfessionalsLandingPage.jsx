import { useRef } from "react";

// eslint-disable-next-line no-unused-vars
import { useInView, motion } from "framer-motion";

import { Col, Container, Row } from "react-bootstrap";
import { ana_lemos, card_pin, line_2, marco_aurelio, ricardo_junior } from "../../assets";
import { useTranslation } from "react-i18next";
import { LineFiller } from "../CommonUI";

const ProfessionalsLandingPage = () => {
  const { t } = useTranslation();

    const marcoRef = useRef(null);
    const anaRef = useRef(null);
    const ricardoRef = useRef(null);
  
    const marcoInView = useInView(marcoRef, { once: true });
    const anaInView = useInView(anaRef, { once: true });
    const ricardoInView = useInView(ricardoRef, { once: true });

  return (
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
                <div className='text-center me-lg-auto '>
                  <img src={ricardo_junior} alt={t('landing.professionals.ricardo.imgAlt')} />
                  <h2 className='title fw-bold'>{t('landing.professionals.ricardo.name')}</h2>
                  <p className='w-75 mx-auto'>
                    {t('landing.professionals.ricardo.desc')}
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
          <div className='d-flex justify-content-center mt-2 pt-4 pt-lg-0 pb-2'><LineFiller className='mb-n5 inverted' src={line_2} height={210} /></div>
        </Container>
  )
}
export { ProfessionalsLandingPage };