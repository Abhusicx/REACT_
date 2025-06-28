import { useState} from "react";
import { getEmployeeById } from "../api-service/get-employee-api";
import type { Employee } from "../type/get-employee-body";

const EmployeeListbyId = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!employeeId.trim()) return;

    try {
      setLoading(true);
      setError("");
      const response = await getEmployeeById(Number(employeeId));
      setEmployee(response.data);
    } catch (err) {
      setError("Employee not found or error fetching data");
      setEmployee(null);
    } 
    
    setLoading(false);
  };

  return (
    <div className="employee-search">
      <h2>Search Employee by ID</h2>
      
      <div className="search-container">
        <input
          type="number"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          placeholder="Enter employee ID"
        />
        <button 
          onClick={handleSearch} 
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {employee && (
        <div className="employee-details">
          <h3>{employee.employee_name}</h3>
          <p>ID:{employee.id}</p>
          <p>Age: {employee.employee_age}</p>
          <p>Salary: {employee.employee_salary}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeListbyId;