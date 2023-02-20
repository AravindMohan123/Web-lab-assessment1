<?php
include 'connection.PHP';



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
<?php 
            $sq = "SELECT * FROM orderdb;";
            $qur = mysqli_query($conn,$sq);
            $rows =mysqli_num_rows($qur);
            $sql1 ="SELECT name,delivery,ordertype,toppings FROM orderdb WHERE id = $rows;";    
            $val = mysqli_query($conn,$sql1);
            $fet = mysqli_fetch_assoc($val);
                echo "<br>".$fet['delivery'];

            $odt =  $fet['ordertype'];
            $del =  $fet['delivery'];
            $tp = $fet['toppings'];
            if($odt == 'small' ){
                    $pizza = 200;
            }else if($odt =='medium'){

                $pizza = 300;
            }else{
                $pizza = 400;
            }

            if($del == "hd"){
                $op = 100;

            }else{
                $op=0;
            }
            if($tp == 1 || $tp == 2 ||$tp == 3 ){

                $addon = 50;

            }elseif($tp==12 || $tp==21 || $tp==23 || $tp==32|| $tp ==13 || $tp==31){

                $addon =100;
            }elseif($tp == 0){
                    $addon =0;
            }
            
            else{
                $addon =150;
            }

            $total = $addon + $op +$pizza;



?>
    <center><div style="border:2px dashed;width:500px;height:300px;">
        <center><u><h1>Bill amount</h1></u>
        <br><span class="amt">name: <?php echo $fet['name'];  ?><span><br>
           <br><span class="amt">pizza: <?php echo $pizza;  ?><span><br>
           <br><span class="amt">delivery charge : <?php echo $op   ?> <span ><br>
           <br><span class="amt">toppings : <?php  echo $addon  ?><span><br>
           <h3>total :: <?php  echo $total  ?></h3>
</center>


</div></center>
</body>
</html>