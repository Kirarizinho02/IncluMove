import { Carousel } from "react-bootstrap";
import { compromissos1, compromissos2, compromissos3 } from "../../assets";
import { useTranslation } from "react-i18next";

const CommitmentsCarousel = () => {
  const { t } = useTranslation();

  return (
    <Carousel style={{ maxHeight: '70rem' }} className='mt-n5 mb-5'>
      <Carousel.Item className='w-100 h-100'>
        <Carousel.Caption className='mt-5'>
          <h1 className='title fw-bold'> 1. </h1>
          <h3 className='fw-medium'> {t('landing.commitments.diversity.title')}</h3>
        </Carousel.Caption>
        <div className='d-flex flex-column align-items-center mt-n4'>
          <img src={compromissos1} className='d-flex w-md-75' alt={t('landing.commitments.diversity.imgAlt')} style={{ maxWidth: "30rem" }}></img>
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
          <img src={compromissos2} className='d-flex w-md-75' alt={t('landing.commitments.education.imgAlt', 'Roda de pessoas diversas felizes')} style={{ maxWidth: "44rem", minHeight: "13rem", minWidth: "18rem" }}></img>
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
  );
}

export { CommitmentsCarousel };