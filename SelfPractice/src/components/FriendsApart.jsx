import React from 'react'

const FriendsApart = ({friend}) => {
  return (
    <>
            <li>
                <p>Name : {friend.name} , Age : {friend.age}</p>
            </li>
    </>
  )
}

export default FriendsApart
