let my_canvas = document.getElementById("mycanvas");
let my_context = my_canvas.getContext("2d");
my_context.fillStyle = "black";
my_context.fillRect(10, 10, 1290, 50);
my_context.fillStyle = "blue";
my_context.font = "bold 46px chiller";
my_context.fillText("The Mega Store...", 500, 50);

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let newcan = document.getElementById("view1canvas");
let newctx = newcan.getContext("2d");

img1.addEventListener("click", function () {
  newctx.drawImage(img1, 20, 20);
});
