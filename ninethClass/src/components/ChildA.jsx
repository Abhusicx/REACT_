import React from 'react'

const ChildA = ({share, setShare}) => {

    function handleClick() {
        setShare(share + 1);
      }
  return (
    <div>
      <button onClick={handleClick}>Child A : {share}</button>
    </div>
  )
}

export default ChildA
