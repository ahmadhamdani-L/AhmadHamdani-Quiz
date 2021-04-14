const employees = require("./01-employees.js");
const emp = employees.length 


function salaryRange(employees,minSalary, maxSalary) { 

    let range = employees.filter(employees => employees.salary <= maxSalary && employees.salary >= minSalary);
    return range;

}
console.log(salaryRange(employees,2400,4800));