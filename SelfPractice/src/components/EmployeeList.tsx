import { useEffect, useState } from "react";
import { getEmployee } from "../api-service/get-employee-api";
import type { Employee } from "../type/get-employee-body";

const EmployeeList = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await getEmployee();
        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);
   
  if (loading) return <div>Loading employees...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2>Employee Directory</h2>
      <div className="employees">
        {employees.map(employee => (
          <div key={employee.id}>
            <h3>{employee.employee_name}</h3>
            <p>Age: {employee.employee_age}</p>
            <p>Salary: ${employee.employee_salary}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeeList;