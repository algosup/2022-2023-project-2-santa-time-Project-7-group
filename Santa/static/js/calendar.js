var calendar = document.getElementById("popup_calendar");
var btn_in = document.getElementById("calendar_btn");
var btn_out = document.getElementById("close_popup");
var img_out = document.getElementById("close_img");
var grid = document.getElementById("grid");
var rarittyID = document.getElementById("rarity");

//var imgPath = "./img/gachas/";

base = "https://raw.githubusercontent.com/algosup/2022-2023-project-2-santa-time-Project-7-group/gatcha-image/gachas/"
raw = "?raw=true"

btn_out.onclick = function () {
    calendar.style.display = "none";
};

btn_in.onclick = function () {
    calendar.style.display = "block";
    div = document.getElementById("div_id1");
    if (div == 'undefined' || div == null) {
        div24();
    }
};

function bigImage(i) {
    //const d = new Date();
    let date = new Date();
    let d = date.getDate(); 
    if (i <= d) {
        document.getElementById("big_image").style.display = "flex";
        document.getElementById("denter_grid").style.display = "none";

        if (verifGachaHistory(i)) gacha(i);

        rarity = Array.from(getGacha(i))[0];
        SetRarity(rarity)
        localStorage.setItem(`div_${i}`, rarity);

        imgIco(base + getGacha(i) + raw, i);
        SetRarityIco(rarity, i)

        document.getElementById("imgdisp").src = "";
        document.getElementById("imgdisp").src = base + getGacha(i) + raw;

        document.getElementById("close_popup").style.display = "none";
    }
    else {
        document.getElementById("tooSoon").style.display = "flex";
        document.getElementById("setText").innerHTML = `${i - d} days too soon`;
    }
}

document.getElementById("tooSoon").onclick = function () {
    document.getElementById("tooSoon").style.display = "none";
}

document.getElementById("popup_calendar").onclick = function(event){;
    let once = false;
    let twice =true;
    if (document.getElementById('big_image').style.display == "none" || document.getElementById('big_image').style.display == ""){
        once = true;
    }
    if (document.getElementById('tooSoon').style.display == "none" || document.getElementById('tooSoon').style.display == ""){
        twice = true;
    }
    if(once && twice && (event.path[0].id).includes("popup_calendar")){
        event.path[0].style.display = 'none';
    }
};  

function imgOut() {
    document.getElementById("big_image").style.display = "none";
    document.getElementById("denter_grid").style.display = "block";
    document.getElementById("close_popup").style.display = "block";
}

function div24() {
    var arr1 = [...Array(24).keys()].map(x => ++x);

    // arr1 = new shuffleArray(arr1);
    for (let i = 0; i < arr1.length; i++) {
        makeDiv24(arr1[i]);
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function makeDiv24(i) {
    a = localStorage.getItem(`div_${i}`)
    if (a == null) {
        let div = document.createElement("div");
        div.innerHTML = i;
        div.id = `div_id${i}`;
        div.setAttribute("onclick", `bigImage(${i})`);
        div.className = "notranslate"
        grid.appendChild(div);
    } else {
        let div = document.createElement("div");
        div.id = `div_id${i}`;
        div.setAttribute("onclick", `bigImage(${i})`);
        div.className = "notranslate"
        grid.appendChild(div);

        imgIco(base + getGacha(i) + raw, i)
        SetRarityIco(a, i)
    }
}

function imgIco(inglink, i) {
    img = document.createElement("img")
    img.src = inglink
    img.classList.add("imgico");

    document.getElementById(`div_id${i}`).innerHTML = ""
    document.getElementById(`div_id${i}`).appendChild(img)
}

function SetRarity(r) {
    switch (r) {
        case "r":
            rarittyID.className = "rare"
            rarittyID.childNodes[1].textContent = "RARE"
            break;
        case "e":
            rarittyID.className = "epic"
            rarittyID.childNodes[1].textContent = "EPIC"
            break;
        case "l":
            rarittyID.className = "legendary"
            rarittyID.childNodes[1].textContent = "LEGENDARY"
            break;
        case "m":
            rarittyID.className = "mythical"
            rarittyID.childNodes[1].textContent = "MYTHICAL"
            break;
        default:
            rarittyID.className = "common"
            rarittyID.childNodes[1].textContent = "COMMON"
    }
}

function SetRarityIco(r, i) {
    switch (r) {
        case "r":
            document.getElementById(`div_id${i}`).className = "rico"
            break;
        case "e":
            document.getElementById(`div_id${i}`).className = "eico"
            break;
        case "l":
            document.getElementById(`div_id${i}`).className = "lico"
            break;
        case "m":
            document.getElementById(`div_id${i}`).className = "mico"
            break;
        default:
            document.getElementById(`div_id${i}`).className = "cico"
    }
}