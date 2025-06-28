import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const [ekemployee, setEkemployee] = useState(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();

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

  async function createEmployee() {
    const url = "https://dummy.restapiexample.com/api/v1/create";
    console.log(name, age, salary);
    if (!name || !age || !salary) return;
    try {
      const response = await fetch(
        url,
        {
          method: "POST",
          body: JSON.stringify({
            name,
            age,
            salary,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteEmployee(id) {
    try{
      const response = await fetch(`https://dummy.restapiexample.com/api/v1/delete/${id}`, {
        method: 'DELETE'
      })
      const result = response.json()
      console.log(result)
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Employee Management
      </h1>

      {/* All Employees */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200"
          >
            <p>
              <span className="font-semibold">ID:</span> {employee.id}
            </p>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {employee.employee_name}
            </p>
            <p>
              <span className="font-semibold">Salary:</span> ₹
              {employee.employee_salary}
            </p>
            <p>
              <span className="font-semibold">Age:</span>{" "}
              {employee.employee_age}
            </p>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>

          </div>
        ))}
      </div>

      {/* Search by ID */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Search Employee by ID
        </h2>
        <div className="flex gap-2">
          <input
            type="number"
            onChange={(e) => setInput(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter employee ID"
          />
          <button
            onClick={getEmployeeById}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {ekemployee && (
          <div className="bg-white mt-4 p-4 rounded-lg shadow w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Employee Details
            </h3>
            <p>
              <span className="font-semibold">ID:</span> {ekemployee.id}
            </p>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {ekemployee.employee_name}
            </p>
            <p>
              <span className="font-semibold">Salary:</span> ₹
              {ekemployee.employee_salary}
            </p>
            <p>
              <span className="font-semibold">Age:</span>{" "}
              {ekemployee.employee_age}
            </p>
          </div>
        )}
      </div>

      <hr />
      <br />
      <h1>Create new Employee</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
      />
      <input
        type="number"
        onChange={(e) => setSalary(e.target.value)}
        placeholder="tankhwa"
      />
      <button onClick={createEmployee}>Submit</button>
    </div>
  );
}

export default App;
