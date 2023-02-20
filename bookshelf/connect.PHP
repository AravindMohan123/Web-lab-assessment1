<?php
$dbhost="localhost";
$dbuser="root";
$dbpass ="";
$dbname ="bookdb";
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
 
if(isset($_POST["approved"])){
    echo"<script>alert('done');</script>";
if($conn){

$btitle = $_POST['btitle'];
$auth = $_POST['auth'];
$publ = $_POST['publ'];
$edn = $_POST['edition'];






$sql = "INSERT INTO  bookdata (title,author,edition,publisher) VALUES ('$btitle','$auth','$publ','$edn');";



mysqli_query($conn,$sql);

}

 }
 

?>