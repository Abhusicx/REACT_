import React from 'react'
import Component2 from './Component2'
import Component3 from './Component3'

const Component1 = () => {
    const age = 10;
    const school = "rangarh"
  return (
    <div>
      <h1>Tanvi aggrawal</h1>
      <Component2 age = {age} school = {school}/>
      <Component3 age = {age} school = {school}/>
    </div>
  )
}

export default Component1
