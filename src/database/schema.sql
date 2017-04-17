DROP DATABASE IF EXISTS `information-retrieval`;
CREATE DATABASE `information-retrieval`;
USE `information-retrieval`;

CREATE TABLE `reviews` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(64) NOT NULL,
	`review` longtext NOT NULL,
	PRIMARY KEY(`id`),
	FULLTEXT KEY `review_index` (`review`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;