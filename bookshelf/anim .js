let elem = document.getElementsByClassName("wrap");
let view = document.getElementsByClassName("disp");
let tpbx = document.getElementsByClassName("andtop");


document.querySelector(".button-33").onclick = function(){
    //alert("hai");
   // alert(elem[0].className);

    elem[0].style.top = "5%";
    elem[0].style.left = "0%";
    view[0].style.display= "inline-block";
    tpbx[0].style.display= "inline-block";
    view[0].style.border= "2px dashed";
   
    view[0].style.height= "80%";
    tpbx[0].style.width= "99.5%";
 };

