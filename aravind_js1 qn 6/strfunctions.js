function blankornot(){

   var stri = document.getElementById("str").value;
   if(stri == ""){
      document.getElementById("colt").innerHTML = "the string is empty";
   }
else{
   document.getElementById("colt").innerHTML = "the string is not empty";
   

}

}
function slicer(){
let up = prompt("set intial bound");
let ud =prompt ("set max bound");
   var stri = document.getElementById("str").value;
 let raw =  stri.slice(up,ud);


   document.getElementById("colt").innerHTML = "the sliced string is:---"+"  "+raw ;

}
function substring(){
   var stri = document.getElementById("str").value;
let sbust = prompt("Enter the string you want to replace with");
let rplc =prompt("Enter the string you want to replace");
let rem = stri.replace(sbust,rplc)

document.getElementById("colt").innerHTML = "output" +"<br>"+"the Replaced string is:---"+"  "+rem ;

}


function binary(){


let binary = document.getElementById("str").value;
let elem = parseInt(binary, 2);

document.getElementById("colt").innerHTML = "the binary value is  :---"+"  "+elem ;

}




function math1(){
 var str1 = document.getElementById("str").value;
 
if(isNaN(str1)==false){
let t = Math.round(str1);

 document.getElementById("colt").innerHTML ="math round value is is : " +t;
}

else{
alert("Please enter a number for math functions");

}



}

function math2(){
   var str1 = document.getElementById("str").value;
  if(isNaN(str1)== false){
  let t = Math.floor(str1);
  
   document.getElementById("colt").innerHTML ="math floor value is is : " +t;
  }
  
  else{
  alert("Please enter a number for math functions");
  
  }
  
  
  }
 
  
function math3(){
   var str1 = document.getElementById("str").value;
  if(isNaN(str1)== false){
  let t = Math.ceil(str1);
  
   document.getElementById("colt").innerHTML ="math Ceil value is is : " +t;
  }
  
  else{
  alert("Please enter a number for math functions");
  
  }
  
  
  }
 
 
  function math4(){
   var str1 = document.getElementById("str").value;
  if(isNaN(str1)== false){
  let t = Math.sqrt(str1);
  
   document.getElementById("colt").innerHTML ="math Ceil value is is : " +t;
  }
  
  else{
  alert("Please enter a number for math functions");
  
  }
  
  
  }
  
 
 
function toUP(){
    var str1 = document.getElementById("str");
    stri = str1.value;
     
    document.getElementById("colt").innerHTML ="string UPPERCASE  is : " + stri.toUpperCase();
   
   
   }

   function toLower(){

    var str1 = document.getElementById("str").value;

    document.getElementById("colt").innerHTML ="string LOWERCASE is : " + str1.toLowerCase();
   }
   
   function trim(){

var str1 = document.getElementById("str").value;
str1.trim();
document.getElementById("colt").innerHTML ="string after trimming is : " + str1.toLowerCase();
   }
   function trimStart(){

    var str1 = document.getElementById("str").value;
    str1.trimStart();
    document.getElementById("colt").innerHTML ="string sfter trimstart is : " + str1.toLowerCase();
       }

       function trimEnd(){

        var str1 = document.getElementById("str").value;
        str1.trimEnd();
        document.getElementById("colt").innerHTML ="string after trimend is : " + str1.toLowerCase();
           }