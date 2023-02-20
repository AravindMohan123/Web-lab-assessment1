<?php
include 'connection.PHP';
$sq1 = "SELECT * FROM orderdb";
$qrt = mysqli_query($conn,$sq1);
$rows = mysqli_num_rows($qrt);
$i =0;
while($i < $rows){
$prt = mysqli_fetch_assoc($qrt);
echo "<table border='1px solid'><tr><td> ".$prt['name']."</td><td>".$prt['address']."</td><td>".$prt['delivery']."</td><td>".$prt['ordertype']."</td><td>".$prt['toppings']."</td>"."</tr><br>";
$i =$i +1;

}



?>
