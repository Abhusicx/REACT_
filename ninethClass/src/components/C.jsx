import { useContext } from "react";
import { UseContextKaShare } from "../App";

const C = () => {
    const data = useContext(UseContextKaShare);
  return (
    <div>
      C : {data}
    </div>
  )
}

export default C
