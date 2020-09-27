document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "500px";

    //This is because I still need to figure out how to get this function to return to original bacground color via Chrome browser; i. e. togglinng buttons, the original color does not return.//
    document.getElementById("box").style.backgroundColor = "orange";

});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.height = "150px";

});

document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.animation = "fadeOut, 4a";
    // document.getElementById("box").style.height = "150px";

});

document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";

});
