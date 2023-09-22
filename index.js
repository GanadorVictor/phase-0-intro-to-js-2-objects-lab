// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress: '123 Main St',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a property with the given key from an employee Object
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to destructively delete a property with the given key from an employee Object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test the functions
  console.log("Original Employee:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Manager');
  console.log("Updated Employee (non-destructive):", updatedEmployee);
  
  console.log("Original Employee (not mutated):", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'salary', 60000);
  console.log("Updated Employee (destructive):", employee);
  
  const employeeWithoutStreet = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log("Employee without Street (non-destructive):", employeeWithoutStreet);
  
  console.log("Original Employee (not mutated):", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log("Employee without Name (destructive):", employee);
  