
window.onscroll = function() {scrollFunction()};

window.original_titulo_fontsize = document.getElementById("titulo").style.fontSize;
window.original_titulo_transf = document.getElementById("titulo").style.transform;
window.original_titular_fontsize = document.getElementById("titular").style.height;
window.original_nidito_height = document.getElementById("img_nido").style.height;
window.original_nidito_width = document.getElementById("img_nido").style.width
window.original_nav_height = document.getElementsByClassName("nav")[0].style.height;


function scrollFunction() {
    if (document.documentElement.scrollTop < 40){
        document.getElementById("titulo").style.transform = window.original_titulo_transf;
        document.getElementById("titulo").style.fontSize = window.original_titulo_fontsize;
        document.getElementById("titular").style.height = window.original_titular_fontsize;
        
        document.getElementById("img_nido").style.height = window.original_nidito_height;
        document.getElementById("img_nido").style.width = window.original_nidito_width;
        
        document.getElementsByClassName("nav")[0].style.height = window.original_nav_height;
        var btns = document.getElementsByClassName("nav_btn");
        for (i in btns) if (btns[i].style) btns[i].style.fontSize = "1em";
    }
    if (document.documentElement.scrollTop > 40) {
        document.getElementById("titulo").style.transform = "translateY(0)";
        document.getElementById("titulo").style.fontSize = "1rem";
        document.getElementById("titular").style.height = "50px";
        document.getElementById("img_nido").style.height = "0px";
        document.getElementById("img_nido").style.width = "30px";
        document.getElementsByClassName("nav")[0].style.height = "0px";
        var btns = document.getElementsByClassName("nav_btn");
        for (i in btns) if (btns[i].style) btns[i].style.fontSize = "0em";
        
    }
}

