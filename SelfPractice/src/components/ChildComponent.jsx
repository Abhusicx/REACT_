import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
        <h1>ChildComponent : </h1>
      <h1>{props.input}</h1>
    </div>
  )
}

export default ChildComponent
