// These are here for good
const dst = 0;
const E = 0.3829280015475218;

function LT(loc, Z) {
    var location = loc;
    equation = dst + ((15 * Z - location) / 15) - (E / 60)
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

function calcSantaTime(loc, Z) {
    lt = LT(loc, Z);
    return [hours(lt), minutes(lt), seconds(lt)];
}

// console.log(calcSantaTime(2.0698, 1));

function getAnswer() {
    //use nominatim api to get lat and long
    var url = "https://13.73.147.115:2322/api?q=" + document.getElementById("location").value + "+" + document.getElementById("country").title + "&format=json&polygon=1&addressdetails=1";
    console.log(url);
    //fetch the data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length == 0) {
                document.getElementById("answer").innerText = "Invalid location";
                return;
            }
            if (json.features.length > 1) {
                //get the lat and long
                var lat = data[0].lat;
                var long = data[0].lon;
                //get the time zone
                var url = "https://fastapi.geogarage.com/timezone/?lat=" + lat + "&lon=" + long + "&key=6d4558cef22ce8b18718f88b233f6d72a7c4ed8b";
                //cors policy 
                fetch(url, {
                        mode: 'no-cors'
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        //get utc offset
                        var Z = data.utc_offset;
                        var final = calcSantaTime(lat, Z);
                        //write to answer id="time"
                        document.getElementById("answer").innerText = final[0] + ":" + final[1] + ":" + final[2];
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                // add li element to ul of id="autocomplete_list" with name of location
                for (var i = 0; i < data.length; i++) {
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(data[i].display_name));
                    li.addEventListener("click", function () {
                        document.getElementById("location").value = this.innerText;
                        document.getElementById("autocomplete_list").innerHTML = "";
                    });
                    document.getElementById("autocomplete_list").appendChild(li);
                }
            }
        })
        .catch(err => console.warn(err.message));
}