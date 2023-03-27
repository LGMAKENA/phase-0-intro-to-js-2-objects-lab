// Write your solution in this file!

// creating an object
const employee= {
name: "sam",
streetAddress: "11 Broadway"
}
// non-destructively updating employee object
function updateEmployeeWithKeyAndValue(employee, key, value)
{
   
    const newemployee = { ...employee}
    newemployee[key] = value
    return newemployee;
}

// destructively updating employee object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    employee[key] = value;
    return employee;
}

// deletes the key from an employee object clone non-destructively
function deleteFromEmployeeByKey(employee, key)
{
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    employee[key] = undefined;
    return employee;
}