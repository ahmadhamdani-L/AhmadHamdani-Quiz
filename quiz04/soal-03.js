const employees = require("./01-employees.js");
console.log(employees[1]);


function hireRangeDate(employees,startDate, endDate) {
    let hasil = employees.filter(emp => emp.manager_id === null & emp.hire_date ===startDate && emp.hire_date === endDate);
    
    return hasil;
}

console.log(hireRangeDate(employees,"12-01-1993","12-12-1995"));