import { Container, Nav } from 'react-bootstrap';

import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <Container>
      <header className='d-flex flex-wrap justify-content-center align-items-center py-3'>
        <a className='d-flex align-items-center mb-3 mb-md-0 me-2 me-md-auto link-body-emphasis text-decoration-none' href="/">
          <img className='me-3 ms-md-3' height={70} src={logo} />
          <h1>IncluMove</h1>
        </a>
        <Nav defaultActiveKey='/' as='ul'>
          <Nav.Item as='li'>
            <Nav.Link className='fs-4 link-body-emphasis' href='/'>Página Inicial</Nav.Link>
          </Nav.Item>
          <div className='vr'></div>
          <Nav.Item as='li'>
            <Nav.Link className='fs-4 link-body-emphasis' href='/about' eventKey='link-1'>Sobre</Nav.Link>
          </Nav.Item>
          <div className='vr'></div>
          <Nav.Item as='li'>
            <Nav.Link className='fs-4 link-body-emphasis' href='/form/login' eventKey='link-2'>Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
    </Container>
  )
}

export { Header };

