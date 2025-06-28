import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState();
  const [ekemployee, setEkemployee] = useState();

  const url = "https://dummy.restapiexample.com/api/v1/employees";

  useEffect(() => {
    getEmployee();
  }, []);

  async function getEmployee() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result.data) {
        setEmployees(result.data);
      }
    } catch (error) {
      console.error("Error fetching all employees:", error);
    }
  }

  async function getEmployeeById() {
    if (!input) return;
    try {
      const response = await fetch(
        `https://dummy.restapiexample.com/api/v1/employee/${input}`
      );
      const result = await response.json();
      if (result.data) {
        setEkemployee(result.data);
      } else {
        setEkemployee(null);
      }
    } catch (error) {
      console.error("Error fetching employee by ID:", error);
      setEkemployee(null);
    }
  }

  return (
    <>
      <h1>Employees</h1>
      {employees &&
        employees.map((employee) => {
          return (
            <ul key={employee.id}>
              <li>Id : {employee.id}</li>
              <li>name : {employee.employee_name}</li>
              <li>salary : {employee.employee_salary}</li>
              <li>age : {employee.employee_age}</li>
            </ul>
          );
        })}

      <hr />
      <br />

      <input
        type="number"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter employee id"
      />
      <button onClick={getEmployeeById}>Get Employee by ID</button>

      <h1>Employee by id</h1>
      {ekemployee && (
        <ul key={ekemployee.id}>
          <li>Id : {ekemployee.id}</li>
          <li>name : {ekemployee.employee_name}</li>
          <li>salary : {ekemployee.employee_salary}</li>
          <li>age : {ekemployee.employee_age}</li>
        </ul>
      )}
    </>
  );
}

export default App;
