CREATE SCHEMA `db_sad2` ;

CREATE TABLE `db_sad2`.`new_table` (
  `userID` INT(11) NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `age` INT(2) NULL,
  `role` VARCHAR(45) NULL,
  `isActive` TINYINT(1) NULL,
  PRIMARY KEY (`userID`));
