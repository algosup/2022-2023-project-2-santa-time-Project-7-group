const dst = 0;
const Z = 1;
const loc =  2.0698;
const E = 0.3829280015475218;

function LT() {
          var location = loc;
          equation = dst + ((15 * Z - location) / 15) - (E/60)
          return equation;
          
}
function hours() {
          hours = Math.floor(LT());
          return hours;
         
}
function minutes() {
          converter = LT() * 60;
          minutes = Math.floor(converter % 60);
          return minutes;

}
function seconds() {
          converter = LT() * 60;
          seconds = Math.floor(converter % 1 * 60);
          return seconds;
}
console.log(LT());
console.log(hours());
console.log(minutes());
console.log(seconds());
