-- Drops and recreates burgers_db
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

-- Use burgers_db
USE burgers_db;

-- Creates the table "burgers"
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(255),
  devoured BOOLEAN,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL 
);

