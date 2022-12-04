const searchbar = document.querySelector("#location");
const body = document.querySelector("body");
const santa = document.querySelector('#santa')
const searchdiv = document.querySelector(".container_santa")

searchbar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      body.classList.toggle("entered");
      body.classList.toggle("bodystyle");
      santa.classList.toggle("image-color")
      searchdiv.style.color = "white";
    }
});