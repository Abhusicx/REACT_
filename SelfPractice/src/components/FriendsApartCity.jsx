import FriendsApart from "./FriendsApart"

const FriendsApartCity = ({city}) => {
  return (
    <>
        <h2>City : {city.city}</h2>
        <ul>
            {
                city.people.map((friend, index) => (
                    <li key={index}>
                        <FriendsApart friend={friend}/>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default FriendsApartCity
