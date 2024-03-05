-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mvp` ;

-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mvp` DEFAULT CHARACTER SET utf8 ;
USE `mvp` ;

-- -----------------------------------------------------
-- Table `mvp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`users` (
  `user-id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `nationality` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user-id`),
  UNIQUE INDEX `users_UNIQUE` (`user-id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mvp`.`quotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`quotes` (
  `quote-id` INT NOT NULL AUTO_INCREMENT,
  `users_user-id` INT NOT NULL,
  `text` VARCHAR(200) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  UNIQUE INDEX `quote-id_UNIQUE` (`quote-id` ASC) VISIBLE,
  INDEX `fk_quotes_users_idx` (`users_user-id` ASC) VISIBLE,
  UNIQUE INDEX `users_user-id_UNIQUE` (`users_user-id` ASC) VISIBLE,
  CONSTRAINT `fk_quotes_users`
    FOREIGN KEY (`users_user-id`)
    REFERENCES `mvp`.`users` (`user-id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
