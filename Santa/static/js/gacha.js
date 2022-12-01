function gacha(day){
    let rand = Math.random();

    for(let i=gacha_chances.length-1; i>-1; i--){
        if(rand>gacha_chances[i][0]) return gacha_chances[i][1][day];
    }
}