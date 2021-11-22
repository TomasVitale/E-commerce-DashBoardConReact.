-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: grupo8
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

 Create Database grupo8;
 use grupo8;

-- Table structure for table `carrito_compras`
--

DROP TABLE IF EXISTS `carrito_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito_compras` (
  `id_carrito` int(11) NOT NULL AUTO_INCREMENT,
  `precio-total` decimal(10,0) NOT NULL,
  `cantidad-productos` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `estado` varchar(100) NOT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `carrito_compras_FK` (`id_user`),
  CONSTRAINT `carrito_compras_FK` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito_compras`
--

LOCK TABLES `carrito_compras` WRITE;
/*!40000 ALTER TABLE `carrito_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` text NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Silla Alexia'),(2,'Mesa Pino'),(3,'Silla Ofelia'),(4,'Sillon Galaxy'),(5,'Mesa Carioca'),(6,'Silla Carmela'),(7,'Mesa Bartaloni'),(8,'Sillon Dunstall'),(9,'Silla Scipsey'),(10,'Mesa Brophy');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id_products` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `color` text NOT NULL,
  `measure` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `image` text NOT NULL,
  `description` text DEFAULT NULL,
  PRIMARY KEY (`id_products`),
  KEY `products_FK` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Silla Alexia',15090,'Indigo',NULL,1,'http://dummyimage.com/156x100.jpg/dddddd/000000',NULL),(2,'Mesa Pino',29701,'Turquoise',NULL,2,'http://dummyimage.com/140x100.jpg/cc0000/ffffff',NULL),(3,'Silla Ofelia',49604,'Red',NULL,3,'http://dummyimage.com/201x100.jpg/5fa2dd/ffffff',NULL),(4,'Sillon Galaxy',46609,'Teal',NULL,4,'http://dummyimage.com/128x100.jpg/cc0000/ffffff',NULL),(5,'Mesa Carioca',22716,'Maroon',NULL,5,'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',NULL),(6,'Silla Carmela',28693,'Blue',NULL,6,'http://dummyimage.com/227x100.jpg/5fa2dd/ffffff',NULL),(7,'Mesa Bartaloni',36488,'Maroon',NULL,7,'http://dummyimage.com/138x100.jpg/dddddd/000000',NULL),(8,'Sillon Dunstall',26052,'Maroon',NULL,8,'http://dummyimage.com/127x100.jpg/5fa2dd/ffffff',NULL),(9,'Silla Scipsey',32613,'Fuscia',NULL,9,'http://dummyimage.com/131x100.jpg/ff4444/ffffff',NULL),(10,'Mesa Brophy',39020,'Purple',NULL,10,'http://dummyimage.com/225x100.jpg/dddddd/000000',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products-carrito`
--

DROP TABLE IF EXISTS `products-carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products-carrito` (
  `id_productsCarrito` int(11) NOT NULL AUTO_INCREMENT,
  `id_products` int(11) NOT NULL,
  `id_carrito` int(11) NOT NULL,
  `precio-sentado` decimal(10,0) NOT NULL,
  `cantidad-por-producto` int(11) NOT NULL,
  PRIMARY KEY (`id_productsCarrito`),
  KEY `products_carrito_FK` (`id_carrito`),
  KEY `products_carrito_FK_1` (`id_products`),
  CONSTRAINT `products_carrito_FK` FOREIGN KEY (`id_carrito`) REFERENCES `carrito_compras` (`id_carrito`),
  CONSTRAINT `products_carrito_FK_1` FOREIGN KEY (`id_products`) REFERENCES `products` (`id_products`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products-carrito`
--

LOCK TABLES `products-carrito` WRITE;
/*!40000 ALTER TABLE `products-carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `products-carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(29) NOT NULL,
  `telefono` varchar(19) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Tamma Kyffin','tkyffin0@tamu.edu','(206) 9828047','MuNPr9bhH4y','https://robohash.org/nemopariaturblanditiis.jpg?size=50x50&set=set1'),(2,'Leicester Romanet','lromanet1@simplemachines.org','(169) 9395611','oSyqMZewiwfD','https://robohash.org/sapienteprovidentconsectetur.jpg?size=50x50&set=set1'),(3,'Chrysler Kenright','ckenright2@stanford.edu','(732) 2268489','cWGqGIzJlRG','https://robohash.org/quissaepeesse.jpg?size=50x50&set=set1'),(4,'Tana Scammell','tscammell3@epa.gov','(332) 6774582','xlcq6Fi','https://robohash.org/repellatsitnihil.jpg?size=50x50&set=set1'),(5,'Petey MacGahy','pmacgahy4@theatlantic.com','(853) 9664878','yqwi4uAR5','https://robohash.org/iustolaborumdignissimos.jpg?size=50x50&set=set1'),(6,'Kristyn Insley','kinsley5@google.nl','(947) 1736966','ETkUMEHCrJ','https://robohash.org/eadeseruntut.jpg?size=50x50&set=set1'),(7,'Luisa Giraldez','lgiraldez6@oaic.gov.au','(854) 3357223','hcCiQB8Mme','https://robohash.org/cupiditatemolestiaeperspiciatis.jpg?size=50x50&set=set1'),(8,'Celia Hengoed','chengoed7@cocolog-nifty.com','(217) 3216539','sBcwHLoiL','https://robohash.org/assumendaaliquamveniam.jpg?size=50x50&set=set1'),(9,'Barron Kubin','bkubin8@1688.com','(645) 8976668','LqyQUZfhd','https://robohash.org/fugavoluptasreiciendis.jpg?size=50x50&set=set1'),(10,'Latrina Chaffe','lchaffe9@deviantart.com','(281) 1861787','BU0eyQRZnO','https://robohash.org/pariaturaliaspossimus.jpg?size=50x50&set=set1');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo8'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-21 19:44:16
