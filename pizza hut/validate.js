function check(){
    let inp1 = document.getElementById("fname").value;
    let txta = document.getElementById("txtar").value;
    let ord1 = document.getElementById("otype");
    let ord2 = document.getElementById("otype1");
    let check = 0;
if(inp1 == ""){

document.getElementById("sp1").innerHTML="Plz enter your fullname";


}else{
    document.getElementById("sp1").style.color="green";
    document.getElementById("sp1").innerHTML="Verified";
   check =1;
}

if(txta == ""){

    document.getElementById("sp2").innerHTML="This field can't be empty";
    
    }else{
        document.getElementById("sp2").style.color="green";
        document.getElementById("sp2").innerHTML="Verified";
        check = 2
    }

if(ord1.checked || ord2.checked){
    document.getElementById("sp3").style.color="green";
    document.getElementById("sp3").innerHTML="Verified";

   check =3;
}else{

    document.getElementById("sp3").innerHTML="Verified";
    document.getElementById("sp3").innerHTML="Plz select the delivery type";


}
if(check == 3){

let a = document.getElementById("nextp");
a.click();


}else{

    alert("please fill the form properly");

}
}