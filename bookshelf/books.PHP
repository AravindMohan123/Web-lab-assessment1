<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css"> 
</head>
<body>
  <center>  <div class="container">
    <h3>book data</h3>
    <?php include "connect.PHP";?>
    <form method="POST" action="">  
    <span>Title:</span><input type="text" class="txt_field" id="assn1" placeholder="Title of the book" name="btitle"><br><br><div class="alt">* mandatory field</div>
      <br> <span>Author:</span> <input type="text" class="txt_field" id="assn" placeholder="use comma if there is more than one author" name="auth"><br><br><div class="alt">* mandatory field</div>
      <br> <span>Edition:</span> <input type="text" class="txt_field" id="assn" placeholder="Edition of the book" name="edition"><br><br><div class="alt">* mandatory field</div>
      <br>  <span>Publisher:</span> <input type="text" class="txt_field" id="assn" placeholder="Name of the publisher" name="publ"><br><br><div class="alt">* mandatory field</div>
        <br><br><br>
      <input type="button" value="submit" name="sub" class="button-30" onclick="hai()" >
      <input type="submit" id="adddata" value="key" name="approved" style="display:none;" onclick="work()">
</form></div></center>

</body>
<script type="text/javascript" src="validate.js"></script>
</html>