import { Button, Col, Container, Dropdown, Nav, Row } from "react-bootstrap";
import { ButtonBack, ButtonLogOut, GraphsComponent, NavUsersHome, ProfessionalsComponent, ProfilePicture } from "../../components";
import { UseAppContext } from "../../hooks";

const Home = () => {
  const { usuarioLog } = UseAppContext();  

  return(
    <Row className="h-100">
      <Col xl={6} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary shadow p-5">
        <div className="w-100 my-4 d-flex flex-row justify-content-between">
          <div className="d-flex ms-md-3">
          <ButtonBack previousPage={"/"} />
          </div>
          <div className="d-flex me-md-5">
          <ButtonLogOut />
          </div>
        </div>
        {usuarioLog ? (
            <>
            <ProfilePicture foto={usuarioLog.foto} />
              <h2 className="title text-center mt-2">
                Olá, <span className="fw-bold">{usuarioLog.nome}</span>
              </h2>
              <h5 className="mt-n2 mb-3">{usuarioLog.email}</h5>
            </>
          ) : (
            <h2 className="title text-center mt-2">Carregando usuário...</h2>
          )}
          <NavUsersHome />
        {usuarioLog && <GraphsComponent usuario={usuarioLog} />}
        <ProfessionalsComponent />
      </Col>
      <Col xl={6} md={12} className="bg-white">
        Seu último treino:
      </Col>
    </Row>
  )
}

export { Home };  