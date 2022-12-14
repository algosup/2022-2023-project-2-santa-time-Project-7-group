function cookieHandler() {
          document.getElementById("cookie").style.display = "none";
          localStorage.setItem("cookie_accepted", "true");
}
if (localStorage.getItem("cookie_accepted") == "true") {
          document.getElementById("cookie").style.display = "none";
}