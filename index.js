// Write your solution in this file!
const employee = {
    name: 'value',
    streetAddress: 'value'
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value })
  };

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value
    return employee
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[key]
    return newEmployee
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
};