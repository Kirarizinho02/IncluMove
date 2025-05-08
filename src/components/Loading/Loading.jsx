import { UseAppContext } from "../../hooks";

const Loading = () => {
  const { usuarioLog } = UseAppContext();
  console.log(usuarioLog);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-primary">
      <div className="spinner-border mb-3" role="status" />
      <h4 className="title fw-bold">Carregando...</h4>
    </div>
   )
};

export { Loading };