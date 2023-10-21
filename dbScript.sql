CREATE SCHEMA `db_sad2` ;

-- Create table users
CREATE TABLE `db_sad2`.`tbl_users` (
  `userID` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(64) NULL,
  `firstname` VARCHAR(100) NULL,
  `lastname` VARCHAR(100) NULL,
  `age` VARCHAR(45) NULL,
  `role` VARCHAR(45) NULL,
  `isActive` TINYINT(1) NULL,
  PRIMARY KEY (`userID`));
