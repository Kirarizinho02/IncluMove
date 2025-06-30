import { Col, Container, Row } from 'react-bootstrap'

import { inclumove_team, passaro_illustration, passaro_illustration_dark, stars } from '../../assets';
import { UseThemeContext } from '../../hooks';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const theme = UseThemeContext();

  return (
    <div className='overflow-x-hidden'>
      <div className="bg-primary">
        <Container>
        <Row className='mx-xxl-2 d-flex align-items-center'>
            <Col md={12} lg={6} className='p-3'>
              <h1 className='title fw-bold mt-exc-3 text-center text-md-start'> {t('about.mission.title')} </h1>
              <p className='pe-xl-5 me-xl-5'>
               {t('about.mission.desc')}
              </p>
              <img className='d-none d-lg-block position-absolute ms-n5' height={290} src={stars} />
            </Col>
            <Col md={12} lg={6}>
              {theme.theme === 'dark' ? (
                <img className='mw-100 mb-5' src={passaro_illustration_dark} alt={t('about.bird.alt')} />
              ) : (
                <img className='mw-100' src={passaro_illustration} alt={t('about.bird.alt')} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <div className='grad-primary-to-body-bg' />
      <div className='pt-3 h-100'> 
        <Container>
          <Row className='mt-5 pt-2'>
            <Col md={12} lg={6} className='d-flex justify-content-center align-items-center'>
              <img className='mw-100 shadow' src={inclumove_team} style={{borderRadius: "10px"}} alt={t('about.team.imgAlt')} />
            </Col>
            <Col md={12} lg={6} className='d-flex flex-column px-3 md-px-5'>
              <h1 className='fw-bold title mt-exc-3 text-center text-md-start'> {t('about.team.title')} </h1>
              <p>
                <Trans i18nKey="about.team.desc" components={{
                  strong: <span className="fw-semibold" />,
                  br: <br />
                }} />
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
};

export { About };
