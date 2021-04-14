const employees = require("./01-employees.js");
const emp = employees.length 

function totalSalaryAllEmployee(employees) {

    let hasil = employees.reduce(function(total, employee) {
        return total + parseFloat(employee.salary)
        },0)
    
        return hasil
    }
    
    console.log(totalSalaryAllEmployee(employees));