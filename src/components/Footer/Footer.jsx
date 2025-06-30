import { Container, Nav } from 'react-bootstrap';

import { logo_inset } from '../../assets';
import { FaGithub } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const year = new Date().getFullYear()
  const { t } = useTranslation();

  return (

    <Container fluid
      className='bg-body-tertiary border-top bg-body-tertiary'
      style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem' }}
    >
      <Container>
        <footer className='d-flex align-items-center justify-content-center w-100 py-4 mt-3 flex-column'>
            <div className='d-flex align-items-center justify-content-between w-100 mb-3'>
              <a className='d-flex align-items-center mb-3 link-body-emphasis text-decoration-none me-auto' href='/'>
                <img className='me-2' height={56} src={logo_inset} alt={t('nav.logoAlt')} />
                <span className='title fw-medium fs-2'>Inclu</span> <span className='title fw-bold fs-2'>Move</span>
              </a>
              <a
                href='https://github.com/Kirarizinho02/IncluMove'
                className='link-body-emphasis text-decoration-none ms-auto mb-3 flex-column flex-md-row'
              >
                <FaGithub size="2rem" />
              </a>
            </div>
            <div>
              <Nav
                activeKey={location.pathname}
                as='ul'
                className='justify-content-between d-flex py-2 me-auto gap-4 flex-column flex-md-row'
              >
                <Nav.Item as='li'>
                  <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/' eventKey='/'>{t('nav.home')}</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/about' eventKey='/about'>{t('nav.about')}</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/faq' eventKey='/faq'>{t('nav.faq')}</Nav.Link>
                </Nav.Item>
                <Nav.Item as='li'>
                  <Nav.Link className='fs-5 link-body-emphasis header-link px-3 text-center' href='/contact' eventKey='/contact'>{t('nav.contact')}</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className='d-flex align-items-center gap-3'>

            </div>
            <div className='mt-3 border-top w-100 pt-3 d-flex justify-content-center'>
              <span className='text-body-secondary text-center'>© {year} IncluMove. {t('nav.rights')}</span>
            </div>
        </footer>
      </Container>
    </Container>
  )
}

export { Footer };

