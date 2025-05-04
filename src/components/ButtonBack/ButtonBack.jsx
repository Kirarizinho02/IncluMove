import { Button } from "react-bootstrap";
 
import ArrowBack from "../../assets/arrow-back.svg";

const ButtonBack = (props) => {
  const { previousPage } = props;
  return (
    <Button variant="secondary" className="shadow h-100 p-3 mw-25" style={{ borderRadius: "100px"}} href={previousPage}>
      <img src={ArrowBack} alt="Voltar" />
    </Button>
  )
}

export { ButtonBack };