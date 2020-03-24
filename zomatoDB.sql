-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 09, 2019 at 07:31 PM
-- Server version: 5.7.26-0ubuntu0.18.10.1
-- PHP Version: 7.2.19-0ubuntu0.18.10.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zomatoDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `commentTb`
--

CREATE TABLE `commentTb` (
  `commentId` int(11) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `cityId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commentTb`
--

INSERT INTO `commentTb` (`commentId`, `comment`, `userId`, `cityId`) VALUES
(1, 'Nice', 1, 2),
(3, 'nice', 1, 36),
(5, 'nicer', 1, 2),
(7, 'nice', 1, 36),
(25, '1233', 1, 36),
(26, '1131', 1, 36),
(27, 'asdasd', 1, 2),
(28, 'abc', 1, 2),
(29, 'asasas', 1, 2),
(30, 'asdas', 1, 2),
(31, 'abcd', 1, 2),
(32, 'abc', 1, 2),
(33, 'addd', 1, 2),
(34, 'abc', 1, 2),
(35, 'asasdaf', 1, 2),
(36, 'comment', 1, 2),
(37, 'bad', 1, 2),
(38, 'asdasd', 1, 2),
(39, 'aaaaa', 1, 2),
(40, 'aaa', 1, 2),
(41, 'sadasd', 1, 2),
(42, 'cbjcb', 1, 31);

-- --------------------------------------------------------

--
-- Table structure for table `userTb`
--

CREATE TABLE `userTb` (
  `userId` int(11) NOT NULL,
  `userName` varchar(50) DEFAULT NULL,
  `userEmail` varchar(50) NOT NULL,
  `password` varchar(2000) NOT NULL,
  `phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userTb`
--

INSERT INTO `userTb` (`userId`, `userName`, `userEmail`, `password`, `phone`) VALUES
(1, 'Ankith', 'a@gmail.com', '1234', '987654321'),
(2, 'ankithg', 'an@gmail.com', '1234', '9876543211'),
(18, 'ankithg', 'ank@gmail.com', '1234', '9876543211'),
(25, 'a', 'a', '1234', '9876543211'),
(26, 'aaa', 'dfdfsfd', 'fsfsdf', 'dsfsdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commentTb`
--
ALTER TABLE `commentTb`
  ADD PRIMARY KEY (`commentId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userTb`
--
ALTER TABLE `userTb`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userEmail` (`userEmail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commentTb`
--
ALTER TABLE `commentTb`
  MODIFY `commentId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `userTb`
--
ALTER TABLE `userTb`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `commentTb`
--
ALTER TABLE `commentTb`
  ADD CONSTRAINT `commentTb_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userTb` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
