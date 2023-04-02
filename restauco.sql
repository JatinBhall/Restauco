-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2023 at 06:07 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id19557630_restauco`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `userId` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`userId`, `name`, `password`, `email`) VALUES
('jatinbhall', 'Jatin', 'Jatin4631', 'jatinbhaal0@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customerId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `numberOfGuest` int(11) NOT NULL,
  PRIMARY KEY (`customerId`),
  KEY `phone` (`phone`) USING BTREE
) ENGINE=InnoDB ;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerId`, `name`, `email`, `phone`, `numberOfGuest`) VALUES
(96, 'jatin bhall', 'jatinbhaal0@gmail.com', '9991434333', 20);

-- --------------------------------------------------------

--
-- Table structure for table `menu_item`
--

DROP TABLE IF EXISTS `menu_item`;
CREATE TABLE IF NOT EXISTS `menu_item` (
  `itemId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `description` mediumtext,
  `imageName` mediumtext ,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB ;

--
-- Dumping data for table `menu_item`
--

INSERT INTO `menu_item` (`itemId`, `title`, `price`, `description`, `imageName`, `category`) VALUES
(50, 'Sandwich', '20.00', 'Making a reservation at Délicious restaurant is easy and', 'sandwich.jpg', 'Breakfast'),
(51, 'Tuna Steak', '20.00', 'Making a reservation at Délicious restaurant is easy.', 'tuna-steaks-cucumber-relish-a613f96.jpg', 'Dinner'),
(52, 'Hamburger', '10.00', 'Hamburger is one of the popular menus items here.', 'Hamburger-with-Sesame-Seeds-Cheese-and-Veggies.png', 'Lunch'),
(53, 'Flatbread', '9.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.', '1492092534-shrimp-scampi-flatbread-4000x4000.jpg', 'Breakfast'),
(54, 'Grilled Egg With Garlic', '11.00', 'Grilled Egg With Garlic Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo ', 'fried-eggs-greens-garlic-and-chilli-124132-1.jpg', 'Lunch'),
(55, 'Organic Tomato Salad', '7.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaera', 'Tomato-Onion-Salad-Recipe-1.jpg', 'Dinner'),
(56, 'Eggplant Parmigiana', '9.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaer', 'Italian_Baked_Eggplant_in_Tomato_and_Parmesan_-_Melanzane_alla_Parmigiana_Recipe-1.jpg', 'Breakfast'),
(57, 'Rack Of Lamb', '14.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam sae', 'one-pan-glazed-rack-of-lamb-with-spiced-red-onions-potatoes-d70c1f0.jpg', 'Lunch'),
(58, 'Spicy Meatballs', '8.00', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe q', 'spicy-meatballs-featured-2022.jpg', 'Dinner'),
(59, 'Warm Spinach Dip & Chips', '14.49', 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.', 'WGC-__-Spinach-Dip-2-copy.jpg', 'Breakfast'),
(60, 'Jumbo Lump Crab Stack', '12.49', 'Spinach and artichokes in a creamy cheese dip with warm tortilla chips & salsa.', '5ae817aeded5eb063fa7960ea6d790e6.jpg', 'Lunch'),
(61, 'Grilled Top Sirlion Steak', '11.00', 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.', 'wholesomeyum-Perfect-Grilled-Sirloin-Steak.jpg', 'Dinner'),
(63, 'Jamaican Chicken Wings', '15.70', 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flake', 'The-Best-Jamaican-Jerk-Wings.jpg', 'Lunch'),
(64, 'Steak Oscar', '13.99', 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.', 'SteakOscarRecipe1.jpg', 'Dinner'),
(66, 'Bahamian Seafood Chowder', '20.00', 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.', '6798fef7ce49383b5c06b2be6516c91a.jpg', 'Lunch'),
(67, 'Skirt Steak Churrasco', '22.00', 'Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.', 'merlin_205050633_c4cd73c9-8b75-42b7-a25c-fa3cff7efbff-threeByTwoMediumAt2X.jpg', 'Dinner'),
(78, 'Key Wast Machos', '11.99', 'Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeño', 'how-to-make-the-best-nachos-2-Photograph-ÃÂ©-Good-Food-Stories-LLC-720x720.jpg', 'Breakfast'),
(80, 'Crispy Onions Rings', '12.00', 'A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes', 'homemade-onion-rings-everydaydishes_com-H2.jpg', 'Breakfast');

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tableNumber` int(11) NOT NULL,
  `bookingTimeStamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `expectedDate` date NOT NULL,
  `expectedSlot` varchar(50) NOT NULL,
  `customerId` int(11) NOT NULL,
  `message` text,
  PRIMARY KEY (`id`),
  KEY `customerId` (`customerId`)
) ENGINE=InnoDB ;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `tableNumber`, `bookingTimeStamp`, `expectedDate`, `expectedSlot`, `customerId`, `message`) VALUES
(261, 1, '2023-03-23 11:03:28', '2023-03-29', 'Lunch', 96, 'hi'),
(262, 2, '2023-03-23 11:03:29', '2023-03-29', 'Lunch', 96, 'hi'),
(263, 3, '2023-03-23 11:03:29', '2023-03-29', 'Lunch', 96, 'hi'),
(264, 4, '2023-03-23 11:03:29', '2023-03-29', 'Lunch', 96, 'hi'),
(265, 5, '2023-03-23 11:03:29', '2023-03-29', 'Lunch', 96, 'hi');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `reservation_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`customerId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
