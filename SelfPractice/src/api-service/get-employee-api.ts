// api-service/get-employee-api.ts
import axios from "axios";
import type { GetAllEmployees, GetEmployee } from "../type/get-employee-body";


const url = "https://dummy.restapiexample.com/api/v1";
// const apiUrl = import.meta.env.VITE_API_URL;

export const getEmployee = async (): Promise<GetAllEmployees> => {
  try {
    const response = await axios.get<GetAllEmployees>(
      `${url}/employees`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export const getEmployeeById = async (id: number): Promise<GetEmployee> => {
  try {
    const response = await axios.get<GetEmployee>(
      `${url}/employee/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with ID ${id}:`, error);
    throw error;
  }
};