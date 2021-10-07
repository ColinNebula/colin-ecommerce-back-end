-- DROP DATABASE
DROP DATABASE IF EXISTS e_commerce_db;

-- CREATE DATABASE
CREATE DATABASE e_commerce_db;

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  price DECIMAL(10) NOT NULL,
  stock DECIMAL(10) NOT NULL,
  category_id INT NULL,
  PRIMARY KEY (id));

CREATE TABLE category (
  id INT NULL AUTO_INCREMENT,
  category_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

  
  CREATE TABLE tag (
  id INT NOT NULL,
  tag_name VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

  CREATE TABLE product_tag (
  id INT NOT NULL,
  product_id INT NULL,
  tag_id INT NULL,
  PRIMARY KEY (id));