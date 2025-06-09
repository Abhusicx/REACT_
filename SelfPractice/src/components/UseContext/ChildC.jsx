import React from 'react'
import { useContext } from 'react'


const ChildC = () => {
    const parentName = useContext(User)
  return (
    <div>
      {parentName}
    </div>
  )
}

export default ChildC
