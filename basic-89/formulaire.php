<?php 

try{
		$pdo = new PDO
		('mysql:host=localhost;dbname=mike_ajax','root','', 
		array(
			PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, 
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
			)
		);
	}catch(PDOExeption $e){
		echo 'Connexion impossible. Message error:' . $e;
	}



if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	if(!empty($_POST)){

		if(isset($_POST["id"]))
		{

			$stmt = $pdo -> prepare("DELETE FROM users WHERE id = :id");
			$stmt -> bindParam(':id', $_POST["id"]);
			$stmt -> execute();

		}

		else
		{
			$pdo->query("INSERT INTO users(firstname,lastname, poste,dateNaissance,dateCreate)VALUES('$_POST[nom]','$_POST[prenom]','$_POST[poste]','$_POST[date]',now())");
		}


	}
}

elseif ($_SERVER['REQUEST_METHOD'] == 'GET')
{

	if(empty($_GET))
		$stmt = $pdo -> prepare("SELECT * FROM users");

	else
		$stmt = $pdo -> prepare("SELECT * FROM users WHERE id = " .$_GET['id']);
	
	$stmt -> execute();
	//var_dump($stmt ->fetchAll());
	echo json_encode($stmt ->fetchAll());

}	

 ?>