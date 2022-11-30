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

        imgIco("./img/tree.png", i)

        localStorage.setItem(`div_${i}`, "./img/tree.png");

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

function imgOut() {
    document.getElementById("big_image").style.display = "none";
    document.getElementById("denter_grid").style.display = "block";
    document.getElementById("close_popup").style.display = "block";
}

function div24() {
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    //arr1 = new shuffleArray(arr1);
    for (let i = 0; i < arr1.length; i++) {
        makeDiv24(arr1[i])
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function makeDiv24(i) {
    a = localStorage.getItem(`div_${i}`)
    if(a == null){
        let div = document.createElement("div");    
        div.innerHTML = i;
        div.id = `div_id${i}`;
        div.setAttribute("onclick" , `bigImage(${i})`);
        grid.appendChild(div);
    }else{
        let div = document.createElement("div");
        div.id = `div_id${i}`;
        div.setAttribute("onclick" , `bigImage(${i})`);
        grid.appendChild(div);

        imgIco(a, i)
    }
}

function imgIco(inglink, i) {
    img = document.createElement("img")
    img.src = inglink
    img.classList.add("imgico");

    document.getElementById(`div_id${i}`).innerHTML = ""
    document.getElementById(`div_id${i}`).appendChild(img)
    document.getElementById(`div_id${i}`).style.display = "flex"
    document.getElementById(`div_id${i}`).style.justifyContent ="center"
}