ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (300) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0
);