DROP DATABASE IF EXISTS burgerStyle_db;

CREATE DATABASE burgerStyle_db;

USE burgerStyle_db;

CREATE TABLE burgers (

  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(300) NOT NULL,
  devoured BOOLEAN NOT NULL DEFAULT FALSE,
  date TIMESTAMP,
  PRIMARY KEY (id)
);