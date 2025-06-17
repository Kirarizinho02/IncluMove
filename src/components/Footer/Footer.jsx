import { Container } from 'react-bootstrap';

import { logo } from '../../assets';

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div>
      <Container>
        <footer className='d-flex flex-wrap justify-content-between align-items-center py-4 mt-3 border-top'>
          <div className='col-md-4 d-flex align-items-center'>
            <a className='me-2 text-body-secondary text-decoration-none lh-1' href="/">
              <img height={32} src={logo} alt='Logo do IncluMove' />
            </a>
          </div>
          <div className='col-md-4 d-flex justify-content-center'>
            <span className='text-body-secondary'>Copyright © {year} - IncluMove</span>
          </div>
          <div className='col-md-4' />
        </footer>
      </Container>
    </div>
  )
}

export { Footer };

