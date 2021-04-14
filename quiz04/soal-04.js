const employees = require("./01-employees.js");


function sortsal(employees) {
    const sort = employees.sort((a,b )=>{
        return a.salary - b.salary;
    });
    return sort
    
}
console.log(sortsal(employees));