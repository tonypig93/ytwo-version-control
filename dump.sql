-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: vcdb
-- ------------------------------------------------------
-- Server version	5.7.18

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

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GROUP_NAME` varchar(45) NOT NULL,
  `DESCRIPTION` varchar(1000) DEFAULT NULL,
  `PARENT_ID` int(11) NOT NULL DEFAULT '0',
  `MEM_NUMBER` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `GroupName_UNIQUE` (`GROUP_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1000,'YTWO','a company',0,2),(1001,'ZTWO','hehe',0,0),(1002,'XTWO','destroy the world with codes',0,0);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prj_member`
--

DROP TABLE IF EXISTS `prj_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_member` (
  `ID` int(11) NOT NULL DEFAULT '1000',
  `USER_FK` int(11) NOT NULL,
  `PRJ_FK` int(11) NOT NULL,
  `INPUT_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_member`
--

LOCK TABLES `prj_member` WRITE;
/*!40000 ALTER TABLE `prj_member` DISABLE KEYS */;
/*!40000 ALTER TABLE `prj_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prj_task`
--

DROP TABLE IF EXISTS `prj_task`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_task` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PRJ_FK` int(11) NOT NULL,
  `TASK_TITLE` varchar(45) NOT NULL,
  `TASK_DESCRIPTION` varchar(2000) DEFAULT NULL,
  `INPUT_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  `IS_DONE` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_task`
--

LOCK TABLES `prj_task` WRITE;
/*!40000 ALTER TABLE `prj_task` DISABLE KEYS */;
INSERT INTO `prj_task` VALUES (1000,1000,'Framework','basic codes of everything','2017-05-05 13:40:21',1),(1001,1000,'Invoice Dashboard','as you can see','2017-05-05 13:41:39',0);
/*!40000 ALTER TABLE `prj_task` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prj_version`
--

DROP TABLE IF EXISTS `prj_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_version` (
  `ID` int(11) NOT NULL DEFAULT '1000',
  `PRJ_FK` int(11) NOT NULL,
  `V_MAJOR` int(11) NOT NULL,
  `V_MINOR` int(11) NOT NULL,
  `V_PATCH` int(11) NOT NULL,
  `USER_FK` int(11) NOT NULL,
  `INPUT_DATE` varchar(45) DEFAULT 'now()',
  `REPO_CODE` varchar(45) DEFAULT NULL,
  `LOG_BUG` varchar(2000) DEFAULT NULL,
  `LOG_FEATURE` varchar(2000) DEFAULT NULL,
  `LOG_GENERAL` varchar(4000) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_version`
--

LOCK TABLES `prj_version` WRITE;
/*!40000 ALTER TABLE `prj_version` DISABLE KEYS */;
/*!40000 ALTER TABLE `prj_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PRJ_NAME` varchar(45) NOT NULL,
  `GROUP_FK` int(11) NOT NULL DEFAULT '0',
  `IS_PUBLIC` tinyint(4) NOT NULL DEFAULT '1',
  `CURRENT_VERSION` varchar(45) DEFAULT NULL,
  `PROGRESS` int(11) NOT NULL DEFAULT '0',
  `MEM_NUMBER` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `PRJ_NAME_UNIQUE` (`PRJ_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1000,'YTWO App',1000,1,'0.0.1',10,0),(1003,'YTWO desktop',1000,1,'0.0.2',50,0),(1004,'Version Control',1000,0,'0.1.1',30,0),(1005,'Fusion',1001,1,'1.3.1',80,0);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `INPUT_DATE` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `GROUP_FK` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  KEY `GROUP_FK_idx` (`GROUP_FK`)
) ENGINE=InnoDB AUTO_INCREMENT=1002 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1000,'hay','202cb962ac59075b964b07152d234b70','2017-05-03 09:59:23',1000),(1001,'tony','123','2017-05-03 10:00:18',1000);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-05 17:15:49
