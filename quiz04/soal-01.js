const employees = require("./01-employees.js");
const emp = employees.length 


function filtername(employees,n) {

    return employees.filter(employees => employees.first_name.startsWith(n))
    
}
console.log(filtername(employees,"D"))
