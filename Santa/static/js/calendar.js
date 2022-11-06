var calendar = document.getElementById("popup_calendar");
var btn_in = document.getElementById("calendar_btn");
var btn_out = document.getElementById("close_popup");
var img_out = document.getElementById("close_img");
var grid = document.getElementById("grid");

btn_out.onclick = function () {
    calendar.style.display = "none";
};

btn_in.onclick = function () {
    calendar.style.display = "block";
    div = document.getElementById("div_id1");
    if (div == 'undefined' || div == null){
        div24();
    }
};

function bigImage (i) {
    //const d = new Date();
    let date = new Date();
    let d = date.getDate();
    if(i <= d){
        document.getElementById("big_image").style.display = "flex";
        document.getElementById("denter_grid").style.display = "none";
        document.getElementById("close_popup").style.display = "none";
    }
    else {
        document.getElementById("tooSoon").style.display = "block";
        document.getElementById("setText").innerHTML = `${i - d} days too soon`;
    }
}

document.getElementById("tooSoon").onclick = function() {
    document.getElementById("tooSoon").style.display = "none";
}

img_out.onclick = function () {
    document.getElementById("big_image").style.display = "none";
    document.getElementById("denter_grid").style.display = "block";
    document.getElementById("close_popup").style.display = "block";
}

function div24() {
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    var arr = new shuffleArray(arr1);
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement("div");    
        div.innerHTML = arr[i];
        div.id = `div_id${arr[i]}`;
        div.setAttribute("onclick" , `bigImage(${arr[i]})`);
        grid.appendChild(div);
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}