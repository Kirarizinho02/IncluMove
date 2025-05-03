import { Container } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <Container className='fixed-bottom'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-4 mt-3 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a className='me-2 text-body-secondary text-decoration-none lh-1' href="/">
            <img height={32} src={logo} />
          </a>
        </div>
        <div className='col-md-4 d-flex justify-content-center'>
          <span className='text-body-secondary'>Copyright © 2025 - IncluMove</span>
        </div>
        <div className='col-md-4' />
      </footer>
    </Container>
  )
}

export { Footer };

