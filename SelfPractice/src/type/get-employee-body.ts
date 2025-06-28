export type Employee = {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
};

export type GetAllEmployees = {
  status: string;
  data: Employee[];
  message: string;
};

export type GetEmployee = {
  status: string;
  data: Employee;
  message: string;
};
