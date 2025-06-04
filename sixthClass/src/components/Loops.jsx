import { useState } from 'react'
import Row from './Row'

const Loops = () => {
    const [names, setNames] = useState(["Tanvi", "vanshika" , "shailja" , "priyanshu", "chandragupt", "parth"]);
    const userData = [
        {
            id: 1,
            name: "Tanvi",
            age: 20,
            city: "Delhi"
        },
        {
            id: 2,
            name: "Vanshika",
            age: 21,
            city: "Noida"
        },
        {
            id: 3,
            name: "Shailja",
            age: 22,
            city: "Gurgaon"
        },
        {
            id: 4,
            name: "Priyanshu",
            age: 23,
            city: "Faridabad"
        },
        {
            id: 5,
            name: "Chandragupt",
            age: 24,
            city: "Ghaziabad"
        },
        {
            id: 6,
            name: "Parth",
            age: 25,
            city: "Meerut"
        },
        {
            id: 1,
            name: "Tanvi",
            age: 20,
            city: "Delhi"
        },
        {
            id: 2,
            name: "Vanshika",
            age: 21,
            city: "Noida"
        },
        {
            id: 3,
            name: "Shailja",
            age: 22,
            city: "Gurgaon"
        },
        {
            id: 4,
            name: "Priyanshu",
            age: 23,
            city: "Faridabad"
        },
        {
            id: 5,
            name: "Chandragupt",
            age: 24,
            city: "Ghaziabad"
        },
        {
            id: 6,
            name: "Parth",
            age: 25,
            city: "Meerut"
        },
        {
            id: 1,
            name: "Tanvi",
            age: 20,
            city: "Delhi"
        },
        {
            id: 2,
            name: "Vanshika",
            age: 21,
            city: "Noida"
        },
        {
            id: 3,
            name: "Shailja",
            age: 22,
            city: "Gurgaon"
        },
        {
            id: 4,
            name: "Priyanshu",
            age: 23,
            city: "Faridabad"
        },
        {
            id: 5,
            name: "Chandragupt",
            age: 24,
            city: "Ghaziabad"
        },
        {
            id: 6,
            name: "Parth",
            age: 25,
            city: "Meerut"
        },
        {
            id: 1,
            name: "Tanvi",
            age: 20,
            city: "Delhi"
        },
        {
            id: 2,
            name: "Vanshika",
            age: 21,
            city: "Noida"
        },
        {
            id: 3,
            name: "Shailja",
            age: 22,
            city: "Gurgaon"
        },
        {
            id: 4,
            name: "Priyanshu",
            age: 23,
            city: "Faridabad"
        },
        {
            id: 5,
            name: "Chandragupt",
            age: 24,
            city: "Ghaziabad"
        },
        {
            id: 6,
            name: "Parth",
            age: 25,
            city: "Meerut"
        },
    ]

  return (
    <div>
    <table className='pd-2 border-amber-700 border-4'>
      <thead style={{backgroundColor: "lightblue"}}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {
            userData.map((singleUser) => {
                return(
                    <Row children={singleUser} />
                )
            })
        }
      </tbody>
    </table>
    </div>
  )
}

export default Loops
