var img = "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg";

var image = document.querySelector(".class-demo");
/* SET */
image.setAttribute("src", img);
image.setAttribute("alt", "This is an image");
image.setAttribute("width", 300);
image.setAttribute("title", "Tieu de cua hinh anh");

//console.log(image);

/* GET */

var elDataTitle = Array.from(document.querySelectorAll("[data-title"));
var temp = '';
for(var i = 0; i < elDataTitle.length; i++)
{
    //console.log(elDataTitle[i], i);
    console.log(elDataTitle[i].getAttribute("data-title"));
    temp = temp + elDataTitle[i].getAttribute("data-title") + ' ';
}

console.log("temp = ", temp);

document.getElementById("demo").setAttribute("data-title", temp.trim());

console.log(elDataTitle);

console.log("Truy xuat thuoc tinh cach 2: ", image.src);
console.log("Truy xuat thuoc tinh cach 2: ", image.getAttribute("src"));

console.log("Class cua phan tu img: ", image.getAttribute("class"));
