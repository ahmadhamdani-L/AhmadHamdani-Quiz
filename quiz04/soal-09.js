const employees = require("./01-employees.js");

function sortSalary(employees) {
    let sorting = employees.sort((employeesX,employeesY)=>{
        return employeesX.salary-employees.salary
    })
    return ["upah "+sorting[0].salary,"upah majikan"+sorting[sorting.length-1].salary]
}
console.log(sortSalary(employees))