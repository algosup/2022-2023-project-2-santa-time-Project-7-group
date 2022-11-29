// These are here for good
const dst = 0;
const E = 0.383;

function modulo(a, b) {
    return a - b * Math.floor(a / b);
}

function LT(loc, Z) {
    return dst + ((15 * Z - loc) / 15) - (E / 60);
}

function hours(lt) {
    return Math.trunc(lt);

}

function minutes(lt,h) {
    return Math.trunc(60*(lt-h));;

}

function seconds(lt,h,m) {
    return Math.trunc(3600*(lt-h-m/60));;
}

function calcSantaTime(loc, Z) {
    var lt = LT(loc, Z);
    var h = hours(lt);
    var m = minutes(lt, h);
    var s = seconds(lt, h, m);
    return [h,m,s];
}

// console.log(calcSantaTime(2.0698, 1));

function getAnswer() {
    // Get the location
    document.getElementById("autocomplete_list").innerHTML = "";
    let formatData = document.getElementById("location").value;
    //replace spaces with +
    formatData = formatData.replace(/ /g, "+");
    //use nominatim api to get lat and long
    var url = "http://noel.gq/api?q=" + formatData;
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
            if (data.features.length == 1) {
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
                for (var i = 0; i < data.features.length; i++) {
                    if (data.features[i].properties.type != "city" && data.features[i].properties.type != "street" && data.features[i].properties.type != "house") {
                        continue;
                    }

                    var li = document.createElement("li");
                    let streetnbr, street, city, country;
                    if (data.features[i].properties.housenumber != null) {
                        streetnbr = data.features[i].properties.housenumber;
                    } else {
                        if (data.features[i].properties.name != null) {
                            streetnbr = data.features[i].properties.name;
                        } else {
                            streetnbr = "";
                        }
                    }
                    if (data.features[i].properties.street != null) {
                        street = data.features[i].properties.street;
                    } else {
                        street = "";
                    }
                    if (data.features[i].properties.city != null) {
                        city = data.features[i].properties.city;
                    } else {
                        city = "";
                        continue;
                    }
                    if (data.features[i].properties.country != null) {
                        country = data.features[i].properties.country;
                    } else {
                        country = "";
                        continue;
                    }
                    console.log(data.features[i].properties);
                    console.log(streetnbr + " " + street + " " + city + " " + country);

                    li.appendChild(document.createTextNode(streetnbr + " " + street + ", " + city + ", " + country));
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