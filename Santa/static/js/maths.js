// These are here for good
const dst = 0;
const E = 0.383;


//#region map
//make map of timezones
var map = new Map();
//add to map the timezones
map.set("Asia/Kabul", +4.30);
map.set("Europe/Tirane", +1);
map.set("Africa/Algiers", +1);
map.set("Pacific/Pago_Pago", -11.00);
map.set("Europe/Andorra", +1);
map.set("Africa/Luanda", +1);
map.set("America/Anguilla", -4);
map.set("Antarctica/Casey", +11.00);
map.set("Antarctica/Davis", +7);
map.set("Antarctica/DumontDUrville", +10.00);
map.set("Antarctica/Mawson", +5);
map.set("Antarctica/McMurdo", +13.00);
map.set("Antarctica/Palmer", -3);
map.set("Antarctica/Rothera", -3);
map.set("Antarctica/Syowa", +3);
map.set("Antarctica/Troll", 0);
map.set("Antarctica/Vostok", +6);
map.set("Barbuda\tAmerica/Antigua", -4);
map.set("America/Argentina/Buenos_Aires", -3);
map.set("America/Argentina/Catamarca", -3);
map.set("America/Argentina/Cordoba", -3);
map.set("America/Argentina/Jujuy", -3);
map.set("America/Argentina/La_Rioja", -3);
map.set("America/Argentina/Mendoza", -3);
map.set("America/Argentina/Rio_Gallegos", -3);
map.set("America/Argentina/Salta", -3);
map.set("America/Argentina/San_Juan", -3);
map.set("America/Argentina/San_Luis", -3);
map.set("America/Argentina/Tucuman", -3);
map.set("America/Argentina/Ushuaia", -3);
map.set("Asia/Yerevan", +4);
map.set("America/Aruba", -4);
map.set("Antarctica/Macquarie", +11.00);
map.set("Australia/Adelaide", +10.30);
map.set("Australia/Brisbane", +10.00);
map.set("Australia/Broken_Hill", +10.30);
map.set("Australia/Darwin", +9.3);
map.set("Australia/Eucla", +08.45);
map.set("Australia/Hobart", +11.00);
map.set("Australia/Lindeman", +10.00);
map.set("Australia/Lord_Howe", +11.00);
map.set("Australia/Melbourne", +11.00);
map.set("Australia/Perth", +8);
map.set("Australia/Sydney", +11.00);
map.set("Europe/Vienna", +1);
map.set("Asia/Baku", +4);
map.set("America/Nassau", -5);
map.set("Asia/Bahrain", +3);
map.set("Asia/Dhaka", +6);
map.set("America/Barbados", -4);
map.set("Europe/Minsk", +3);
map.set("Europe/Brussels", +1);
map.set("America/Belize", -6);
map.set("Africa/Porto-Novo", +1);
map.set("Atlantic/Bermuda", -4);
map.set("Asia/Thimphu", +6);
map.set("America/La_Paz", -4);
map.set("America/Kralendijk", -4);
map.set("Europe/Sarajevo", +1);
map.set("Africa/Gaborone", +2);
map.set("America/Araguaina", -3);
map.set("America/Bahia", -3);
map.set("America/Belem", -3);
map.set("America/Boa_Vista", -4);
map.set("America/Campo_Grande", -4);
map.set("America/Cuiaba", -4);
map.set("America/Eirunepe", -5);
map.set("America/Fortaleza", -3);
map.set("America/Maceio", -3);
map.set("America/Manaus", -4);
map.set("America/Noronha", -2);
map.set("America/Porto_Velho", -4);
map.set("America/Recife", -3);
map.set("America/Rio_Branco", -5);
map.set("America/Santarem", -3);
map.set("America/Sao_Paulo", -3);
map.set("Indian/Chagos", +6);
map.set("Asia/Brunei", +8);
map.set("Europe/Sofia", +2);
map.set("Africa/Ouagadougou", 0);
map.set("Africa/Bujumbura", +2);
map.set("Asia/Phnom_Penh", +7);
map.set("Africa/Douala", +1);
map.set("America/Atikokan", -5);
map.set("America/Blanc-Sablon", -4);
map.set("America/Cambridge_Bay", -7);
map.set("America/Creston", -7);
map.set("America/Dawson", -7);
map.set("America/Dawson_Creek", -7);
map.set("America/Edmonton", -7);
map.set("America/Fort_Nelson", -7);
map.set("America/Glace_Bay", -4);
map.set("America/Goose_Bay", -4);
map.set("America/Halifax", -4);
map.set("America/Inuvik", -7);
map.set("America/Iqaluit", -5);
map.set("America/Moncton", -4);
map.set("America/Pangnirtung", -5);
map.set("America/Rankin_Inlet", -6);
map.set("America/Regina", -6);
map.set("America/Resolute", -6);
map.set("America/St_Johns", -3.3);
map.set("America/Swift_Current", -6);
map.set("America/Toronto", -5);
map.set("America/Vancouver", -8);
map.set("America/Whitehorse", -7);
map.set("America/Winnipeg", -6);
map.set("America/Yellowknife", -7);
map.set("Atlantic/Cape_Verde", -1);
map.set("America/Cayman", -5);
map.set("Africa/Bangui", +1);
map.set("Africa/Ndjamena", +1);
map.set("America/Punta_Arenas", -3);
map.set("America/Santiago", -3);
map.set("Pacific/Easter", -5);
map.set("Asia/Shanghai", +8);
map.set("Asia/Urumqi", +6);
map.set("Indian/Christmas", +7);
map.set("Indian/Cocos", +6.3);
map.set("America/Bogota", -5);
map.set("Indian/Comoro", +3);
map.set("Africa/Brazzaville", +1);
map.set("Africa/Kinshasa", +1);
map.set("Africa/Lubumbashi", +2);
map.set("Pacific/Rarotonga", -10.00);
map.set("America/Costa_Rica", -6);
map.set("Europe/Zagreb", +1);
map.set("America/Havana", -5);
map.set("America/Curacao", -4);
map.set("Asia/Famagusta", +2);
map.set("Asia/Nicosia", +2);
map.set("Europe/Prague", +1);
map.set("Africa/Abidjan", 0);
map.set("Europe/Copenhagen", +1);
map.set("Africa/Djibouti", +3);
map.set("America/Dominica", -4);
map.set("America/Santo_Domingo", -4);
map.set("America/Guayaquil", -5);
map.set("Pacific/Galapagos", -6);
map.set("Africa/Cairo", +2);
map.set("America/El_Salvador", -6);
map.set("Africa/Malabo", +1);
map.set("Africa/Asmara", +3);
map.set("Europe/Tallinn", +2);
map.set("Africa/Addis_Ababa", +3);
map.set("Atlantic/Stanley", -3);
map.set("Atlantic/Faroe", 0);
map.set("Pacific/Fiji", +12.00);
map.set("Europe/Helsinki", +2);
map.set("Europe/Paris", +1);
map.set("America/Cayenne", -3);
map.set("Pacific/Gambier", -8);
map.set("Pacific/Marquesas", -9.3);
map.set("Pacific/Tahiti", -10.00);
map.set("Indian/Kerguelen", +5);
map.set("Africa/Libreville", +1);
map.set("Africa/Banjul", 0);
map.set("Asia/Tbilisi", +4);
map.set("Europe/Berlin", +1);
map.set("Europe/Busingen", +1);
map.set("Africa/Accra", 0);
map.set("Europe/Gibraltar", +1);
map.set("Europe/Athens", +2);
map.set("America/Danmarkshavn", 0);
map.set("America/Nuuk", -3);
map.set("America/Scoresbysund", -1);
map.set("America/Thule", -4);
map.set("America/Grenada", -4);
map.set("America/Guadeloupe", -4);
map.set("Pacific/Guam", +10.00);
map.set("America/Guatemala", -6);
map.set("Europe/Guernsey", 0);
map.set("Africa/Conakry", 0);
map.set("Africa/Bissau", 0);
map.set("America/Guyana", -4);
map.set("America/Port-au-Prince", -5);
map.set("Europe/Vatican", +1);
map.set("America/Tegucigalpa", -6);
map.set("Asia/Hong_Kong", +8);
map.set("Europe/Budapest", +1);
map.set("Atlantic/Reykjavik", 0);
map.set("Asia/Kolkata", +5.3);
map.set("Asia/Jakarta", +7);
map.set("Asia/Jayapura", +8);
map.set("Asia/Makassar", +8);
map.set("Asia/Pontianak", +7);
map.set("Asia/Tehran", +3.3);
map.set("Asia/Baghdad", +3);
map.set("Europe/Dublin", 0);
map.set("Europe/Isle_of_Man", 0);
map.set("Asia/Jerusalem", +2);
map.set("Europe/Rome", +1);
map.set("America/Jamaica", -5);
map.set("Asia/Tokyo", +8);
map.set("Europe/Jersey", 0);
map.set("Asia/Amman", +3);
map.set("Asia/Almaty", +6);
map.set("Asia/Aqtau", +5);
map.set("Asia/Aqtobe", +5);
map.set("Asia/Atyrau", +5);
map.set("Asia/Oral", +5);
map.set("Asia/Qostanay", +6);
map.set("Asia/Qyzylorda", +5);
map.set("Africa/Nairobi", +3);
map.set("Pacific/Kanton", +13.00);
map.set("Pacific/Kiritimati", +14.00);
map.set("Pacific/Tarawa", +12.00);
map.set("Asia/Pyongyang", +8);
map.set("Asia/Seoul", +8);
map.set("Asia/Kuwait", +3);
map.set("Asia/Bishkek", +6);
map.set("Asia/Vientiane", +7);
map.set("Europe/Riga", +2);
map.set("Asia/Beirut", +2);
map.set("Africa/Maseru", +2);
map.set("Africa/Monrovia", 0);
map.set("Africa/Tripoli", +2);
map.set("Europe/Vaduz", +1);
map.set("Europe/Vilnius", +2);
map.set("Europe/Luxembourg", +1);
map.set("Asia/Macau", +8);
map.set("Europe/Skopje", +1.00);
map.set("Indian/Antananarivo", +3);
map.set("Africa/Blantyre", +2);
map.set("Asia/Kuala_Lumpur", +8);
map.set("Asia/Kuching", +8);
map.set("Indian/Maldives", +5);
map.set("Africa/Bamako", 0);
map.set("Europe/Malta", +1);
map.set("Pacific/Kwajalein", +12.00);
map.set("Pacific/Majuro", +12.00);
map.set("America/Martinique", -4);
map.set("Africa/Nouakchott", 0);
map.set("Indian/Mauritius", +4);
map.set("Indian/Mayotte", +3);
map.set("America/Bahia_Banderas", -6);
map.set("America/Cancun", -5);
map.set("America/Chihuahua", -6);
map.set("America/Hermosillo", -7);
map.set("America/Matamoros", -6);
map.set("America/Mazatlan", -7);
map.set("America/Merida", -6);
map.set("America/Mexico_City", -6);
map.set("America/Monterrey", -6);
map.set("America/Ojinaga", -6);
map.set("America/Tijuana", -8);
map.set("Pacific/Chuuk", +10.00);
map.set("Pacific/Kosrae", +11.00);
map.set("Pacific/Pohnpei", +11.00);
map.set("Europe/Chisinau", +2);
map.set("Europe/Monaco", +1);
map.set("Asia/Choibalsan", +8);
map.set("Asia/Hovd", +7);
map.set("Asia/Ulaanbaatar", +8);
map.set("Europe/Podgorica", +1);
map.set("America/Montserrat", -4);
map.set("Africa/Casablanca", +1);
map.set("Africa/El_Aaiun", +1);
map.set("Africa/Maputo", +2);
map.set("Asia/Yangon", +6.3);
map.set("Africa/Windhoek", +2);
map.set("Pacific/Nauru", +12.00);
map.set("Asia/Kathmandu", +5.45);
map.set("Europe/Amsterdam", +1);
map.set("Pacific/Noumea", +11.00);
map.set("Pacific/Auckland", +13.00);
map.set("Pacific/Chatham", +13.45);
map.set("America/Managua", -6);
map.set("Africa/Niamey", +1);
map.set("Africa/Lagos", +1);
map.set("Pacific/Niue", -11.00);
map.set("Pacific/Norfolk", +12.00);
map.set("Pacific/Saipan", +10.00);
map.set("Europe/Oslo", +1);
map.set("Asia/Muscat", +4);
map.set("Asia/Karachi", +5);
map.set("Pacific/Palau", +8);
map.set("Asia/Gaza", +2);
map.set("Asia/Hebron", +2);
map.set("America/Panama", -5);
map.set("Pacific/Bougainville", +11.00);
map.set("Pacific/Port_Moresby", +10.00);
map.set("America/Asuncion", -3);
map.set("America/Lima", -5);
map.set("Asia/Manila", +8);
map.set("Pacific/Pitcairn", -8);
map.set("Europe/Warsaw", +1);
map.set("Atlantic/Azores", -1);
map.set("Atlantic/Madeira", 0);
map.set("Europe/Lisbon", 0);
map.set("America/Puerto_Rico", -4);
map.set("Asia/Qatar", +3);
map.set("Europe/Bucharest", +2);
map.set("Asia/Anadyr", +12.00);
map.set("Asia/Barnaul", +7);
map.set("Asia/Chita", +8);
map.set("Asia/Irkutsk", +8);
map.set("Asia/Kamchatka", +12.00);
map.set("Asia/Khandyga", +8);
map.set("Asia/Krasnoyarsk", +7);
map.set("Asia/Magadan", +11.00);
map.set("Asia/Novokuznetsk", +7);
map.set("Asia/Novosibirsk", +7);
map.set("Asia/Omsk", +6);
map.set("Asia/Sakhalin", +11.00);
map.set("Asia/Srednekolymsk", +11.00);
map.set("Asia/Tomsk", +7);
map.set("Asia/Ust-Nera", +10.00);
map.set("Asia/Vladivostok", +10.00);
map.set("Asia/Yakutsk", +8);
map.set("Asia/Yekaterinburg", +5);
map.set("Europe/Astrakhan", +4);
map.set("Europe/Kaliningrad", +2);
map.set("Europe/Kirov", +3);
map.set("Europe/Moscow", +3);
map.set("Europe/Samara", +4);
map.set("Europe/Saratov", +4);
map.set("Europe/Ulyanovsk", +4);
map.set("Europe/Volgograd", +3);
map.set("Africa/Kigali", +2);
map.set("Indian/Reunion", +4);
map.set("America/St_Barthelemy", -4);
map.set("Atlantic/St_Helena", 0);
map.set("America/St_Kitts", -4);
map.set("America/St_Lucia", -4);
map.set("America/Marigot", -4);
map.set("America/Miquelon", -3);
map.set("America/St_Vincent", -4);
map.set("Pacific/Apia", +13.00);
map.set("Europe/San_Marino", +1);
map.set("Africa/Sao_Tome", 0);
map.set("Asia/Riyadh", +3);
map.set("Africa/Dakar", 0);
map.set("Europe/Belgrade", +1);
map.set("Indian/Mahe", +4);
map.set("Africa/Freetown", 0);
map.set("Asia/Singapore", +8);
map.set("America/Lower_Princes", -4);
map.set("Europe/Bratislava", +1);
map.set("Europe/Ljubljana", +1);
map.set("Pacific/Guadalcanal", +11.00);
map.set("Africa/Mogadishu", +3);
map.set("Africa/Johannesburg", +2);
map.set("Atlantic/h_Georgia", -2);
map.set("Africa/Juba", +2);
map.set("Africa/Ceuta", +1);
map.set("Atlantic/Canary", 0);
map.set("Europe/Madrid", +1);
map.set("Asia/Colombo", +5.3);
map.set("Africa/Khartoum", +2);
map.set("America/Paramaribo", -3);
map.set("Arctic/Longyearbyen", +1);
map.set("Africa/Mbabane", +2);
map.set("Europe/Stockholm", +1);
map.set("Europe/Zurich", +1);
map.set("Asia/Damascus", +3);
map.set("Asia/Taipei", +8);
map.set("Asia/Dushanbe", +5);
map.set("Africa/Dar_es_Salaam", +3);
map.set("Asia/Bangkok", +7);
map.set("Asia/Dili", +8);
map.set("Africa/Lome", 0);
map.set("Pacific/Fakaofo", +13.00);
map.set("Pacific/Tongatapu", +13.00);
map.set("America/Port_of_Spain", -4);
map.set("Africa/Tunis", +1);
map.set("Europe/Istanbul", +3);
map.set("Asia/Ashgabat", +5);
map.set("America/Grand_Turk", -5);
map.set("Pacific/Funafuti", +12.00);
map.set("Africa/Kampala", +3);
map.set("Europe/Kyiv", +2);
map.set("Europe/Simferopol", +3);
map.set("Asia/Dubai", +4);
map.set("Europe/London", 0);
map.set("America/Adak", -10.00);
map.set("America/Anchorage", -8);
map.set("America/Boise", -7);
map.set("America/Chicago", -6);
map.set("America/Denver", -7);
map.set("America/Detroit", -5);
map.set("America/Indiana/Indianapolis", -5);
map.set("America/Indiana/Knox", -6);
map.set("America/Indiana/Marengo", -5);
map.set("America/Indiana/Petersburg", -5);
map.set("America/Indiana/Tell_City", -6);
map.set("America/Indiana/Vevay", -5);
map.set("America/Indiana/Vincennes", -5);
map.set("America/Indiana/Winamac", -5);
map.set("America/Juneau", -8);
map.set("America/Kentucky/Louisville", -5);
map.set("America/Kentucky/Monticello", -5);
// map.set("America/Los_Angeles",-8);
map.set("America/Los_Angeles", -8);
map.set("America/Menominee", -6);
map.set("America/Metlakatla", -8);
map.set("America/New_York", -5);
map.set("America/Nome", -8);
map.set("America/North_Dakota/Beulah", -6);
map.set("America/North_Dakota/Center", -6);
map.set("America/North_Dakota/New_Salem", -6);
map.set("America/Phoenix", -7);
map.set("America/Sitka", -8);
map.set("America/Yakutat", -8);
map.set("Pacific/Honolulu", -10.00);
map.set("Pacific/Midway", -11.00);
map.set("Pacific/Wake", +12.00);
map.set("America/Montevideo", -3);
map.set("Asia/Samarkand", +5);
map.set("Asia/Tashkent", +5);
map.set("Pacific/Efate", +11.00);
map.set("America/Caracas", -4);
map.set("Asia/Ho_Chi_Minh", +7);
map.set("America/Tortola", -4);
map.set("America/St_Thomas", -4);
map.set("Pacific/Wallis", +12.00);
map.set("Asia/Aden", +3);
map.set("Africa/Lusaka", +2);
map.set("Africa/Harare", +2);
map.set("Europe/Mariehamn", +2);

//#endregion

function modulo(a, b) {
    return a - b * Math.floor(a / b);
}

function LT(loc, Z) {
    return dst + ((15 * Z - loc) / 15) - (E / 60);
}

function hours(lt) {
    return Math.trunc(lt);

}

function minutes(lt, h) {
    return Math.trunc(60 * (lt - h));;

}

function seconds(lt, h, m) {
    return Math.trunc(3600 * (lt - h - m / 60));;
}

function calcSantaTime(loc, Z) {
    var lt = LT(loc, Z);
    var h = hours(lt);
    var m = minutes(lt, h);
    var s = seconds(lt, h, m);
    return [h, m, s];
}

function useGPS() {
    if (navigator.geolocation) {
        const options = {
            timeout: 5000,
        };
        navigator.geolocation.getCurrentPosition(position => {
            timeZone(position.coords.latitude, position.coords.longitude)
        }, err => console.log(err), options);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

}

function timeZone(lat, long) {
    //get the time zone
    var url = "https://noel.gq/tz/" + lat + "/" + long;
    //cors policy 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //get utc offset
            var Z = map.get(data.tz);
            if (Z == undefined) {
                //check if tz contains "GMT"
                if (data.tz.includes("Etc/GMT")) {
                    //set Z to the number after GMT
                    Z = data.tz.substring(7);
                }
                return;
            }
            var final = calcSantaTime(long, Z);

            timeDiff(final, Z);
        })
        .catch(err => {
            console.log(err);
        })
}

var lastFinal = "";

function getAnswer(final) {
    // Get the location
    document.getElementById("autocomplete_list").innerHTML = "";
    let formatData = document.getElementById("location").value;
    //replace spaces with +
    formatData = formatData.replace(/ /g, "+");
    if (formatData == lastFinal) {
        return;
    } else {
        lastFinal = "";
    }
    //use nominatim api to get lat and long
    var url = "https://noel.gq/api?q=" + formatData;
    //fetch the data
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length == 0) {
                document.getElementById("answer").innerText = "Invalid location";
                return;
            }
            if (data.features.length == 1 || final) {
                lastFinal = formatData;
                document.getElementById("autocomplete_list").innerHTML = "";
                document.getElementById("autocomplete_list").style.height = "0px";
                //get the lat and long
                var lat = data.features[0].geometry.coordinates[1];
                var long = data.features[0].geometry.coordinates[0];
                timeZone(lat, long);

            } else {
                var temp = [];
                // add li element to ul of id="autocomplete_list" with name of location
                for (var i = 0; i < data.features.length; i++) {
                    if (data.features[i].properties.type != "city" && data.features[i].properties.type != "street" && data.features[i].properties.type != "house") {
                        continue;
                    }

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
                        if (data.features[i].properties.type == "city") {
                            city = data.features[i].properties.name;
                        } else {
                            city = "";
                            continue;
                        }
                    }
                    if (data.features[i].properties.country != null) {
                        country = data.features[i].properties.country;
                    } else {
                        country = "";
                        continue;
                    }
                    var text ="";
                    if (data.features[i].properties.type == "city") {
                        text = city + ", " + country;
                    } else {
                        text = streetnbr + " " + street + ", " + city + ", " + country;
                    }

                    var exists = false;
                    //check if the li element is already in the list
                    for (var j = 0; j < temp.length; j++) {
                        if (temp.includes(text)) {
                            exists = true;
                        }
                    }
                    if (exists) {
                        continue;
                    }

                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(text));

                    li.setAttribute("id", data.features[i].geometry.coordinates[1] + "," + data.features[i].geometry.coordinates[0]);
                    li.addEventListener("click", function () {
                        document.getElementById("location").value = this.innerText;
                        //get the id and split it by the comma
                        var id = this.id.split(",");
                        //get the lat and long
                        var lat = id[0];
                        var long = id[1];
                        //get the time zone
                        timeZone(lat, long);
                        document.getElementById("autocomplete_list").innerHTML = "";
                        document.getElementById("autocomplete_list").style.height = "0px";
                    });

                    //add li to temp
                    temp.push(li);
                    document.getElementById("autocomplete_list").style.height = "fit-content";
                    //document.getElementById("autocomplete_list").style.maxHeight = "68%";
                    document.getElementById("autocomplete_list").appendChild(li);
                }
            }
        })
        .catch(err => console.warn(err.message));
}

//onkeyup event for the input wait 1 second before calling getAnswer
var timeout = null;
document.getElementById("location").onkeyup = function () {
    clearTimeout(timeout);
    timeout = setTimeout(getAnswer(false), 1500);
};

function timeDiff(arr, utc) {
    //h m s in array are 24 of dec at  corresponding to local midnight 
    //get current day and month 
    var date = new Date();
    var day = 0;
    var month = date.getMonth() + 1;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    if (month != 12 || date.getDate() > 24) {
        //get days in month
        let daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
        day += daysInMonth - date.getDate();
        //for between current month and december
        for (var i = month + 1; i < 11; i++) {
            //get days in month
            daysInMonth = new Date(date.getFullYear(), i + 1, 0).getDate();
            //add days in month to day
            day += daysInMonth;
        }
        //add days in december if not dec
        if (month != 12) {
            day += 24;
        }
    } else {
        day = 24 - date.getDate();
    }
    hours = 24 + arr[0] - date.getHours() - utc;
    minutes = 60 + arr[1] - date.getMinutes();
    seconds = 60 + arr[2] - date.getSeconds();
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    } else if (seconds > 60) {
        seconds -= 60;
        minutes++;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    } else if (minutes > 60) {
        minutes -= 60;
        hours++;
    }
    if (hours < 0) {
        hours += 24;
        day--;
    } else if (hours > 24) {
        hours -= 24;
        day++;
    }

    //document.getElementById("time").innerText = day + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds \n Which is in:";
    enddate = new Date(date.getFullYear(), 11, day+date.getDate(), hours+date.getHours(), minutes+date.getMinutes(), seconds+date.getSeconds());
    createClock(enddate);
}