DROP DATABASE IF EXISTS `information-retrieval`;
CREATE DATABASE `information-retrieval`;
USE `information-retrieval`;

CREATE TABLE `reviews` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(64) NOT NULL,
	`review` LONGTEXT NOT NULL,
	PRIMARY KEY(`id`)
);