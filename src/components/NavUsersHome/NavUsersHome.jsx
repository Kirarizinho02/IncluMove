import { Dropdown, Nav } from "react-bootstrap";

const NavUsersHome = () => {
  return (
    <Nav defaultActiveKey='/' className="justify-content-center w-100" >
      <Nav.Item className="my-2">
        <Nav.Link className='fs-6 link-body-emphasis' href='/'>Profissionais</Nav.Link>
      </Nav.Item>
      <div className='vr'></div>
      <Nav.Item className="bg-tertiary rounded-4 mx-3 my-2">
        <Nav.Link className='fs-6 link-body-emphasis ' href='/home' eventKey='link-1'>Editar Perfil</Nav.Link>
      </Nav.Item>
      <div className='vr'></div>
      <Nav.Item>
        <Dropdown className="mx-3 my-2">
          <Dropdown.Toggle id="dropdown-autoclose-true" className="bg-secondary border-0 rounded-4 fs-6 p-2" >
            Novo Treino
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Treino Rápido</Dropdown.Item>
            <Dropdown.Item href="#">Treino Médio</Dropdown.Item>
            <Dropdown.Item href="#">Treino Pesado</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Nav>
  )
}

export { NavUsersHome };