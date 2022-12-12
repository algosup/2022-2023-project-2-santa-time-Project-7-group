function gacha(day){
    let rand = Math.random();

    for(let i=gacha_chances.length-1; i>-1; i--){
        if(rand>gacha_chances[i][0]){
            if (localStorage.getItem("santa_gachas") === null) {
                localStorage.setItem("santa_gachas", JSON.stringify([[day, gacha_chances[i][1][day-1]]]));
            }else{
                let santa_gachas = JSON.parse(localStorage.getItem("santa_gachas"));
                santa_gachas.push([day, gacha_chances[i][1][day-1]]);

                localStorage.setItem("santa_gachas", JSON.stringify(santa_gachas));

            }

            return gacha_chances[i][1][day-1];
        }
    }
}

function verifGachaHistory(day){
    let santa_gachas = JSON.parse(localStorage.getItem("santa_gachas"));
    if(santa_gachas === null || santa_gachas.filter(e => e[0] == day).length == 0) return true;

    return false;
}

function getGacha(day){

    return JSON.parse(localStorage.getItem("santa_gachas")).filter(e => e[0] == day)[0][1];
}