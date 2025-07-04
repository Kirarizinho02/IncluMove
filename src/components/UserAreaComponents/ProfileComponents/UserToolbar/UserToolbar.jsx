import { Col, Nav, Row } from "react-bootstrap";
import { ButtonNewWorkout } from "../../";
import { ButtonEdit } from "../../../";
import { UseAppContext } from "../../../../hooks";

const UserToolbar = () => {
  const { handleWorkoutTypeSelect } = UseAppContext();

  return (
    <Row className="w-100 d-flex justify-content-center align-items-center flex-column">
      <Col className="my-2 w-75 w-md-100 d-flex">
        <ButtonEdit />
      </Col>
      <Col className="my-2 w-75 w-md-100 d-flex">
        <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect}/>
      </Col>
    </Row>
  )
}

export { UserToolbar };

