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
INSERT INTO `groups` VALUES (1000,'YTWO','a company',0,4),(1001,'ZTWO','hehe',0,1),(1002,'XTWO','destroy the world with codes',0,1);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prj_member`
--

DROP TABLE IF EXISTS `prj_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_member` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_FK` int(11) NOT NULL,
  `PRJ_FK` int(11) NOT NULL,
  `INPUT_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  `ROLE_FK` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_member`
--

LOCK TABLES `prj_member` WRITE;
/*!40000 ALTER TABLE `prj_member` DISABLE KEYS */;
INSERT INTO `prj_member` VALUES (17,1013,1020,'2017-05-10 15:41:59',1),(18,1016,1020,'2017-05-10 15:41:59',2),(19,1018,1020,'2017-05-10 15:41:59',3),(20,1019,1020,'2017-05-10 15:41:59',4),(21,1013,1021,'2017-05-10 15:50:55',1),(22,1016,1021,'2017-05-10 15:50:55',0);
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
  `GROUP_FK` int(11) NOT NULL DEFAULT '1000',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1018 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_task`
--

LOCK TABLES `prj_task` WRITE;
/*!40000 ALTER TABLE `prj_task` DISABLE KEYS */;
INSERT INTO `prj_task` VALUES (1014,1020,'task','something','2017-05-10 15:41:59',0,1000),(1015,1020,'task','anything','2017-05-10 15:41:59',0,1000),(1016,1021,'task','todo','2017-05-10 15:50:55',0,1000),(1017,1021,'task','to do 2','2017-05-10 15:50:55',0,1000);
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
  `VISIBILITY` tinyint(4) NOT NULL DEFAULT '0',
  `CURRENT_VERSION` varchar(45) DEFAULT NULL,
  `MEM_NUMBER` int(11) NOT NULL DEFAULT '0',
  `DESCRIPTION` varchar(2000) DEFAULT NULL,
  `MARK_DELETE` tinyint(4) NOT NULL DEFAULT '0',
  `TASK_DONE` int(11) NOT NULL DEFAULT '0',
  `TASK_TOTAL` int(11) DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `PRJ_NAME_UNIQUE` (`PRJ_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=1022 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1020,'YTWO Mobile App fjdlsfj. jlkjljflkd fjkdl',1000,1,NULL,4,'app for YTWO, customers, suppliers',0,0,2),(1021,'YTWO desktop',1000,1,NULL,2,'desktop software service',0,0,2);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_NAME` varchar(45) NOT NULL,
  `POWER` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `ROLE_NAME_UNIQUE` (`ROLE_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Leader',63),(2,'Developer',1),(3,'Project Manager',7),(4,'Product Manager',56);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
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
  `EMAIL` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`),
  KEY `GROUP_FK_idx` (`GROUP_FK`)
) ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1013,'hay','202cb962ac59075b964b07152d234b70','2017-05-08 17:30:24',1000,'hay@qq.com'),(1016,'tom','c4ca4238a0b923820dcc509a6f75849b','2017-05-09 16:35:10',1000,'t@qq.com'),(1018,'tim','c4ca4238a0b923820dcc509a6f75849b','2017-05-09 16:35:33',1000,'tim@qq.com'),(1019,'rick','c4ca4238a0b923820dcc509a6f75849b','2017-05-09 16:35:46',1000,'rick@qq.com'),(1020,'walt','c4ca4238a0b923820dcc509a6f75849b','2017-05-10 15:40:15',1002,'w@qq.com');
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

-- Dump completed on 2017-05-11 17:18:57
