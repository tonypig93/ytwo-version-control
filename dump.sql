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
-- Table structure for table `group_role`
--

DROP TABLE IF EXISTS `group_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_role`
--

LOCK TABLES `group_role` WRITE;
/*!40000 ALTER TABLE `group_role` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_role` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `groups` VALUES (1000,'YTWO','a company',0,6),(1001,'ZTWO','hehe',0,1),(1002,'XTWO','destroy the world with codes',0,1);
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
  `ROLE_FK` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_member`
--

LOCK TABLES `prj_member` WRITE;
/*!40000 ALTER TABLE `prj_member` DISABLE KEYS */;
INSERT INTO `prj_member` VALUES (17,1013,1020,'2017-05-10 15:41:59',1),(19,1018,1020,'2017-05-10 15:41:59',3),(20,1019,1020,'2017-05-10 15:41:59',4),(21,1013,1021,'2017-05-10 15:50:55',1),(22,1016,1021,'2017-05-10 15:50:55',0),(26,1022,1020,'2017-05-12 15:46:53',1),(29,1013,1026,'2017-05-23 14:15:04',8),(30,1018,1026,'2017-05-23 17:05:02',10);
/*!40000 ALTER TABLE `prj_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prj_power`
--

DROP TABLE IF EXISTS `prj_power`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_power` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `POWER_NAME` varchar(45) NOT NULL DEFAULT '0',
  `POWER_VALUE` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `POWER_NAME_UNIQUE` (`POWER_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_power`
--

LOCK TABLES `prj_power` WRITE;
/*!40000 ALTER TABLE `prj_power` DISABLE KEYS */;
INSERT INTO `prj_power` VALUES (6,'Version: Update Patch',1),(7,'Version: Update Minor',2),(8,'Version: Update Majoy',4),(9,'Task: Management',8),(10,'Member: Management',16),(11,'Project: Properties',32),(12,'Role: Management',64);
/*!40000 ALTER TABLE `prj_power` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prj_role`
--

DROP TABLE IF EXISTS `prj_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_role` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ROLE_NAME` varchar(45) NOT NULL,
  `POWER` int(11) NOT NULL DEFAULT '0',
  `PRJ_FK` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_role`
--

LOCK TABLES `prj_role` WRITE;
/*!40000 ALTER TABLE `prj_role` DISABLE KEYS */;
INSERT INTO `prj_role` VALUES (1,'Leader',63,1020),(2,'Developer',3,1020),(3,'Project Manager',7,1020),(4,'Product Manager',56,1020),(5,'Tester',9,1020),(8,'Administrator',124,1026),(10,'Developer',1,1026),(11,'Tester',3,1026),(12,'Supervisor',19,1026);
/*!40000 ALTER TABLE `prj_role` ENABLE KEYS */;
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
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`prj_task_AFTER_INSERT` AFTER INSERT ON `prj_task` FOR EACH ROW
BEGIN
	update project set TASK_TOTAL=TASK_TOTAL + 1 where project.ID = new.PRJ_FK;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`prj_task_AFTER_DELETE` AFTER DELETE ON `prj_task` FOR EACH ROW
BEGIN
	update project set TASK_TOTAL = TASK_TOTAL - 1 where project.ID = old.PRJ_FK;
    if old.IS_DONE=1 then
		update project set TASK_DONE = TASK_DONE - 1 where project.ID = old.PRJ_FK;
	end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `prj_version`
--

DROP TABLE IF EXISTS `prj_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prj_version` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `PRJ_FK` int(11) NOT NULL,
  `V_MAJOR` int(11) NOT NULL,
  `V_MINOR` int(11) NOT NULL,
  `V_PATCH` int(11) NOT NULL,
  `USER_FK` int(11) NOT NULL,
  `REPO_CODE` varchar(45) DEFAULT NULL,
  `LOG_BUG` varchar(2000) DEFAULT NULL,
  `LOG_FEATURE` varchar(2000) DEFAULT NULL,
  `LOG_GENERAL` varchar(2000) DEFAULT NULL,
  `INPUT_DATE` datetime DEFAULT CURRENT_TIMESTAMP,
  `STATUS` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: editing\n1: closed',
  `TYPE` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: development version\n1: production version',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1015 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prj_version`
--

LOCK TABLES `prj_version` WRITE;
/*!40000 ALTER TABLE `prj_version` DISABLE KEYS */;
INSERT INTO `prj_version` VALUES (1001,1020,0,1,0,1013,NULL,NULL,NULL,NULL,'2017-05-17 11:55:15',0,0),(1002,1020,0,1,1,1013,'23213123','bug','f','ggg','2017-05-17 11:58:52',0,0),(1003,1020,0,1,2,1013,'423432421','','<p>ewfwf</p>','<ol><li><strong><u>432423</u></strong></li><li><strong><u>33232</u></strong></li><li><strong><u>4</u></strong></li></ol>','2017-05-17 16:50:36',0,0),(1004,1020,0,1,3,1013,'3232323','','','<h1>dfsfsafsfd</h1>','2017-05-17 16:51:58',0,0),(1005,1020,0,1,4,1013,'213123','','','','2017-05-17 16:52:52',0,0),(1006,1020,0,1,5,1013,'1233213','','','<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>','2017-05-17 16:53:46',1,0),(1007,1020,0,1,6,1013,'123123','','','','2017-05-17 17:01:54',1,0),(1008,1020,0,1,7,1013,'432423','','','','2017-05-17 17:02:26',1,0),(1009,1020,0,1,8,1013,'33213','','','<p>test update front22222dsfsdfsafsfd</p><p>77777dfsfsf</p><p>fdfsddfds</p><p>1221312321</p><p>rrrrr</p><p>qqqqqqqq</p><p>eeee</p><p>mmmmmmm</p>','2017-05-18 16:04:55',1,0),(1010,1020,0,1,9,1013,'123','','','','2017-05-19 10:39:14',1,0),(1011,1020,0,1,0,1013,'1234','','','','2017-05-19 11:16:10',1,1),(1013,1023,0,1,2,1013,'2380','','','<p>Start using version control for YTWO app</p>','2017-05-19 13:32:22',1,0),(1014,1026,1,8,4,1013,'123','','','','2017-05-23 15:47:19',0,0);
/*!40000 ALTER TABLE `prj_version` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`prj_version_BEFORE_INSERT` BEFORE INSERT ON `prj_version` FOR EACH ROW
BEGIN
	declare last_version varchar(45);
    declare this_version varchar(45);
    select concat(prj_version.V_MAJOR,prj_version.V_MINOR,prj_version.V_PATCH) into last_version from prj_version where prj_version.PRJ_FK=new.PRJ_FK and prj_version.TYPE=new.TYPE order by ID desc limit 1;
    set this_version = concat(new.V_MAJOR,new.V_MINOR,new.V_PATCH);
    if this_version = last_version then
		SIGNAL SQLSTATE 'HY000' SET mysql_errno = 22, message_text = 'duplicated version';
	end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`prj_version_AFTER_INSERT` AFTER INSERT ON `prj_version` FOR EACH ROW
BEGIN
	if new.STATUS=1 then
		if new.TYPE=1 then
			update project set CURRENT_VERSION = concat(new.V_MAJOR, '.', new.V_MINOR, '.', new.V_PATCH) where project.ID = new.PRJ_FK;
		else
			update project set CURRENT_D_VERSION = concat(new.V_MAJOR, '.', new.V_MINOR, '.', new.V_PATCH) where project.ID = new.PRJ_FK;
        end if;
    end if;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `DESCRIPTION` varchar(2000) DEFAULT NULL,
  `MARK_DELETE` tinyint(4) NOT NULL DEFAULT '0',
  `TASK_DONE` int(11) NOT NULL DEFAULT '0',
  `TASK_TOTAL` int(11) DEFAULT '0',
  `CURRENT_D_VERSION` varchar(45) DEFAULT NULL,
  `USER_FK` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `ID_UNIQUE` (`ID`),
  UNIQUE KEY `PRJ_NAME_UNIQUE` (`PRJ_NAME`)
) ENGINE=InnoDB AUTO_INCREMENT=1027 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1020,'YTWO test',1000,1,'0.1.9','app for YTWO, customers, suppliers',0,0,2,NULL,1013),(1021,'YTWO desktop',1000,1,NULL,'desktop software service',0,0,2,NULL,1013),(1023,'YTWO App for Pad',1000,1,NULL,'A YTWO app designed for Pad, including several dashboards and supplier.',0,0,0,'0.1.2',1013),(1026,'test',1000,1,NULL,'fdsfsf',0,0,0,NULL,1013);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`project_AFTER_INSERT` AFTER INSERT ON `project` FOR EACH ROW
BEGIN
	declare power_sum int;
    select sum(POWER_VALUE) into power_sum from prj_power;
	insert into prj_role(ROLE_NAME,POWER,PRJ_FK) values ('Administrator', power_sum, new.ID);
	insert into prj_member (USER_FK,PRJ_FK,ROLE_FK) values (new.USER_FK, new.ID,LAST_INSERT_ID());
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
) ENGINE=InnoDB AUTO_INCREMENT=1023 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1013,'hay','202cb962ac59075b964b07152d234b70','2017-05-08 17:30:24',1000,'hay@qq.com'),(1016,'tom','c4ca4238a0b923820dcc509a6f75849b','2017-05-09 16:35:10',1000,'t@qq.com'),(1018,'tim','c4ca4238a0b923820dcc509a6f75849b','2017-05-09 16:35:33',1000,'tim@qq.com'),(1019,'rick','c4ca4238a0b923820dcc509a6f75849b','2017-05-09 16:35:46',1000,'rick@qq.com'),(1020,'walt','c4ca4238a0b923820dcc509a6f75849b','2017-05-10 15:40:15',1002,'w@qq.com'),(1021,'issac','c4ca4238a0b923820dcc509a6f75849b','2017-05-12 15:10:09',1000,'i@q.com'),(1022,'window','c4ca4238a0b923820dcc509a6f75849b','2017-05-12 15:10:51',1000,'w@q.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`user_AFTER_INSERT` AFTER INSERT ON `user` FOR EACH ROW
BEGIN
	update groups set MEM_NUMBER = MEM_NUMBER + 1 where groups.ID = new.GROUP_FK;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `vcdb`.`user_AFTER_DELETE` AFTER DELETE ON `user` FOR EACH ROW
BEGIN
	update groups set MEM_NUMBER = MEM_NUMBER - 1 where groups.ID = old.GROUP_FK;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping routines for database 'vcdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `add_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_user`(userName varchar(45), password varchar(45), email varchar(45), groupId int)
BEGIN
	insert into user (USER_NAME,PASSWORD,EMAIL,GROUP_FK) values (userName,password,email,groupId);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `create_project` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `create_project`(name varchar(45), groupId int, visibility tinyint(4),description varchar(2000),out output int)
BEGIN
	insert into project (PRJ_NAME,GROUP_FK,VISIBILITY,DESCRIPTION) values (name, groupId,visibility,description);
    set output = LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `delete_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `delete_user`(id int)
BEGIN
	delete from user where user.ID=id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-23 17:12:00
