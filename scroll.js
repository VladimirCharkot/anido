
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop < 20){
        document.getElementById("titulo").style.fontSize = "3rem";
        document.getElementById("titular").style.height = "150px";
        
        document.getElementById("pag").gridTemplateRows = "150px 5% auto";
        document.getElementById("img_nido").style.height = "120px"
        document.getElementById("img_nido").style.width = "150px";
        document.getElementsByClassName("nav")[0].style.height = "50px";
        var btns = document.getElementsByClassName("nav_btn");
        for (i in btns) if (btns[i].style) btns[i].style.fontSize = "1em";
        console.log("FAFAFAF");
    }
    if (document.documentElement.scrollTop > 20 && document.documentElement.scrollTop < 120){
        document.getElementById("img_nido").style.height = "0px"
    }
    
    if (document.documentElement.scrollTop > 120) {
        document.getElementById("titulo").style.fontSize = "1.3rem";
        document.getElementById("titular").style.height = "50px";
        document.getElementById("img_nido").style.height = "0px";
        document.getElementById("img_nido").style.width = "30px";
        document.getElementsByClassName("nav")[0].style.height = "0px";
        var btns = document.getElementsByClassName("nav_btn");
        for (i in btns) if (btns[i].style) btns[i].style.fontSize = "0em";
        
    }
}
console.log("pasandossss");
