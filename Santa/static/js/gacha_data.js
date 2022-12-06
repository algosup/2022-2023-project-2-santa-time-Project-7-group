let gachas_common = [];
let gachas_rare = [];
let gachas_epic = [];
let gachas_legendary = [];
let gachas_mythic = [];

let date = new Date();
let d = date.getDate(); 

for (let i = 1; i <= 24; i++){
    gachas_common.push(`c${i}.png`)
    gachas_rare.push(`r${i}.png`)
    gachas_epic.push(`e${i}.png`)
    gachas_legendary.push(`l${i}.png`)
    gachas_mythic.push(`m${i}.png`)
}

let gacha_chances = [[0, gachas_common], [0.4, gachas_rare], [0.7, gachas_epic], [0.9, gachas_legendary], [0.98, gachas_mythic]];