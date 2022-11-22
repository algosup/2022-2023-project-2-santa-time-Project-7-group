// These are here for good
const dst = 0;
const E = 0.3829280015475218;

function LT(loc, Z) {
          var location = loc;
          equation = dst + ((15 * Z - location) / 15) - (E/60)
          return equation;
          
}
function hours(lt) {
          hours = Math.floor(lt);
          return hours;
         
}
function minutes(lt) {
          converter = lt * 60;
          minutes = Math.floor(converter % 60);
          return minutes;

}
function seconds(lt) {
          converter = lt * 60;
          seconds = Math.floor(converter % 1 * 60);
          return seconds;
}

function calcSantaTime(loc, Z){
    lt = LT(loc, Z);
    return [hours(lt), minutes(lt), seconds(lt)];
}

console.log(calcSantaTime(2.0698, 1));
