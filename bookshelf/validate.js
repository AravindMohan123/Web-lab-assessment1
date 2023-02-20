
var valid = document.getElementsByClassName("txt_field");
var altext = document.getElementsByClassName("alt");
let ch = 0;
function hai(){alert("hai  ="+ valid[0].value);
let i=0;
   while( i < 4){
    
    if(valid[i].value==""){
        
    altext[i].style.display= "block";
      
    }else{
        altext[i].style.display= "inline-block";
        altext[i].style.color= "green";
        altext[i].innerHTML= "VERIFIED";
        ch = ch +1;

   }
    

i++;

   }
  
   if(ch > 0){
    document.getElementById("adddata").click();
   }
}
function work(){


    
}