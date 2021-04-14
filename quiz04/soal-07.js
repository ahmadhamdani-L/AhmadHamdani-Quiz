const employees = require("./01-employees.js");
 
function totalEmployeeByJobId(employed) {

    const filterjob=(employed,department_id) =>{
        
        return employees.filter(x => x.department_id ===department_id);
    }   
    console.log(filterjob(employees,6))

}
totalEmployeeByJobId(employees)