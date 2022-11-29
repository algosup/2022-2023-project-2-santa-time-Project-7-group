var calendar = document.getElementById("popup_calendar");
var btn_in = document.getElementById("calendar_btn");
var btn_out = document.getElementById("close_popup");
var grid = document.getElementById("grid");

btn_out.onclick = function () {
    calendar.style.display = "none";
};

btn_in.onclick = function () {
    calendar.style.display = "block";
    div = document.getElementById("div_id1")
    if (div == 'undefined' || div == null){
        div24()
    }
};


















function div24() {
    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    var arr = new shuffleArray(arr1)
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement("div");    
        div.innerHTML = arr[i]
        div.id = `div_id${arr[i]}`;
        grid.appendChild(div);
    }
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}