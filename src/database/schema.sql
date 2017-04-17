DROP DATABASE IF EXISTS `information-retrieval`;
CREATE DATABASE `information-retrieval`;
USE `information-retrieval`;

CREATE TABLE `reviews` (
	`id` INTEGER NOT NULL AUTO_INCREMENT,
	`rating` DECIMAL NOT NULL,
	`tail` VARCHAR(64) NOT NULL,
	`title` VARCHAR(64) NOT NULL,
	`review` LONGTEXT NOT NULL,
	PRIMARY KEY(`id`),
	FULLTEXT KEY `tail_index` (`tail`),
	FULLTEXT KEY `title_index` (`title`),
	FULLTEXT KEY `review_index` (`review`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;