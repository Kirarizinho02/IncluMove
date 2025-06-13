import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { ButtonBack, ButtonLogOut, ButtonNewWorkout, GraphsComponent, LastWorkout, Loading, NavUsersHome, NewWorkout, ProfessionalsComponent, ProfilePicture } from "../../components";
import { UseAppContext } from "../../hooks";
import { UserStatistics } from "../../components/UserStatistics";

const Home = () => {
  const {selectedMenu} = UseAppContext();

  const {
    usuarioLog,
    exerciciosSelecionados,
    showNewWorkout,
  } = UseAppContext();

    const [loading, setLoading] = useState(true);
  
let conteudoPrincipal;
if (selectedMenu === "treinos") {
    conteudoPrincipal = showNewWorkout
      ? <NewWorkout exercicios={exerciciosSelecionados} usuarioLog={usuarioLog} />
      : <LastWorkout />;
  }else if (selectedMenu === "user") {
    conteudoPrincipal = (
      <UserStatistics />
    );
  } else {
    conteudoPrincipal = (
      <>
        <div className="w-100 my-4 d-flex flex-row justify-content-between ">
          <div className="d-flex ms-md-3">
            <ButtonBack previousPage={"/"} />
          </div>
          <div className="d-flex me-md-5">
            <ButtonLogOut />
          </div>
        </div>
        {usuarioLog ? (
          <>
            <div className="shadow rounded-circle">
              <ProfilePicture size={200} />
            </div>
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
      </>
    );
  }

  useEffect(() => {
    if (usuarioLog !== null) {
      setLoading(false);
    }
  }, [usuarioLog]);

  if (loading) return <Loading />;
  if (!usuarioLog) return <h2 className="title text-center mt-2">Usuário não encontrado. Faça login novamente.</h2>;

  return (
    <>
      <Col xl={11} md={12} className="bg-primary">
        {conteudoPrincipal}
      </Col>
   </>
  )
}

export { Home };
