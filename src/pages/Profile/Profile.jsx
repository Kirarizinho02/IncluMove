import { Col, Row } from "react-bootstrap"
import { GraphsComponent, UserToolbar, ProfilePicture, LevelComponent } from "../../components"
import { UseAppContext } from "../../hooks"
import { Trans } from "react-i18next"

const Profile = () => {
  const { usuarioLog } = UseAppContext();

  return (
    <>
        <Row>
          <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary p-5">
          {usuarioLog ? (
            <>
              <div className="shadow rounded-circle">
                <ProfilePicture size={200} />
              </div>
              <h2 className="title text-center mt-2">
                <Trans i18nKey="profile.greeting" values={{ name: usuarioLog.nome }}>
                  Olá, <span className="fw-bold">{usuarioLog.nome}</span>
                </Trans>
              </h2>
              <h5 className="mt-n2 mb-3">{usuarioLog.email}</h5>
            </>
          ) : (
            <h2 className="title text-center mt-2">Carregando usuário...</h2>
          )}
          <UserToolbar />
          </Col>
          <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary">
            {usuarioLog && <GraphsComponent usuario={usuarioLog} />}
          </Col>
          <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary">
            <LevelComponent />
          </Col>
          </Row>
    </>
  );
}

export { Profile };