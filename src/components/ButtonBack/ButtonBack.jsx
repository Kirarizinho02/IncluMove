import { Button } from "react-bootstrap";
 
import { arrow_back } from "../../assets";

const ButtonBack = (props) => {
  const { previousPage } = props;
  return (
    <Button variant="secondary" className="shadow h-100 p-3 mw-25" style={{ borderRadius: "100px"}} href={previousPage}>
      <img src={arrow_back} alt="Voltar" />
    </Button>
  )
}

export { ButtonBack };