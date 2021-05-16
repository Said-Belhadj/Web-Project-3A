var slide = new Array(
  "img/home.jpeg",
  "img/home2.jpeg",
  "img/home3.jpeg",
  "img/home4.jpeg"
);
var num = 0;

function ChangeSlide(direction) {
  num = num + direction;
  if (num < 0) num = slide.length - 1;
  if (num > slide.length - 1) num = 0;
  document.getElementById("slide").src = slide[num];
}

setInterval("ChangeSlide(1)", 7000);
