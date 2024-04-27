const sequelize = require('../config/connection')
const inquirer = require('inquirer')

async function viewEmployees(){
    const result = await sequelize.query("SELECT * FROM employee")
    console.table(result[0])
}

async function viewDepartments(){
    const result = await sequelize.query("SELECT * FROM department")
    console.table(result[0])
}

async function viewRoles(){
    const result = await sequelize.query("SELECT * FROM role")
    console.table(result[0])
}

const { Department, Role, Employee } = require('../config/connection');

async function addDepartment() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the new department?"
        }
    ]);

    async function addDepartment() {
        try {
            const { name } = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter the name of the new department:',
            });
    
            const query = 'INSERT INTO department (name) VALUES ($1)';
            const values = [name];
            await sequelize.query(query, { bind: values });
    
            console.log('New department added successfully!');
        } catch (error) {
            console.error('Error adding department:', error);
        }
    }
        mainMenu();
    }


    async function addRole() {
        try {
            const { title, salary, department_id } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title of the new role?',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary for this role?',
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'What is the department ID for this role?',
                },
            ]);
    
            const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
            const values = [title, salary, department_id];
            await sequelize.query(query, { bind: values });
    
            console.log('New role added successfully!');
        } catch (error) {
            console.error('Error adding role:', error);
        }
        
   mainMenu();
}


   async function addEmployee() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'fname',
            message: 'Enter the first name of the new employee:',
        },
        {
            type: 'input',
            name: 'lname',
            message: 'Enter the last name of the new employee:',
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role ID for this employee:',
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager ID for this employee (leave blank if none):',
        },
    ]);

    await Employee.create({
        first_name: response.fname,
        last_name: response.lname,
        role_id: response.role_id,
        manager_id: response.manager_id || null,
    });
    mainMenu();

}

    await Employee.create({
        first_name: response.fname,
        last_name: response.lname,
        role_id: response.role_id,
        manager_id: response.manager_id
    });




    async function updateEmployeeRole() {
        const response = await inquirer.prompt([
            {
                type: 'input',
                name: 'employee_id',
                message: 'Enter the employee ID whose role you want to update:',
            },
            {
                type: 'input',
                name: 'new_role_id',
                message: 'Enter the new role ID for this employee:',
            },
        ]);
    
        await Employee.update(
            { role_id: response.new_role_id },
            { where: { id: response.employee_id } }
        );

        mainMenu();
    }

module.exports = { addDepartment, addRole, addEmployee, updateEmployeeRole };
