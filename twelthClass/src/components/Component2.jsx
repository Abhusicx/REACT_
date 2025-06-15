import React, { useEffect } from 'react'

const Component2 = React.memo(
    ({name , Increment}) => {
    useEffect(() => {
        console.log("re-render");
    })
  return (
    <div>
      <button>{name}</button>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}
)

export default Component2; //Component2
