-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: bpuksuct0hgrmet6xvf8-mysql.services.clever-cloud.com:3306
-- Generation Time: Dec 20, 2022 at 04:47 PM
-- Server version: 8.0.22-13
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bpuksuct0hgrmet6xvf8`
--

-- --------------------------------------------------------

--
-- Table structure for table `Cart`
--

CREATE TABLE `Cart` (
  `customer_id` int NOT NULL,
  `item_ids` json DEFAULT NULL,
  `total_price` int NOT NULL,
  `location` varchar(150) NOT NULL,
  `order_type` varchar(10) NOT NULL,
  `confirmation` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `customer_id` int NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `phone` char(11) NOT NULL,
  `customer_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `num_of_orders` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`customer_id`, `customer_name`, `phone`, `customer_type`, `num_of_orders`) VALUES
(1, 'Sayeedur Rahman', '1730721973', 'Non-regular', 0),
(2, 'Sumaiya Rifat', '1715078663', 'Non-regular', 1),
(5, 'Shahriar Hasan', '01732123456', 'Non-regular', 0),
(6, 'Nazmul Ahsan', '01723123456', 'Regular', 10),
(7, 'Mirza Mahrab', '01823123456', 'Regular', 14),
(8, 'Fahmida Haque', '01512123456', 'Non-regular', 2);

-- --------------------------------------------------------

--
-- Table structure for table `Delivery_man`
--

CREATE TABLE `Delivery_man` (
  `dm_id` int NOT NULL,
  `dm_name` varchar(50) NOT NULL,
  `status` tinyint DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Delivery_man`
--

INSERT INTO `Delivery_man` (`dm_id`, `dm_name`, `status`) VALUES
(1, 'Rana', 1),
(2, 'Jewel', 1),
(3, 'Fahmid', 0);

-- --------------------------------------------------------

--
-- Table structure for table `Items`
--

CREATE TABLE `Items` (
  `item_id` int NOT NULL,
  `item_name` varchar(30) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `item_type` varchar(20) NOT NULL,
  `price` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Items`
--

INSERT INTO `Items` (`item_id`, `item_name`, `description`, `item_type`, `price`) VALUES
(1, 'Chicken fingers', 'Fried boneless chicken stuffed with cheddar', 'Sides', 175),
(2, 'Spicy Chicken Sandwich', 'Made of a boneless white breast of chicken with the breading seasoned with a spicy blend of peppers and spices.', 'Chicken Sandwiches', 235),
(3, 'Cappucino', 'The perfect balance of espresso, steamed milk and foam.', 'Beverages', 220),
(4, 'Espresso', 'The perfect coffee.', 'Beverages', 240),
(5, 'Latte', 'For the artist in you (us).', 'Beverages', 220),
(6, 'Spicy Mustard Chicken Sandwich', 'Mustardy goodness that we know you\'ll love! ', 'Chicken Sandwiches', 195),
(7, 'Fries', 'Our best yet.', 'Sides', 90),
(8, 'Chick in Hot Salsa', 'A base of salsa to complement our scrumptious chicken sandwich.', 'Chicken Sandwiches', 160);

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `order_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `item_ids` json DEFAULT NULL,
  `total_price` int NOT NULL,
  `location` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `order_type` varchar(10) NOT NULL,
  `delivery_man` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`order_id`, `customer_id`, `item_ids`, `total_price`, `location`, `order_type`, `delivery_man`) VALUES
(8, 1, '[\"2count1\"]', 235, NULL, 'Dine-in', NULL),
(9, 1, '[\"2count1\", \"8count1\"]', 395, NULL, 'Dine-in', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Prev_orders`
--

CREATE TABLE `Prev_orders` (
  `order_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `item_name` varchar(30) NOT NULL,
  `price` int NOT NULL,
  `order_type` varchar(10) NOT NULL,
  `day_of_order` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`customer_id`,`phone`);

--
-- Indexes for table `Delivery_man`
--
ALTER TABLE `Delivery_man`
  ADD PRIMARY KEY (`dm_id`);

--
-- Indexes for table `Items`
--
ALTER TABLE `Items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `item_name` (`item_name`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `delivery_man` (`delivery_man`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `Prev_orders`
--
ALTER TABLE `Prev_orders`
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `item_name` (`item_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Customers`
--
ALTER TABLE `Customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Delivery_man`
--
ALTER TABLE `Delivery_man`
  MODIFY `dm_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Items`
--
ALTER TABLE `Items`
  MODIFY `item_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Orders`
--
ALTER TABLE `Orders`
  MODIFY `order_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `Cart_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`customer_id`);

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`delivery_man`) REFERENCES `Delivery_man` (`dm_id`),
  ADD CONSTRAINT `Orders_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`customer_id`);

--
-- Constraints for table `Prev_orders`
--
ALTER TABLE `Prev_orders`
  ADD CONSTRAINT `Prev_orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`customer_id`),
  ADD CONSTRAINT `Prev_orders_ibfk_2` FOREIGN KEY (`item_name`) REFERENCES `Items` (`item_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
