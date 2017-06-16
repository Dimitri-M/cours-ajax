<?php 

$pdo = new PDO('mysql:host=localhost;dbname=mike_ajax','root','', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));



if($_POST)
{
	$pdo->query("INSERT INTO users(firstname,lastname, poste,dateNaissance,dateCreate)VALUES('$_POST[nom]','$_POST[prenom]','$_POST[poste]','$_POST[date]',now())");
}	

 ?>