DROP DATABASE IF EXISTS ebyrt;

CREATE DATABASE ebyrt;

USE ebyrt;

CREATE TABLE tasks (
  id INT NOT NULL auto_increment,
  task VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

-- INSERT INTO ebyrt.tasks (task) VALUES
--   ("Tarefa 1"),
--   ("Tarefa 2"),
--   ("Tarefa 3");
