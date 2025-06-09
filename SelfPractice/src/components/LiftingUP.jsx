import React from 'react'

const LiftingUP = (props) => {
  return (
    <div>
        <h1>LiftingUP : </h1>
      <input type="text" value={props.input} placeholder="Enter text here" onChange={(e) => props.setInput(e.target.value)}/>
    </div>
  )
}

export default LiftingUP
