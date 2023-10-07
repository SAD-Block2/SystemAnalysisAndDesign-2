--Create a Database called db_sad2
CREATE SCHEMA `db_sad2` ;
--Create the table and their columns and properties
CREATE TABLE `db_sad2`.`tbl_users` (
  `userID` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `firstname` VARCHAR(45) NULL,
  `age` INT(2) NULL,
  `role` VARCHAR(45) NULL,
  `isActive` TINYINT(1) NULL,
  PRIMARY KEY (`userID`));
