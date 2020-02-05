DROP DATABASE IF EXISTS employeeTrack_db;
CREATE DATABASE employeeTrack_db;

USE employeeTrack_db;

CREATE TABLE department (
    ID INT(20) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(35) NOT NULL,
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
    first_name varchar(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT(20) NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT(20),
    FOREIGN KEY (manager_id) REFERENCES manager(id)
);