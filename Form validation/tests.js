
window.onload = function(){

setInterval(inpval,500);

}

var str1 =document.getElementsByClassName("str");
var valid = document.getElementsByClassName("validater");
var t = str1[1].value;
var check = 0;
function inpval(){

if(str1[0].value == ""){
valid[0].innerHTML="*This field can't be empty";

}else{
    
    
    valid[0].style.color="green";
    valid[0].innerHTML ="verified";
    check=1;
}
if(str1[1].value == ""){
valid[1].innerHTML="*This field can't be empty";
check=1;

}
else if(str1[1].value.length < 10){
    valid[1].innerHTML="*It does'nt match the minimum length required";



}
else{
    valid[1].style.color = "green";
    valid[1].innerHTML ="verified";
    check++;
    
}
 var regex  = /[a-z]/g;
 var tex = /[A-Z]/g;
 var nex = /[0-9]/g;
var spex = /[*&^%$#@]/g;
let it = str1[2];

if(it.value.match(regex) && it.value.match(tex) && it.value.match(nex) && it.value.match(spex)){
    if(it.value.length <8){
        valid[2].style.color = "red";
        valid[2].innerHTML ="*Minimum 8 words required";
    
    }   else{ 
 valid[2].style.color = "green";
    valid[2].innerHTML ="verified";
    check = 3;
   
    }


}
 /*if(it.value.length <8){
    valid[2].style.color = "red";
    valid[2].innerHTML ="*Minimum 8 words required";

    
}*/
else{
    valid[2].style.color = "red";
    valid[2].innerHTML ="*An Upper case, a number and a spl character required";

    
}



let mob = str1[4].value;

if(mob.length == 10 || mob.length == 9){

   valid[5].innerHTML = "Verified";
   valid[5].style.color ="green";
}
else{
    valid[5].innerHTML = "please Enter a valid number";
    valid[5].style.color ="red";
 
}



let addr=document.querySelector("textarea");
console.log("fht :"+addr.value);

if(addr.value == " "){
valid[6].innerHTML="This field can't be empty";
}else{

valid[6].style.color ="green";
valid[6].innerHTML = "<b>verified</b>";

}



if(str1[3].value == str1[2].value && str1[3].value != ""){
    
    valid[3].innerHTML="*verified";
    valid[3].style.color="green";
    check=3;

}else{
    valid[3].style.color="red";
valid[3].innerHTML="*Password is not matching";
check=2;
}
var rdch = document.getElementById("rd21");
var rdch1 = document.getElementById("rd1");
if(rdch.checked==true || rdch1.checked ==true){
    valid[4].style.color="green";
    valid[4].innerHTML="*option selected";
check=10;
}else{
    valid[4].innerHTML="*select an option";

}


}
function verify_sub(){
let arr = [0,1,2,3,4,5,6]; 
if(check==10){
alert("form Submitted successfully!!!");
window.location.reload();
}else{

alert("Please fill the form appropriately");
valid[0].style.display = "inline-block";
valid[1].style.display = "inline-block";
valid[2].style.display = "inline-block";
valid[3].style.display = "inline-block";
valid[4].style.display = "inline-block";
valid[5].style.display = "inline-block";
valid[6].style.display = "inline-block";


}
var rdch = document.getElementById("rd21");
var rdch1 = document.getElementById("rd1");
if(rdch.checked==true || rdch1.checked ==true){
    valid[4].style.color="green";
    valid[4].innerHTML="*option selected";

}else{
    valid[4].innerHTML="*select an option";

}





}