import { useParams } from "react-router-dom";

const Student = () => {
    const {id} = useParams("id");
  return (
    <div>
      //:id             //id == 1
      <h1>Student : {id} </h1>
    </div>
  )
}

export default Student
