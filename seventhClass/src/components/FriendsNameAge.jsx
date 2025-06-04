import React from 'react'

const FriendsNameAge = ({friend}) => {
  return (
    <div>
      name: {friend.name} , age: {friend.age}
    </div>
  )
}

export default FriendsNameAge
