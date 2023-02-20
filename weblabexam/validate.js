var fname = document.getElementById("fnm"); 
var addr = document.getElementById("add");
var del = document.getElementsByClassName("rad");
var toppings = document.getElementsByClassName("top");
var verify = document.getElementsByClassName("verify");
var ck =0;
function validate(){

    if(fname.value==""){
        
        verify[0].style.display ="block";
    }else{
        //verify[0].style.display ="block";
        //alert(fname.value);
       verify[0].style.color = "green";
        verify[0].innerHTML = "Verified";
        verify[0].style.display ="block";
        ck =ck +1;
    }
    if(addr.value==""){
        
        verify[1].style.display ="block";
    }else{
        //verify[0].style.display ="block";
        //alert(fname.value);
       verify[1].style.color = "green";
        verify[1].innerHTML = "Verified";
        verify[1].style.display ="block";
        ck =ck +1;
    }
    if(del[0].checked == true || del[1].checked == true){
        
        verify[2].style.color = "green";
        verify[2].innerHTML = "Verified";
        verify[2].style.display ="block";
        ck =ck +1;
        alert(ck)
    }else{
        //verify[0].style.display ="block";
        //alert(fname.value);
        verify[2].style.display ="block";
    }
    if(ck == 3){
        document.getElementById("btn").click();
    }

}