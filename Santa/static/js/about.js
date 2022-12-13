const controller = new AbortController()

// 1 second timeout:

const timeoutId = setTimeout(() => controller.abort(), 1000)

//function to fetch an https url to see if it exists
function urlExists(link) {
    //fetch with timeout
    fetch(link, {method: 'HEAD', mode: 'no-cors',signal: controller.signal})
        .then(function(response) {
            inc++;
            document.getElementById("frame_ref" + inc).href = link;
            document.getElementById("frame" + inc).src = link;
        })
        .catch(function(error) {
            inc++;
            document.getElementById("frame_ref" + inc).style.display = "none";
        });
}
inc = 0;
urlExists("https://xmas.algosup.com/");
urlExists("https://santaclock.algosup.com/");
urlExists("https://santa.algosup.com/");
