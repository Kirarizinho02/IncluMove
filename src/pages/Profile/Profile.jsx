import { Col } from "react-bootstrap"
import { GraphsComponent, UserToolbar, ProfilePicture, ProfessionalsComponent } from "../../components"
import { UseAppContext } from "../../hooks"

const Profile = () => {
  const { usuarioLog } = UseAppContext();

  return (  
    <>
     <Col xl={12} md={12} className="d-flex flex-column justify-content-center align-items-center bg-primary p-5 h-100">
         <div className="w-100 d-flex flex-row justify-content-between ">

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
         <UserToolbar />
         {usuarioLog && <GraphsComponent usuario={usuarioLog} /> }
         <ProfessionalsComponent />
       </Col>
      </>
  );        
}

export { Profile };