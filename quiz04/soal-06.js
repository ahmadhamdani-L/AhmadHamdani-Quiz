const employees = require("./01-employees.js");

function totalSalaryByDepartment(employees,departmentId) {

    let salary = employees.filter(employees=>employees.department_id === departmentId)
    
    let total = salary.reduce((val,element)=>{
        return val + parseInt(element.salary)
    },0)

    console.log(total)
}
totalSalaryByDepartment(employees,6)