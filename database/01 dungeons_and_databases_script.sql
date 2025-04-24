-- MySQL Script corregido para Dungeons & Databases
-- Fecha: Actualizado al 24 de abril de 2025

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP SCHEMA IF EXISTS `dungeons_and_databases` ;
CREATE SCHEMA IF NOT EXISTS `dungeons_and_databases` DEFAULT CHARACTER SET utf8 ;
USE `dungeons_and_databases` ;

-- Tabla: class_feature
CREATE TABLE IF NOT EXISTS `class_feature` (
  `class_feature_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `level` INT NOT NULL,
  PRIMARY KEY (`class_feature_id`)
) ENGINE = InnoDB;

-- Tabla: class 
CREATE TABLE IF NOT EXISTS `class` (
  `class_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `hit_die` VARCHAR(10) NOT NULL,
  `main_stat` VARCHAR(20) NOT NULL,
  `caster` TINYINT NOT NULL,
  `saving_throw_proficiencies` VARCHAR(45) NOT NULL,
  `tool_proficiencies` VARCHAR(45),
  `weapon_proficiencies` VARCHAR(45),
  `skill_proficiencies` VARCHAR(45),
  `armor_training` VARCHAR(45),
  PRIMARY KEY (`class_id`),
  UNIQUE (`name`)
) ENGINE = InnoDB;

-- Tabla: skill
CREATE TABLE IF NOT EXISTS `skill` (
  `skill_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT,
  `associated_stat` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE = InnoDB;

-- Tabla: user
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(128) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `first_name` VARCHAR(128) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `role` ENUM("player", "master") NOT NULL,
  `nickname` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE (`email`),
  UNIQUE (`nickname`)
) ENGINE = InnoDB;

-- Tabla: notes
CREATE TABLE IF NOT EXISTS `notes` (
  `notes_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(128) NOT NULL,
  `description` TEXT NOT NULL,
  `created_at` DATETIME,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`notes_id`),
  INDEX (`user_id`),
  CONSTRAINT `fk_notes_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;


-- Tabla: character
CREATE TABLE IF NOT EXISTS `character` (
  `character_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `alignment` VARCHAR(45) NOT NULL,
  `level` INT NOT NULL,
  `appereance` TEXT,
  `lore` TEXT,
  `personality` TEXT,
  `user_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`character_id`),
  INDEX (`user_id`),
  CONSTRAINT `fk_character_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Tabla: money 
CREATE TABLE IF NOT EXISTS `money` (
  `money_id` INT NOT NULL AUTO_INCREMENT,
  `platinum` BIGINT DEFAULT 0,
  `gold` BIGINT DEFAULT 0,
  `silver` BIGINT DEFAULT 0,
  `copper` BIGINT DEFAULT 0,
  `character_id` INT UNSIGNED,
  PRIMARY KEY (`money_id`),
  INDEX (`character_id`),
  CONSTRAINT `fk_money_character`
    FOREIGN KEY (`character_id`)
    REFERENCES `character` (`character_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Tabla: stats 
CREATE TABLE IF NOT EXISTS `stats` (
  `stats_id` INT NOT NULL AUTO_INCREMENT,
  `Dexterity` INT NOT NULL,
  `Intelligence` INT NOT NULL,
  `Strength` INT NOT NULL,
  `Charisma` INT NOT NULL,
  `Constitution` INT NOT NULL,
  `Wisdom` INT NOT NULL,
  `character_id` INT UNSIGNED,
  PRIMARY KEY (`stats_id`),
  INDEX (`character_id`),
  CONSTRAINT `fk_stats_character`
    FOREIGN KEY (`character_id`)
    REFERENCES `character` (`character_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Tabla: species_feature
CREATE TABLE IF NOT EXISTS `species_feature` (
  `species_feature_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  PRIMARY KEY (`species_feature_id`)
) ENGINE = InnoDB;

-- Tabla: species
CREATE TABLE IF NOT EXISTS `species` (
  `species_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `creature_type` VARCHAR(45) NOT NULL,
  `size` ENUM("small", "medium") NOT NULL,
  `speed` INT NOT NULL,
  PRIMARY KEY (`species_id`)
) ENGINE = InnoDB;

-- Tabla: item
CREATE TABLE IF NOT EXISTS `item` (
  `item_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NOT NULL,
  `value` INT NOT NULL,
  `type` ENUM("weapon", "consumable", "armor", "tool", "wondrous", "instrument", "staff") NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `rarity` ENUM("common", "uncommon", "rare", "very rare", "legendary", "artifact") NOT NULL,
  `magic` TINYINT DEFAULT 0,
  PRIMARY KEY (`item_id`)
) ENGINE = InnoDB;

-- Tablas relacionales
-- character_has_class
CREATE TABLE IF NOT EXISTS `character_has_class` (
  `character_id` INT UNSIGNED NOT NULL,
  `class_id` INT UNSIGNED NOT NULL,
  `level` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`character_id`, `class_id`),
  INDEX (`class_id`),
  INDEX (`character_id`),
  CONSTRAINT `fk_character_has_class_character`
    FOREIGN KEY (`character_id`) REFERENCES `character` (`character_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_character_has_class_class`
    FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- character_has_species
CREATE TABLE IF NOT EXISTS `character_has_species` (
  `character_id` INT UNSIGNED NOT NULL,
  `species_id` INT NOT NULL,
  PRIMARY KEY (`character_id`, `species_id`),
  INDEX (`species_id`),
  INDEX (`character_id`),
  CONSTRAINT `fk_character_has_species_character`
    FOREIGN KEY (`character_id`) REFERENCES `character` (`character_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_character_has_species_species`
    FOREIGN KEY (`species_id`) REFERENCES `species` (`species_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- character_has_skill
CREATE TABLE IF NOT EXISTS `character_has_skill` (
  `character_id` INT UNSIGNED NOT NULL,
  `skill_id` INT NOT NULL,
  `proficiency` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`character_id`, `skill_id`),
  INDEX (`skill_id`),
  INDEX (`character_id`),
  CONSTRAINT `fk_character_has_skill_character`
    FOREIGN KEY (`character_id`) REFERENCES `character` (`character_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_character_has_skill_skill`
    FOREIGN KEY (`skill_id`) REFERENCES `skill` (`skill_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;


-- class_has_class_feature
CREATE TABLE IF NOT EXISTS `class_has_class_feature` (
  `class_id` INT UNSIGNED NOT NULL,
  `class_feature_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`class_id`, `class_feature_id`),
  INDEX (`class_feature_id`),
  INDEX (`class_id`),
  CONSTRAINT `fk_class_has_class_feature_class`
    FOREIGN KEY (`class_id`) REFERENCES `class` (`class_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_class_has_class_feature_feature`
    FOREIGN KEY (`class_feature_id`) REFERENCES `class_feature` (`class_feature_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- species_has_species_feature
CREATE TABLE IF NOT EXISTS `species_has_species_feature` (
  `species_id` INT NOT NULL,
  `species_feature_id` INT NOT NULL,
  PRIMARY KEY (`species_id`, `species_feature_id`),
  INDEX (`species_feature_id`),
  INDEX (`species_id`),
  CONSTRAINT `fk_species_has_species_feature_species`
    FOREIGN KEY (`species_id`) REFERENCES `species` (`species_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_species_has_species_feature_feature`
    FOREIGN KEY (`species_feature_id`) REFERENCES `species_feature` (`species_feature_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- character_has_item
CREATE TABLE IF NOT EXISTS `character_has_item` (
  `character_id` INT UNSIGNED NOT NULL,
  `item_id` INT UNSIGNED NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  PRIMARY KEY (`character_id`, `item_id`),
  INDEX (`character_id`),
  INDEX (`item_id`),
  CONSTRAINT `fk_character_has_item_character`
    FOREIGN KEY (`character_id`) REFERENCES `character` (`character_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_character_has_item_item`
    FOREIGN KEY (`item_id`) REFERENCES `item` (`item_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;


-- Restaurar configuración
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;