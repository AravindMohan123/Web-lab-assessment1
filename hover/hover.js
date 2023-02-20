

var im = document.querySelector("img");
var par = document.querySelector("p");
im.onmouseover=function (){
im.src="canopy.jpeg";
par.innerHTML="now the image is changed along with the text";

}
im.onmouseleave=function (){
    im.src="tree.jpeg";
    par.innerHTML="This is an image hover over the image";
    
    }