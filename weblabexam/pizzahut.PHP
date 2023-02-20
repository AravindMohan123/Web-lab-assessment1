<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #container{
            border:2px solid;
            background-color:wheat;
            position:absolute;
            width:40%;
            height:80%;
            left:30%;
            box-shadow:10px 5px 5px 6px black;
            
        }
        body{
            background-image:linear-gradient(skyblue,white);
        }
        .inp{
            margin-left:30%;
        }
        input{
            margin-top:7%;
        }
        
        h1{
            color:green;
        }
        .verify{
            color:red;
            display:none;
        }
    </style>
    <title>Document</title>
</head>
<body>
    <center><div id="container">
       
    <div class="elem">
        <u><h1>Pizza HUT</h1></u><form action='connection.PHP' method="POST">
    <span class="">name:</span> <input type="text" name="fname" id="fnm"><br><span class="verify">*this field can't be blank</span><br>
        <span>address:</span><input type="text" name="addr" id="add"><br><span class="verify">*this field can't be blank</span><br>
        <input type="radio" class="rad" value="hd" name="rd" >:home delivery
        <input type="radio" class ="rad" value="ta" name="rd">:take away<br><span class="verify">*please select the delivery type</span><br>
        <br><br>order type:<select name="pzs">

            <option>small</option>
            <option>medium</option>
            <option>large</option>




        </select><br><br><br>
        <u><strong>Additional Toppings:</strong></u><br>
       <br><input type="checkbox" class="top"name="ck1" value="1">:pepper<br>
       <input type="checkbox" class="top" name="ck2"value="2">:chilli sauce<br>
       <input type="checkbox" class="top" name ="ck3"value="3">:sweet corn<br>

        <input type="submit" name="sub" style="display:none;" value="place order" id="btn">
        <input type="button" name="vl" value="check" onclick="validate()">

    </form>
    </div></center>
    </div>
    <script type="text/javascript" src="validate.js"></script>
</body>
</html>