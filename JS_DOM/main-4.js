function handleClick() {
    console.log("click");
}

var colorSkinId = document.getElementById("color-skin");

function changeStyleColor(href) {
   // console.log(href);
   colorSkinId.setAttribute("href", href);
}

var containerDiv = document.querySelector(".container");

function changeStyleContainer(type) {
    var newClass = "container " + type;
    containerDiv.setAttribute("class", newClass);
    console.log(type);
}

