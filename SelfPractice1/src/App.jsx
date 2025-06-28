import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const url = "https://dummy.restapiexample.com/api/v1/employees";

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployee();
  }, [])

  async function getEmployee(){
    const response = await fetch(url)
    const result = await response.json()
    setEmployees(result.data);
  }

  return (
    <>
      {
        employees && employees.map((employee) => {
          return (
            <>
            <ul key={employee.id}>
              <li>{employee.id}</li>
              <li>{employee.employee_name}</li>
              <li>{employee.employee_salary}</li>
              <li>{employee.employee_age}</li>
            </ul>
            <p>hello</p>
            </>
          )
        })
      }
    </>
  )
}

export default App
