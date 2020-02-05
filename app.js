const express = require("express");
const mysql = require("mysql");
const cTable = require('console.table');
const inquirer = require("inquirer");

const app = express();

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended : true }));
app.use(express.json());

// let connection = mysql.createConnection({
//     host: "localhost",
//     port: 8080,
//     user: "root",
//     password: "rootpass",
//     database: "employeeTrack_db"
// });

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected as id", connection.threadId + "\n");
// });

quirer();
function quirer() {
    inquirer.prompt([
        {
            type: "list",
            message: "",
            name: "choice",
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
        if(answers.choice === "Add Employee"){
            console.log("You have selected " + answers.choice)
        }
    })
}