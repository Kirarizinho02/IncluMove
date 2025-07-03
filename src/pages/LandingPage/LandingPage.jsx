import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { Button, Col, Container, Row } from 'react-bootstrap';

import { line_1, line_3, mulher_cadeira, mulher_cadeira_dark, stars } from '../../assets';
import { CommitmentsCarousel, LineFiller, ProfessionalsLandingPage } from '../../components';
import { UseThemeContext } from '../../hooks';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = UseThemeContext();
  const { t } = useTranslation();

  const [ctaHovered, setCtaHovered] = useState(false);

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
                  className='cta-gradient-btn col-sm-6 col-md-4 col-lg-6 col-xl-4 mb-3 me-md-auto rounded-5 bg-tertiary text-body'
                  onClick={() => navigate('/form/signup')}
                  onMouseEnter={() => setCtaHovered(true)}
                  onMouseLeave={() => setCtaHovered(false)}
                  onFocus={() => setCtaHovered(true)}
                  onBlur={() => setCtaHovered(false)}
                >
                  <span className='title fw-bold '>{t('landing.hero.cta')}  </span>
                  <motion.span

                    animate={{ x: ctaHovered ? 10 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ display: "inline-block" }}
                  >
                    <FaArrowRight size="1rem" className="ms-1 mb-1" />
                  </motion.span>
                </Button>
              </div>
              <p className='text-center text-md-start'>
                {t('landing.hero.haveAccount')}
                <a className='text-decoration-none signuplink' href='/form/login'>
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
          <div className='d-flex justify-content-center'><LineFiller className='mb-n5 invered' src={line_1} height={150} /></div>
        </Container>
      </div>

      <div className='grad-primary-to-body-bg' />
      <div className='pt-3 bg-body'>
        <ProfessionalsLandingPage />
      </div>
      <div className='grad-body-bg-to-primary' />
      <div className='bg-primary'>
        <Container>
          <p className='title text-medium fw-bold text-center m-0'>{t('landing.commitments.title')}</p>
          <p className='text-center'>
            {t('landing.commitments.desc')}
          </p>
          <CommitmentsCarousel />
          <div className='d-flex justify-content-center mt-n5'><LineFiller className='mb-n5 inverted' src={line_3} height={150} /></div>
        </Container>
      </div>
      <div className='grad-primary-to-body-bg' />
      <div className='pt-4 bg-body' >
        <Container className='bg-body'>
          <Row>
            <p className='title text-medium fw-bold text-center m-0 mt-n4'>{t('landing.project.title')}</p>
            <Col md={12}>
              <div className='w-100 d-flex align-items-center flex-column'>
                <p className='text-center w-75 w-md-100 px-md-5 px-2'>
                  {t('landing.project.desc')} <span className='fw-bold'> Hackteen </span> — {t('landing.project.desc2')} <br />
                  <br />
                  {t('landing.project.video')}
                </p>
              </div>
            </Col>
            <Col md={12} className='d-flex justify-content-center'>
              <iframe
                className='mw-100 rounded-4 shadow-lg mb-4'
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