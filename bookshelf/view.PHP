<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<div class="disp">

<?php
$dbhost="localhost";
$dbuser="root";
$dbpass ="";
$dbname ="bookdb";
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 

if($conn){
if(isset($_POST["find"])){
 
 $srh = $_POST['srh'];
 $sql2 = "SELECT * FROM bookdata WHERE title ='$srh';";
$data = mysqli_query($conn,$sql2);



$rows = mysqli_fetch_assoc($data);
echo "accessionnum:". $rows['acssessionno']."<br>"."title : ".$rows['title']."<br>"."Author : ".$rows['author']."<br>"."Edition :" .$rows['edition']."<br>"."Publisher:"."<br>".$rows['publisher'];

}

}
 ?>
 </div>
</body>
</html>