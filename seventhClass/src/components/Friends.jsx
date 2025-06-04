import FriendsCity from "./FriendsCity";

const Friends = () => {
  const friendsApart = [
    {
      city: "shivpuri",
      people: [
        { name: "priyanshu", age: 22 },
        { name: "shailja", age: 21 },
        { name: "tanvi", age: 21 },
        { name: "vanshika", age: 21 },
      ],
    },
    {
      city: "jaipur",
      people: [
        { name: "divyansh", age: 21 },
        { name: "uday", age: 21 },
        { name: "kunal", age: 21 },
        { name: "harsh", age: 21 },
        { name: "abhijeet", age: 21 },
      ],
    },
    {
      city: "bhopal",
      people: [
        { name: "chandragupt", age: 22 },
        { name: "parth", age: 21 },
        { name: "aastha", age: 21 },
      ],
    },
  ];

  console.log(friendsApart);
  return (
    <>  
     <h1>I hope we meet again ! </h1>
     <ol>
        {
            friendsApart.map((city, index) => (
                <li key={index}> 
                    <FriendsCity city = {city}/>
                </li>
            ))
        }
     </ol>
     <h1>Hope to meet you all again - not your replica, but you.</h1>
    </>
  )
};

export default Friends;
