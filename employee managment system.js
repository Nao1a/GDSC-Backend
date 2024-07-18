let employees = require('./employyes.json')



function addEmployee(id, fullName, position, department) {
    const newEmployee= {id, fullName, position, department};
    employees.push(newEmployee);
    return newEmployee;
}



function listEmployees() {
    console.log(employees);
}



function findEmployee(id) {
    for(let i = 0; i < employees.length; i++){
        if (employees[i].id === id) {
            console.log(employees[i]);
        }
    }
}

function updateEmployee(id, newname, newposition, newdepartment) {
   for(let i = 0; i < employees.length; i++) {
       if (employees[i].id === id) {
           employees[i].fullName = newname;
           employees[i].position = newposition;
           employees[i].department = newdepartment;
           console.log(employees[i]);
       }
   }
}


function deleteEmployee(id) {
    for(let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees.splice(i,1);
        }
    }
 }
