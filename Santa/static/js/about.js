function validateURL(link) {
    inc++;
    if (link.indexOf("https://") == 0) {
        document.getElementById("frame_ref" + inc).href = link;
        document.getElementById("frame" + inc).src = link;
    }
    else {
        document.getElementById("frame_ref" + inc).style.visibility = "hidden";
    }
}
var inc = 0

validateURL("xmas.algosup.com/");
validateURL("santaclock.algosup.com/")
validateURL("santa.algosup.com/")