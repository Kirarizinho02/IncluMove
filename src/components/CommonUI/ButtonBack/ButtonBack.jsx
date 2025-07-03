import { Button } from "react-bootstrap";

import { FaArrowLeft } from "react-icons/fa6";

const ButtonBack = (props) => {
  const { previousPage } = props;
  return (
    <a href={previousPage}>
      <div className="h-100 p-3 mw-25 btn-back text-body">
        <FaArrowLeft size="2rem" />
      </div>
    </a>
  )
}

export { ButtonBack };