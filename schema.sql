DROP DATABASE IF EXISTS employeeTrack_db;
CREATE DATABASE employeeTrack_db;

USE employeeTrack_db;

CREATE TABLE department (
    ID INT(20) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(35) NOT NULL
);

CREATE TABLE role (
    ID INT(20) primary key auto_increment NOT NULL,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT(10) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    ID INT(20) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    first_name varchar (20)NOT NULL,
    last_name VARCHAR (20)NOT NULL,
    role_id INT(10) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT(10),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

INSERT INTO department (name) VALUES ("Front of House");
INSERT INTO department (name) VALUES ("Back of House");
INSERT INTO department (name) VALUES ("Financial");
INSERT INTO department (name) VALUES ("Manager");

SELECT * from department;

INSERT INTO role (title, salary, department_id) VALUES ("Server", "15000", "1");
INSERT INTO role (title, salary, department_id) VALUES ("Cashier", "15000", "1");
INSERT INTO role (title, salary, department_id) VALUES ("Line Cook", "20000", "2");
INSERT INTO role (title, salary, department_id) VALUES ("Prep Cook", "25000", "2");
INSERT INTO role (title, salary, department_id) VALUES ("Dish Washer", "15000", "2");
INSERT INTO role (title, salary, department_id) VALUES ("Supervisor", "30000", "4");

SELECT * from role;

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Harvey", "Birdman", "1");
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Brakk", "Leftover", "1");
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Washa", "Lotta", "2");
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Hudien", "Lotta", "2");
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Fu Kin", "Mel Ting", "4");
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Sherry", "Hils", "3");

SELECT * from employee;