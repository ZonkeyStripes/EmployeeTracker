const mysql = require("mysql");
// const cTable = require('console.table');
const inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootpass",
    database: "employeeTrack_db"
});

function userPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "userOption",
            choices: [
                "View Employees",
                "View Departments",
                "View Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Remove Employee",
                "Remove Department",
                "Remove Role",
                "Update Employee",
                "Update Employee Manager"
            ]
        }
    ]).then(answers => {
        if (answers.userOption === "View Employees") {
            viewEmployee();
        }
        console.log("ANSWERS", answers);
        if (answers.userOption === "View Departments") {
            viewDepartment();
        }
        if (answers.userOption === "View Roles") {
            viewRoles();
        }
        if (answers.userOption === "Add Employee") {
            addEmployee();
        }
        if (answers.userOption === "Add Department") {
            addDepartment();
        }
        if (answers.userOption === "Add Role") {
            addRole();
        }
        if (answers.userOption === "Remove Employee") {
            removeEmployee();
        }
        if (answers.userOption === "Remove Department") {
            removeDepo();
        }
        if (answers.userOption === "Remove Role") {
            removeRole();
        }
    });
}

userPrompt();

// View functions //
function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, result) {
        if (err) throw err;
        console.table(result);
    });
}

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, result) {
        if (err) throw err;
        console.table(result)
    });
}

function viewRoles() {
    connection.query("SELECT * FROM role", function(err, result) {
        if(err) throw err;
        console.table(result)
    });
}
// Add functions //
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "Whats the employees first name?",
            name: "firstName",
        },
        {
            type: "input",
            message: "Whats the employees last name?",
            name: "lastName",
        },
        {
            type: "input",
            message: "Whats the employees role number?",
            name: "roleID",
        }
    ]).then(answers => {
        connection.query(`INSERT INTO employee (first_name, last_name, role_id) VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.roleID}')`, function (err, result) {
            if (err) throw err;
            // console.table(result)
        })
        connection.query("SELECT * FROM employee", function(err, result) {
            if(err) throw err;
            console.table(result);
        });
    }
)}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "nameDepot",
            message: "What would you like this Department to be called?",
        },
    ]).then(answers => {
        connection.query(`INSERT INTO department (name) VALUES ('${answers.nameDepot}')`, function(err, result) {
            if(err) throw err;
        })
        connection.query("SELECT * FROM department", function(err, result) {
            if(err) throw err;
            console.table(result);
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "roleTitle",
            message: "Insert Title of the Role: "
        },
        {
            type: "input",
            name: "roleSalary",
            message: "How much does this position make a year?"
        },
        {
            type: "input",
            name: "depoRoleID",
            message: "Insert the Department ID for the Role: "
        }
    ]).then(answers => {
        connection.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answers.roleTitle}', '${answers.roleSalary}', '${answers.depoRoleID}')`, function(err, results) {
            if(err) throw err;
        })
        connection.query("SELECT * FROM role", function(err, result) {
            if(err) throw err;
            console.table(result);
        });
    });
}

function removeEmployee(){
inquirer.prompt([
    {
        type: "input",
        name: "deleteEmp",
        message: "What is the first name of the Employee you would like to remove?"
    }
]).then(answers => {
    connection.query(`DELETE FROM employee WHERE first_name = '${answers.deleteEmp}'`, function(err, result) {
        if(err) throw err;
        console.table(result);
    })
    connection.query("SELECT * FROM employee;", function(err, result) {
        if(err) throw err;
        console.table(result)
    })
})
}

function removeDepo() {
    inquirer.prompt([
        {
            type: "input",
            name: "deleteDepo",
            message: "What is the name of the Department you would like to remove?"
        }
    ]).then(answers => {
        connection.query(`DELETE FROM department WHERE name = '${answers.deleteDepo}'`, function(err, result) {
            if(err) throw err;
            console.table(result);
        })
        connection.query("SELECT * FROM department;", function(err, result) {
            if(err) throw err;
            console.table(result)
        })
    })
}

function removeRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "deleteRole",
            message: "What is the Title of the Role you would like to remove?"
        }
    ]).then(answers => {
        connection.query(`DELETE FROM role WHERE title = '${answers.deleteRole}'`, function(err, result) {
            if(err) throw err;
            console.table(result);
        })
        connection.query("SELECT * FROM role;", function(err, result) {
            if(err) throw err;
            console.table(result)
        })
    })
}