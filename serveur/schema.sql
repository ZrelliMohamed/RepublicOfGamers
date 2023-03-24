-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema myData
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema myData
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `myData` DEFAULT CHARACTER SET utf8 ;
USE `myData` ;

-- -----------------------------------------------------
-- Table `myData`.`teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myData`.`teams` (
  `teams_id` INT NOT NULL AUTO_INCREMENT,
  `nameOfTeam` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NOT NULL,
  `imageOfTeam` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`teams_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `myData`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `myData`.`users` (
  `users_id` INT NOT NULL AUTO_INCREMENT,
  `nickName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `role` VARCHAR(45) NOT NULL,
  `userImage` VARCHAR(45) NOT NULL,
  `teams_id` INT NOT NULL,
  PRIMARY KEY (`users_id`),
  INDEX `fk_users_teams_idx` (`teams_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_teams`
    FOREIGN KEY (`teams_id`)
    REFERENCES `myData`.`teams` (`teams_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
