import React from 'react'
import FriendsNameAge from './FriendsNameAge'

const FriendsCity = ({city}) => {
  return (
    <div>
      <h2>City : {city.city}</h2>
      <ol>
        {
            city.people.map((friend , index) => (
                <li key={index}>
                    <FriendsNameAge friend={friend}/>
                </li>
            ))
        }
      </ol>
    </div>
  )
}

export default FriendsCity
