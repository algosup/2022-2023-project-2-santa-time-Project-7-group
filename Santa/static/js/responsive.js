console.log("is loaded")
var loca = document.getElementById("location")
loca.ontouchstart = function () {
    document.getElementsByClassName("header")[0].style.display = "none";
    document.getElementsByClassName("footer")[0].style.display = "none";
    document.getElementById("calendar_btn").style.display = "none";
    document.getElementsByClassName("container_santa")[0].style.justifyContent = "start";
    document.getElementsByClassName("inputs")[0].style.marginTop = "2vh"
    loca.select();
}

window.onresize = function () {
    document.getElementsByClassName("header")[0].style.display = "flex";
    document.getElementById("calendar_btn").style.display ="flex";
    document.getElementsByClassName("footer")[0].style.display = "flex";
    document.getElementsByClassName("container_santa")[0].style.justifyContent = "center";
}