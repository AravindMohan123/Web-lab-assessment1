<?php

$conn = mysqli_connect('localhost','root','','pizzadb');

if($conn){

echo "connection established successfully";
if(isset($_POST['sub'])){
$name = $_POST['fname'];
$addr=$_POST['addr'];
$radio = $_POST['rd'];
$pzsize = $_POST['pzs'];
$topping1 =$_POST['ck1'];
$topping2 =$_POST['ck2'];
$topping3 =$_POST['ck3']; 
echo "<br>".$name;
echo "<br>".$addr;
echo "<br>".$radio;
echo "<br>".$pzsize;
$opt = $topping1.$topping2.$topping3;

$sql = "INSERT INTO orderdb(name,address,delivery,ordertype,toppings)VALUES('$name','$addr','$radio','$pzsize','$opt')";

mysqli_query($conn,$sql);

echo "order submitted";

}
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="billing.PHP" method="POST">
    <input type="submit" style="display:none;" id="call" name="push">
</form>
<script>

window.onload = function (){

   setTimeout(click,500);

    

}
function click(){
    document.getElementById("call").click();
    
}

</script>
</body>
</html>