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

-- -----------------------------------------------------
-- Table `mvp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `nationality` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE INDEX `users_UNIQUE` (`userid` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mvp`.`quotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`quotes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(200) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `users_userid` INT NOT NULL,
  UNIQUE INDEX `quote-id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  INDEX `fk_quotes_users_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_quotes_users`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mvp`.`users` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
