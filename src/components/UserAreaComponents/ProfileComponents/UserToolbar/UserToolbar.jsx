import { Col, Nav, Row } from "react-bootstrap";
import { ButtonNewWorkout } from "../../";
import { ButtonEdit } from "../../../";
import { UseAppContext } from "../../../../hooks";

const UserToolbar = () => {
  const { handleWorkoutTypeSelect } = UseAppContext();

  return (
    <Row className="w-100" >
      <Col md={6} lg={12} className="my-2 w-100 d-flex justify-content-center">
        <ButtonEdit />
      </Col>
      <Col md={6} lg={12} className="my-2 w-100 d-flex justify-content-center">
        <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect}/>
      </Col>
    </Row>
  )
}

export { UserToolbar };

