import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [input, setInput] = useState("");
  const [ekemployee, setEkemployee] = useState(null);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const url = "https://dummyjson.com/users";

  useEffect(() => {
    getEmployee();
  }, []);

  async function getEmployee() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result.users) {
        setEmployees(result.users);
      }
    } catch (error) {
      console.error("Error fetching all employees:", error);
    }
  }

  async function getEmployeeById() {
    if (!input) return;
    try {
      const response = await fetch(`${url}/${input}`);
      const result = await response.json();
      setEkemployee(result);
    } catch (error) {
      console.error("Error fetching employee by ID:", error);
      setEkemployee(null);
    }
  }

  async function createEmployee() {
    if (!name || !age ) return;
    try {
      const response = await fetch(`${url}/add`, {
        method: "POST",
        body: JSON.stringify({ name, age, salary }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("Created:", result);
      getEmployee();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteEmployee(id) {
    try {
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      getEmployee();
    } catch (error) {
      console.log(error);
    }
  }

  async function updateEmployee() {
    if (!name || !age || !salary || !editEmployeeId) return;
    try {
      const response = await fetch(`${url}/${editEmployeeId}`, {
        method: "PUT",
        body: JSON.stringify({ name, age, salary }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("Updated:", result);
      setEditMode(false);
      setEditEmployeeId(null);
      setName("");
      setAge("");
      setSalary("");
      getEmployee();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  }

  const handleEditClick = (employee) => {
    setEditMode(true);
    setEditEmployeeId(employee.id);
    setName(employee.firstName);
    setAge(employee.age);
  };

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
              <span className="font-semibold">Name:</span> {employee.firstName}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {employee.age}
            </p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => deleteEmployee(employee.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditClick(employee)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
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
              {ekemployee.firstName}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {ekemployee.age}
            </p>
          </div>
        )}
      </div>

      <hr className="my-10" />

      {/* Create or Edit Employee */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {editMode ? "Edit Employee" : "Create New Employee"}
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Age"
          />
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Salary"
          />
          <button
            onClick={editMode ? updateEmployee : createEmployee}
            className={`w-full py-2 ${
              editMode ? "bg-yellow-500" : "bg-green-600"
            } text-white rounded hover:opacity-90`}
          >
            {editMode ? "Update Employee" : "Create Employee"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
