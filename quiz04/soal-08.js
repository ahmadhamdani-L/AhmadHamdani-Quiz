const employees = require("./01-employees.js");

function totalEmployeeByJobId(params) {
    
    const filterjob=(employees,job_id) =>{
        
        return employees.filter(x => x.job_id === job_id);
        }
        console.log(filterjob(employees,6))
    }

    totalEmployeeByJobId(employees)