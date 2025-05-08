import { Dropdown, Nav } from "react-bootstrap";
import { ButtonNewWorkout } from "../ButtonNewWorkout";
import { UseAppContext } from "../../hooks";
import { ButtonEdit } from "../ButtonEdit";

const NavUsersHome = () => {
  const { handleWorkoutTypeSelect } = UseAppContext();

  return (
    <Nav defaultActiveKey='/' className="justify-content-center w-100" >
      <Nav.Item className="my-2">
        <Nav.Link className='fs-6 link-body-emphasis' href='/'>Profissionais</Nav.Link>
      </Nav.Item>
      <div className='vr d-none d-sm-flex'></div>
      <Nav.Item className="my-2 mx-3">
        <ButtonEdit />
      </Nav.Item>
      <div className='vr d-none d-sm-flex'></div>
      <Nav.Item className="my-2 mx-3">
        <ButtonNewWorkout onSelectWorkoutType={handleWorkoutTypeSelect}/>
      </Nav.Item>
    </Nav>
  )
}

export { NavUsersHome };