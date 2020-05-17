
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop < 20){
        document.getElementById("cabecera_cont").style.padding = "50px 9%";
        document.getElementById("titulo").style.fontSize = "42px";
        document.getElementById("nav").style.height = "40px";
        document.getElementById("img_nido").style.height = "120px"
        var btns = document.getElementsByClassName("nav_btn");
        for (i in btns) if (btns[i].style) btns[i].style.fontSize = "12px";
    }
    if (document.documentElement.scrollTop > 20 && document.documentElement.scrollTop < 120){
        document.getElementById("cabecera_cont").style.padding = 70-document.documentElement.scrollTop + "px 9%";
    }
    
    if (document.documentElement.scrollTop > 120) {
        document.getElementById("cabecera_cont").style.padding = "5px";
        document.getElementById("nav").style.height = "0px"
        document.getElementById("titulo").style.fontSize = "22px";
        document.getElementById("titulo").style.textAlign = "left";
        document.getElementById("img_nido").style.height = "0px"
        var btns = document.getElementsByClassName("nav_btn");
        for (i in btns) if (btns[i].style) btns[i].style.fontSize = "0px";
        
    }
}
console.log("pasandossss");
