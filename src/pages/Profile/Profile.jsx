import { Col, Container, Row } from "react-bootstrap"
import { GraphsComponent, UserToolbar, ProfilePicture, LevelComponent, Loading, UserEnrichment } from "../../components"
import { UseAppContext } from "../../hooks"
import { Trans } from "react-i18next"

const Profile = () => {
  const { usuarioLog } = UseAppContext();

  const firstName = usuarioLog?.nome ? usuarioLog.nome.trim().split(" ")[0] : "";

  return (
    <>
      <Container fluid className="d-none d-md-flex flex-column justify-content-center align-items-center p-0 h-100">
        <Row className="ps-2 pe-2 h-lg-100 w-100">
          {usuarioLog ? (
            <>
              <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary p-2">
                <div className="shadow-sm rounded-circle mb-1 border border-2 border-body p-1">
                  <ProfilePicture size={200} />
                </div>
                <h2 className="title text-center mt-2">
                  <Trans i18nKey="profile.greeting" values={{ name: firstName }}>
                    Olá, <span className="fw-bold">{firstName}</span>
                  </Trans>
                </h2>
                <h5 className="mt-n2 mb-3">{usuarioLog.email}</h5>
                <UserToolbar />
              </Col>
              <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary">
                {usuarioLog && <GraphsComponent usuario={usuarioLog} />}
              </Col>
              <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary">
                <LevelComponent />
                            <UserEnrichment />
              </Col>
            </>
          ) : (
            <Loading />
          )}
        </Row>
      </Container>

      <Container fluid className="d-flex d-md-none flex-column justify-content-center align-items-center p-2 m-0">
        <Row className="ps-2 pe-2 h-75 w-100">
          <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary p-2">
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
              <Loading />
            )}
            <UserToolbar />
          </Col>
          <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary mb-1 p-2">
            {usuarioLog && <GraphsComponent usuario={usuarioLog} />}
          </Col>
          <Col xl={4} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary mb-1">
            <LevelComponent />
            <UserEnrichment />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Profile };