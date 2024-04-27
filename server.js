
const inquirer = require('inquirer')
const {viewEmployees, viewDepartments, viewRoles, addDepartment, addRole, addEmployee, updateEmployeeRole} = require("./lib/actions")


const start = async() => {
    const response = await inquirer.prompt([
        {
            type: "list",
            message: "Choose an option below:",
            name: "selection",
            choices:[
                {
                    name: "view all employees",
                    value: "VIEW EMP"
                },
                {
                    name: "view all roles",
                    value: "VIEW ROLES"
                },
                {
                    name: "view all departments",
                    value: "VIEW DEPT"
                },
                {
                    name: "add a new department",
                    value: "ADD DEPT"
                },
                {
                    name: "Add a new role",
                    value: "ADD ROLE"
                },
                {
                    name: "add new employee",
                    value: "ADD EMP"
                },
                {
                    name: "update employee role",
                    value: "UPDT EMP ROLE"
                }
            ]
        }
    ])

    const { selection } = response

    switch(selection){
        case "VIEW EMP":
        viewEmployees().then(start);
         break
        case "VIEW ROLES":
        viewRoles().then(start);
         break
         case "VIEW DEPT":
        viewDepartments().then(start); 
         break
        case "ADD DEPT":
        addDepartment().then(start);
         break
        case "VIEW ADD ROLE":
        addRole().then(start);
         break
        case "VIEW ADD EMP":
        addEmployee().then(start);
         break 
        case "VIEW UPDT EMP ROLE":
        updateEmployeeRole().then(start);
         break 
    }

    
}
start()
